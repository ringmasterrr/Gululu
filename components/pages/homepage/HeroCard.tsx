"use client";

import Image from "next/image";
import React, { MouseEventHandler, useEffect, useState } from "react";
import Countdown from "../../utilities/Countdown";
import { AnchorWallet, useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import { AnchorProvider, BN, Program, web3 } from "@coral-xyz/anchor";
import { MEME_PROGRAM_ID } from "@/components/utilities/programConsts";
import { ASSOCIATED_TOKEN_PROGRAM_ID, TOKEN_PROGRAM_ID, getAssociatedTokenAddress } from '@solana/spl-token';
import { IDL } from "@/components/utilities/idl";

interface OtherComponentProps {
  hideStakingCard: () => void;
}

const Section1: React.FC<OtherComponentProps> = ({ hideStakingCard }) => {
  const {connection} = useConnection()
  const wallet = useWallet();
  const [userGULLULUTokens, setUserGULLULUTokens] = useState<number | null>(0);
  const [userStakeAmount, setUserStakeAmount] = useState<number | null>(0);
  const [reward, setReward] = useState<number | null>(0);
  const [investedAmount, setInvestedAmount] = useState(0);

  const provider = new AnchorProvider(connection, wallet as AnchorWallet, {
    commitment: 'confirmed',
  });

  const STAKE_SEED = "stake";
  const USER_SEED = "user";
  const MINT_SEED = "mint";
  const TOKEN_SEED = "token";

  const program = new Program(IDL, MEME_PROGRAM_ID, provider);


  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Get the input value
    const inputValue = e.target.valueAsNumber;

    // Check if the input value is not negative
    if (inputValue >= 0 || isNaN(inputValue)) {
      // If not negative or NaN, update the state
      setInvestedAmount(inputValue);
    }
    // If negative or NaN, do nothing
  };

  const [userInfo] = web3.PublicKey.findProgramAddressSync(
    [
      Buffer.from(USER_SEED),
      //@ts-ignore
      wallet.publicKey.toBuffer()
      ],
    MEME_PROGRAM_ID
  );

  const [mint] = web3.PublicKey.findProgramAddressSync(
    [Buffer.from(MINT_SEED)],
    MEME_PROGRAM_ID
  );

  const [poolInfo] = web3.PublicKey.findProgramAddressSync(
    [Buffer.from(STAKE_SEED)],
    MEME_PROGRAM_ID
  );

  const [tokenPda] = web3.PublicKey.findProgramAddressSync(
    [Buffer.from(TOKEN_SEED)],
    MEME_PROGRAM_ID
  );


  useEffect(() => {
    if (wallet.publicKey) {
      (async function getBalanceEvery10Seconds() {
    
        const destination = await getAssociatedTokenAddress(
          mint,
          //@ts-ignore
          wallet.publicKey
        );

        const info = await connection.getAccountInfo(destination);

        if (info) {
          const userGULLULUTokens = (
            await connection.getTokenAccountBalance(destination)
          ).value.uiAmount;

          if (userGULLULUTokens != null) {
            setUserGULLULUTokens(userGULLULUTokens);
          }
        }


        //@ts-ignore
        const userStake = await program.account.userInfo.fetch(userInfo).catch((e) => {
          console.log("user info account does not exist");
        });

        if (userStake) {
          const userStakeAmount = userStake.amount.toNumber();
          const userStakeReward = userStake.reward;
          console.log("USER CLAIMED REWARD:", userStakeReward.toNumber() / LAMPORTS_PER_SOL)
          if (userStakeAmount != null) {
            setUserStakeAmount(userStakeAmount);
      
            setReward(userStakeReward.toNumber() / LAMPORTS_PER_SOL);
          }
        }

        setTimeout(getBalanceEvery10Seconds, 10000);
      })();
    }
  }, [connection, wallet]);


  //@ts-ignore
  const handleStake: MouseEventHandler<HTMLButtonElement> = async(event) => {

    // console.log("Stake deposit time:", userStake.depositTime.toNumber())
    

    const userStakingWallet = await getAssociatedTokenAddress(
      mint,
      //@ts-ignore
      wallet.publicKey
    );

    const tokenBalance = ( await connection.getTokenAccountBalance(userStakingWallet)).value.uiAmount;
    console.log("GULLULU token balance:", tokenBalance);

    const info = await connection.getAccountInfo(userStakingWallet);

    if (!info) {
      console.log(
        "There is no GULLULU token account found for this user, please buy some GULLULU"
      );
    }

    const adminStakingWallet = await getAssociatedTokenAddress(
      mint,
      poolInfo,
      true,
    );

    const context = {
      user: wallet.publicKey,
      userInfo,
      userStakingWallet,
      poolInfo,
      adminStakingWallet,
      stakingToken: mint,
      rent: web3.SYSVAR_RENT_PUBKEY,
      systemProgram: web3.SystemProgram.programId,
      tokenProgram: TOKEN_PROGRAM_ID,
      associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
    };

    const amount = 4;

    try{
      //@ts-ignore
      const txHash = await program.methods.stake(new BN(investedAmount * 10 ** 9)).accounts(context).rpc();

      await provider.connection.confirmTransaction(txHash, "finalized");
      console.log(`  https://explorer.solana.com/tx/${txHash}?cluster=devnet`); 
      //@ts-ignore
      const userStake = await program.account.userInfo.fetch(userInfo);
      console.log("Stake deposit time:", userStake.depositTime.toNumber())
    } catch(e) {
      console.log("Error staking:", e);
    }
 
  } 


  const handleUnstake: MouseEventHandler<HTMLButtonElement> = async(event) => {
  
      const userStakingWallet = await getAssociatedTokenAddress(
        mint,
        //@ts-ignore
        wallet.publicKey
      );
  
      const fromAta = await getAssociatedTokenAddress(
        mint,
        tokenPda,
        true,
      );
  
      const adminStakingWallet = await getAssociatedTokenAddress(
        mint,
        poolInfo,
        true,
      );
  
      const context = {
        user: wallet.publicKey,
        userInfo,
        userStakingWallet,
        poolInfo,
        adminStakingWallet,
        stakingToken: mint,
        tokenPda,
        fromAta,
        rent: web3.SYSVAR_RENT_PUBKEY,
        systemProgram: web3.SystemProgram.programId,
        tokenProgram: TOKEN_PROGRAM_ID,
        associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
      };
  
      try {
        //@ts-ignore
        const txHash = await program.methods.unstake().accounts(context).rpc();
        
        await provider.connection.confirmTransaction(txHash, "finalized");
        //await connection.confirmTransaction(txHash, "finalized");
        console.log(`  https://explorer.solana.com/tx/${txHash}?cluster=devnet`);
      } catch (e) {
        console.log("ERROR:", e);
      }
  
      const tokenBalance = (
        await connection.getTokenAccountBalance(adminStakingWallet)
      ).value.uiAmount;
      console.log("TOKEN BALANCE IN STAKING WALLET AFTER UNSTAKE:", tokenBalance);
   }


   const handleClaimReward: MouseEventHandler<HTMLButtonElement> = async(event) => {
    const userStakingWallet = await getAssociatedTokenAddress(
      mint,
      //@ts-ignore
      wallet.publicKey
    );

    const fromAta = await getAssociatedTokenAddress(
      mint,
      tokenPda,
      true,
    );

    const context = {
      user: wallet.publicKey,
      userInfo,
      userStakingWallet,
      stakingToken: mint,
      tokenPda,
      fromAta,
      systemProgram: web3.SystemProgram.programId,
      tokenProgram: TOKEN_PROGRAM_ID,
      associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
    };

    try {
      //@ts-ignore
      const txHash = await program.methods.claimReward().accounts(context).rpc();

      await provider.connection.confirmTransaction(txHash, "finalized");
      //await connection.confirmTransaction(txHash, "finalized");
      console.log(`  https://explorer.solana.com/tx/${txHash}?cluster=devnet`);
    } catch (e) {
      console.log("ERROR:", e);
    }

    //@ts-ignore
    const userINF = await program.account.userInfo.fetch(userInfo);

    console.log("Reward collected:", userINF.reward.toNumber());

   }

   const handleClick = () => {
    hideStakingCard();
  };

  const formattedTokens = userGULLULUTokens !== null ? userGULLULUTokens.toFixed(2) : "0.00";


  return (
    <div className="bg-[#CFEEFF] rounded-3xl md:w-[78%] w-[97%] pt-20 pb-10 z-10 ">
          <div className="flex flex-col justify-between 2xl:gap-4  ">
            <div className=" flex flex-col items-center gap-6 mb-4">
              <h3 className="sm:px-24 px-4 font-omnes text-center leading-7 text-3xl ">
                GULULU launches on doge day! Last <br /> chance to buy!
              </h3>

              <h3 className="text-center tracking-widest text-xl font-omnesblack  leading-3 ">
                Claimable Balance
              </h3>

              <div className="flex gap-2 sm:text-sm lg:text-xl text-lg font-bold items-center justify-center">
                <Image
                  src={"/gululuicon.svg"}
                  alt="i"
                  width={500}
                  height={100}
                  className="w-6 h-6 "
                />
                GULULU: {formattedTokens}
              </div>
              <button onClick={handleClick} className=" text-base font-bold z-20 w-64 h-14 font-omnes bg-black text-white rounded-full inline-block ">
                  BUY GULULU
                </button>

            </div>
            <div className="border-b border-black w-[90%] place-self-center"></div>
             
            <div className="flex flex-col items-center">
              <div className="flex flex-col gap-6 my-6 items-center justify-between w-full px-10">
                <div className="font-medium lg:text-xl text-lg ">
                  Available Balance: <span className="font-bold">{formattedTokens}</span>
                </div>
                <div className=" text-black font-bold flex gap-4 2xl:flex-row flex-col items-center justify-between text-center w-full ">
                  <input
                    type="number"
                    value={investedAmount}
                    onChange={handleAmountChange}
                    placeholder="$100"
                    className="text-center rounded-full w-64 p-[0.9rem] placeholder-black text-base font-black font-omnes border border-black"
                  >
                  </input>
                  <button 
                    className=" text-base font-bold z-20 w-64 h-14 font-omnes bg-black text-white rounded-full inline-block "
                    onClick={handleStake}
                    >
                    STAKE
                  </button>
                </div>
              </div>
            </div>

            <div className="border-b border-black w-[90%] place-self-center"></div>
            <div className="place-self-center font-medium py-4 lg:text-xl text-lg flex items-center justify-center gap-2">
              <div>Timer to Unstake</div>
              <Image
                src={"/exclaim.svg"}
                alt=""
                height={10}
                width={10}
                className="w-5"
              />
            </div>
            <Countdown css={"!mt-4"} />
            <div className=" flex 2xl:flex-row flex-col items-center justify-between  mt-6 px-10 ">
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="font-medium">
                  Staked Amount: <span className="font-bold">{userStakeAmount} GULULU</span>
                </div>
                <button 
                className=" text-base font-bold z-20 w-64 h-14 font-omnes bg-black text-white rounded-full inline-block "
                onClick={handleUnstake}
                >
                  UNSTAKE
                </button>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="font-medium">
                  Reward collected: <span className="font-bold">{typeof reward === 'number' ? reward.toLocaleString('en-US', { minimumFractionDigits: 9, maximumFractionDigits: 9 }) : '0.000000000'} GULULU</span>
                </div>
                <button 
                className=" text-base font-bold z-20 w-64 h-14 font-omnes bg-black text-white rounded-full inline-block "
                onClick={handleClaimReward}
                >
                  CLAIM REWARD
                </button>
              </div>
            </div>
          </div>
        </div>
  );
};

export default Section1;
