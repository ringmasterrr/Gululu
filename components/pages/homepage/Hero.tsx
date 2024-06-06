"use client";

import Image from "next/image";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Countdown from "../../utilities/Countdown";
import SelectCurrency from "../../utilities/Dropdown";
import { AnchorProvider, BN, Program, web3 } from "@coral-xyz/anchor";
import {
  ASSOCIATED_TOKEN_PROGRAM_ID,
  TOKEN_PROGRAM_ID,
  getAssociatedTokenAddress,
} from "@solana/spl-token";
import {
  AnchorWallet,
  useAnchorWallet,
  useConnection,
  useWallet,
} from "@solana/wallet-adapter-react";
import { IDL } from "@/components/utilities/idl";
import { MEME_PROGRAM_ID } from "@/components/utilities/programConsts";
import { LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import StakingCard from "@/components/pages/homepage/HeroCard";
import Calculator from "@/components/utilities/calculator";
import { PythSolanaReceiver } from "@pythnetwork/pyth-solana-receiver";
import NodeWallet from "@coral-xyz/anchor/dist/cjs/nodewallet";
import { token } from "@coral-xyz/anchor/dist/cjs/utils";
import BuyGululu from "@/components/ui/BuyGululu";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useWalletMultiButton } from "@solana/wallet-adapter-base-ui";
import { TransactionStatusPopup } from "@/components/ui/StatusAlert";
import {Gululu_price} from "@/components/utilities/gululu_phases";

const Section1 = ({
  publicKey,
  setReferralSolAmount,
  setReferralUSDTAmount,
}: {
  publicKey: string | undefined;
  setReferralSolAmount: Dispatch<SetStateAction<number>>;
  setReferralUSDTAmount: Dispatch<SetStateAction<number>>;
}) => {
  const [mintAmount, setMintAmount] = useState(0);
  const [balance, setBalance] = useState<number>(0);
  const [usdBalance, setUsdBalance] = useState<number>(0);
  const [selectedCurrency, setSelectedCurrency] = useState("SOL");
  const [showStakingButton, setShowStakingButton] = useState(false);
  const [showStakingCard, setShowStakingCard] = useState(false);
  const [inputAmount, setInputAmount] = useState();
  const [userGULLULUTokens, setUserGULLULUTokens] = useState<number | null>(0);
  const [transactionStatus, setTransactionStatus] = useState<boolean | null>(
    null
  );
  const [hashlinkaddress, setHashLinkAddress] = useState<string | null>(null);

  useEffect(() => {
    if (userGULLULUTokens !== null && userGULLULUTokens > 0) {
      setShowStakingButton(true);
    } else {
      setShowStakingButton(false);
    }
  }, [userGULLULUTokens]);

  const handleStakeClick = () => {
    setShowStakingCard(true);
  };

  const hideStakingCard = () => {
    setShowStakingCard(false);
  };

  console.log("PUBLICKEY:", publicKey);
  const { connection } = useConnection();
  const wallet = useWallet();
  const payer = wallet.publicKey;
  const priceFeed = new PublicKey(
    "J83w4HKfqxwcq3BEMMkPFSppX3gqekLyLJBexebFVkix"
  );

  const usdt = new PublicKey("Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr");

  const AnchorWallet = useAnchorWallet();
  const Wallet = AnchorWallet as NodeWallet;
  const pythSolanaReceiver = new PythSolanaReceiver({
    connection,
    wallet: Wallet,
  });

  const SOL_PRICE_FEED_ID =
    "0xef0d8b6fda2ceba41da15d4095d1da392a0d2f8ed0c6c7bc0f4cfac8c280b56d";
  const TOKEN_SEED = "token";
  const MINT_SEED = "mint";
  const BUYER_SEED = "buyer";
  const REFERRER_SEED = "referral";

  // const priceFeedAccount = await pythSolanaReceiver.fetchPriceFeedAccount(0,SOL_PRICE_FEED_ID);
  // const newUSDPrice = priceFeedAccount?.priceMessage.price / 100000000;
  // console.log("NEW USD BALANCE:", newUSDPrice * balance);
  // setUsdBalance(newUSDPrice * balance); // NOTE: This is approximate value, Verify

  const [mint] = web3.PublicKey.findProgramAddressSync(
    [Buffer.from(MINT_SEED)],
    MEME_PROGRAM_ID
  );

  const [tokenPda] = web3.PublicKey.findProgramAddressSync(
    [Buffer.from(TOKEN_SEED)],
    MEME_PROGRAM_ID
  );


  const [value, setValue] = useState(0)

  useEffect(() => {

    const v = Gululu_price()
    setValue(v)
  
  });

  useEffect(() => {
    if (wallet.publicKey) {
      (async function getBalanceEvery10Seconds() {
        //@ts-ignore
        const newBalance = await connection.getBalance(wallet.publicKey);
        console.log("NEW BALANCEEEE:", newBalance / LAMPORTS_PER_SOL);

        const userUsdtWallet = await getAssociatedTokenAddress(
          usdt,
          //@ts-ignore
          payer
        );

        const info = await connection.getAccountInfo(userUsdtWallet);

        console.log("INFO:", info);

        if (info) {
          const USER_USDC_BALANCE = (
            await connection.getTokenAccountBalance(userUsdtWallet)
          ).value.uiAmount;

          console.log("USER USDT BALANCE:", USER_USDC_BALANCE )

          if (USER_USDC_BALANCE != null) {
            setUsdBalance(USER_USDC_BALANCE);
          }
        }

        setBalance(newBalance / LAMPORTS_PER_SOL);

        const destination = await getAssociatedTokenAddress(
          mint,
          //@ts-ignore
          wallet.publicKey
        );

        const gululuInfo = await connection.getAccountInfo(destination);

        if (gululuInfo) {
          const userGULLULUTokens = (
            await connection.getTokenAccountBalance(destination)
          ).value.uiAmount;

          if (userGULLULUTokens != null) {
            setUserGULLULUTokens(userGULLULUTokens);
          }
        }





        // Referrer user sol and usdt balance, Display this in Referral.tsx
        let [referrerUser] = await web3.PublicKey.findProgramAddressSync(
          [
            Buffer.from(REFERRER_SEED),
            //@ts-ignore
            wallet.publicKey.toBuffer(),
          ],
          MEME_PROGRAM_ID
        ); 

        const inform = await connection.getAccountInfo(referrerUser);
        console.log("INFORM:", inform);

        if (inform) {
          const referrerUserAcct = await program.account.referrerUser.fetch(referrerUser);

          setReferralSolAmount(referrerUserAcct.referralSol.toNumber() / 1000000000)
          setReferralUSDTAmount(referrerUserAcct.referralUsdt.toNumber() / 1000000)
          console.log("Referrer SOL BALANCE:",referrerUserAcct.referralSol.toNumber());
          console.log("REFERRER USDT BALANCE:",referrerUserAcct.referralUsdt.toNumber())

        }









        setTimeout(getBalanceEvery10Seconds, 10000);
      })();
    }
  }, [publicKey, connection, balance, wallet]);

  const provider = new AnchorProvider(connection, wallet as AnchorWallet, {
    commitment: "confirmed",
  });

  const program = new Program(IDL, MEME_PROGRAM_ID, provider);

  const { buttonState } = useWalletMultiButton({
    onSelectWallet() {
      setModalVisible(false);
    },
  });

  const { setVisible: setModalVisible } = useWalletModal();

  const onClick = () => {
    if (buttonState === "no-wallet") {
      setModalVisible(true);
    } else {
      handleButtonClick();
    }
  };

  //@ts-ignore
  const handleButtonClick: MouseEventHandler<HTMLButtonElement> = async (
    //@ts-ignore
    event
  ) => {
    console.log("PAYER:", payer);

    const fromAta = await getAssociatedTokenAddress(mint, tokenPda, true);

    const destination = await getAssociatedTokenAddress(
      mint,
      //@ts-ignore
      payer
    );

    const adminUsdtWallet = await getAssociatedTokenAddress(
      usdt,
      tokenPda,
      true
    );

    const [userDetails] = await web3.PublicKey.findProgramAddressSync(
      [
        Buffer.from(BUYER_SEED),
        //@ts-ignore
        wallet.publicKey.toBuffer(),
      ],
      MEME_PROGRAM_ID
    );

    //@ts-ignore
    const walletBalance = await connection.getBalance(wallet.publicKey);

    const pgTokenBalance = (await connection.getTokenAccountBalance(fromAta))
      .value.uiAmount;

    console.log("Number of tokens available:", pgTokenBalance);
    console.log("WALLET BALANCE:", walletBalance / LAMPORTS_PER_SOL + " SOL");

    console.log("SOLANA WALLET:", window.solana);

    //NUMBER OF GULLULU TOKEN OWNED BY THE CONNECTED USER
    // const userGULLULUTokens = (
    //   await connection.getTokenAccountBalance(destination)
    // ).value.uiAmount;
    // console.log(
    //   "Number of GULLULU tokens owned by connected user:",
    //   userGULLULUTokens
    // );
    // setUserGULLULUTokens(userGULLULUTokens);

    // //TOTAL SOLANA BALANCE OF TREASURY
    // const programBalance = await connection.getBalance(tokenPda);
    // console.log("PROGRAM BALANCE _ AMT RAISED:", programBalance/LAMPORTS_PER_SOL +" SOL");

    // //TOTAL USDT BALANCE OF TREASURY
    // const programUSDBalance = (await connection.getTokenAccountBalance(adminUsdtWallet)).value.uiAmount;
    // console.log("PROGRAM BALANCE _ AMT RAISED:", programUSDBalance +" USDT");

    // const info = await connection.getAccountInfo(userDetails).catch((e) => {console.log("error fetching user detail account:", e)});
    // if (info) {
    //   //TOTAL USDT REFERRAL COMMISSION FOR THIS USER
    //   const userUSDTCommission = (await program.account.UserDetails.fetch(userDetails)).referralUsd.toNumber();
    //   console.log("USER REFERAL AMOUNT EARNED IN USDT:", userUSDTCommission)

    //   //TOTAL SOL REFERRAL COMMISSION FOR THIS USER
    //   const userSOLCommission = (await program.account.UserDetails.fetch(userDetails)).referralSol.toNumber();
    //   console.log("USER REFERAL AMOUNT EARNED IN SOL:", userSOLCommission)
    // }

    // console.log("User details is not yet updated");

    let referrerUser = null;

    if(publicKey) {
      const referrer = new PublicKey(publicKey);
      [referrerUser] = await web3.PublicKey.findProgramAddressSync(
        [
          Buffer.from(REFERRER_SEED),
          //@ts-ignore
          referrer.toBuffer(),
        ],
        MEME_PROGRAM_ID
      ); 
    }

    console.log("REFERRER USER ACCOUNT:", referrerUser);
    
    let userUsdtWallet;
    let referrerUsdtWallet = null;
    let USDT = selectedCurrency === "USDT"; // TURN THIS TO TRUE WHEN USING USDT TO BUY TOKENS

    if (USDT) {
      userUsdtWallet = await getAssociatedTokenAddress(
        usdt,
        //@ts-ignore
        payer
      );

      if(publicKey) {
        const referrer = new PublicKey(publicKey);
        referrerUsdtWallet = await getAssociatedTokenAddress(
          usdt,
          //@ts-ignore
          referrer
        );
      }
    } else {
      userUsdtWallet = null;
    }


    const context = {
      mint,
      tokenPda,
      fromAta,
      referrer: publicKey ? publicKey : null, // pass the referrer address publickey like: new PublicKey("PUBLICKEY OF THE REFERRER")
      referrerUser,
      referrerUsdtWallet,
      userUsdtWallet,
      adminUsdtWallet,
      usdt,
      priceFeed: priceFeed,
      destination,
      payer,
      rent: web3.SYSVAR_RENT_PUBKEY,
      systemProgram: web3.SystemProgram.programId,
      tokenProgram: TOKEN_PROGRAM_ID,
      associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
    };

    const decimals = 9;
    console.log("Mint amount:", mintAmount);

    let txHash: any = undefined;
    try {
      //@ts-ignore
    txHash = await program.methods
      .buyTokens(new BN(mintAmount * 10 ** decimals))
      //@ts-ignore
      .accounts(context)
      .rpc();

    } catch (error) {
      setTransactionStatus(false);
    }

    console.log("TX HASH:", txHash)

    await provider.connection.confirmTransaction(txHash);
    const txInfo = await provider.connection.getTransaction(txHash);
    const logs = txInfo?.meta?.logMessages;
    
    console.log(`https://explorer.solana.com/tx/${txHash}?cluster=devnet`);

    const hashlinkaddress = `https://explorer.solana.com/tx/${txHash}?cluster=devnet`;
    setHashLinkAddress(hashlinkaddress);

    const confirmation = await provider.connection.confirmTransaction(txHash);
    console.log(confirmation.value);
    if (confirmation) {
      if (confirmation.value.err) {
        console.log("Transaction failed");
        setTransactionStatus(false);
      } else {
        console.log("Transaction successful", confirmation);
        setTransactionStatus(true);
      }
    } else {
      setTransactionStatus(false);
      console.log("transaction not successful");
    }
  };

  const handlePopupClose = () => {
    setTransactionStatus(null);
  };

  const Gululu_value_USD = 0.0085;

  const formattedTokens =
    userGULLULUTokens !== null ? userGULLULUTokens.toFixed(4) : "0.00";

  return (
    <div className="relative flex flex-wrap items-start bg-[#F7E8D5] px-8  pb-14 pt-10 md:pt-0 justify-center">
      {transactionStatus !== null && (
        <TransactionStatusPopup
          status={transactionStatus}
          onClose={handlePopupClose}
          hashlinkaddress={hashlinkaddress || ""}
        />
      )}

      <div className=" relative flex flex-col xl:max-w-[45%] w-[95%] items-center justify-center ">
        <Image
          src={"/sec1doge.svg"}
          alt="doge"
          height={1500}
          width={1500}
          className="w-[809px] pb-5 xl:ml-14"
        />

        <div className="xl:pl-24">
          <div className="relative">
            <Image
              src={"/paw.svg"}
              alt="paw"
              height={500}
              width={500}
              className=" absolute md:w-20 w-16 2xl:right-[30rem] xl:right-[28rem] md:-left-[30%] sm:-left-[25%] -left-[12%] top-8  "
            />
            <h1 className="md:text-[3.5rem] md:text-5xl text-[2.3rem] text-center font-omnesblack md:pb-7 md:leading-[4.7rem]">
              HI, MY NAME IS <br /> GULULU
            </h1>
          </div>
          <h3 className="md:text-[1.56rem] text-xl text-center font-omnes pb-4 leading-[2.2rem]">
            I like chess and beating everyone <br /> in the Solana Ecosystem
          </h3>
        </div>
      </div>
      <div className="relative flex flex-col xl:max-w-[48%] w-[100%] items-center justify-center pt-16 ml-0 ">
        {showStakingCard ? (
          <StakingCard hideStakingCard={hideStakingCard} />
        ) : (
          <div
            className=" buytoken bg-[#CFEEFF] rounded-3xl md:w-[85%] w-[100%] pt-20 pb-10 z-50 "
            id="buytoken"
          >
            <div>
              <h3 className="sm:px-24 px-4 font-omnes text-center leading-7 text-2xl ">
                GULULU launches on doge day! Last <br /> chance to buy!
              </h3>
              <Countdown css={""} />
              <h3 className="text-center text-xl font-omnes font-bold my-6 ">
                Till GULULU claim and launch
              </h3>
              <h3 className="text-center text-3xl font-omnesblack leading-3 my-3">
                <span className=" font-omnesreg font-bold ">Over</span> $10M{" "}
                <span className=" font-omnesreg font-bold ">raised!</span>
              </h3>
              <div className="flex items-center justify-center sm:gap-6 gap-2  ml-2 my-2 ">
                <div className="text-center text-xl font-omnes my-3 font-bold ">
                  <span className="text-xl font-omnesreg font-bold ">
                    Your purchased
                  </span>{" "}
                  GULULU = {formattedTokens}
                </div>
              </div>
              <div className="flex items-center justify-between 2xl:gap-5 gap-2 px-4">
                <div className="border-b-4 border-black 2xl:w-40 xl:w-32 w-52 "></div>
                <h3 className="text-center 2xl:text-lg  font-omnes my-4">
                  1 GULULU = {Gululu_value_USD}
                </h3>
                <div className="border-b-4 border-black 2xl:w-40 xl:w-32 w-52 "></div>
              </div>
              <div className="text-center pb-6 text-xl font-extrabold">
                Wallet Balance
              </div>
              <div className="flex md:flex-row flex-wrap md:gap-32 gap-8 items-center justify-center mx-4">
                <div className="flex gap-2 sm:text-sm text-base font-bold">
                  <Image
                    src={"/sol.svg"}
                    alt="i"
                    width={500}
                    height={100}
                    className="w-6 h-6 "
                  />
                  SOL: {balance}
                </div>
                <div className="flex gap-2 sm:text-sm text-base font-bold">
                  <Image
                    src={"/usdt.svg"}
                    alt="i"
                    width={500}
                    height={100}
                    className="w-6 h-6 "
                  />
                  USDT: {usdBalance}
                </div>
              </div>
              <div className="flex md:flex-row flex-wrap  gap-8  mx-4 py-2 text-black items-end justify-center">
                <Calculator
                  result={mintAmount}
                  setResult={setMintAmount}
                  selectedCurrency={selectedCurrency}
                  setSelectedCurrency={setSelectedCurrency}

                  // Gululu_value_USD={Gululu_value_USD}
                />
              </div>
            </div>

            <div className="flex sm:flex-row flex-col items-center justify-center gap-7 2xl:mt-6 mt-2 ">
              <button
                onClick={onClick}
                className="font-bold z-20 w-64 h-14 font-omnes bg-black text-white rounded-full inline-block"
              >
                BUY GULULU
              </button>
            </div>

            {showStakingButton && (
              <div className="flex sm:flex-row flex-col items-center justify-center gap-7 2xl:mt-6 mt-2 ">
                <button
                  className="  font-bold z-20 w-64 h-14 font-omnes bg-black text-white rounded-full inline-block "
                  onClick={handleStakeClick}
                >
                  STAKE
                </button>
              </div>
            )}
          </div>
        )}

        <Image
          src={"/bone1.svg"}
          alt="paw"
          height={500}
          width={500}
          className=" absolute w-40 bottom-[9%] -left-[3%] z-0 md:block hidden "
        />
        <Image
          src={"/bone2.svg"}
          alt="paw"
          height={500}
          width={500}
          className=" absolute w-40 bottom-[1%] -left-[5%] z-0 md:block hidden"
        />
        <Image
          src={"/bone3.svg"}
          alt="paw"
          height={500}
          width={500}
          className=" absolute w-40 -right-[4%] top-[8%] z-0 md:block hidden"
        />
      </div>
    </div>
  );
};

export default Section1;
