"use client";

import Image from "next/image";
import React, { MouseEventHandler } from "react";
import Countdown from "../../utilities/Countdown";
import { AnchorWallet, useConnection, useWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import { AnchorProvider, BN, Program, web3 } from "@coral-xyz/anchor";
import { MEME_PROGRAM_ID } from "@/components/utilities/programConsts";
import { ASSOCIATED_TOKEN_PROGRAM_ID, TOKEN_PROGRAM_ID, getAssociatedTokenAddress } from '@solana/spl-token';
import { IDL } from "@/components/utilities/idl";

const Section1 = () => {
  const {connection} = useConnection()
  const wallet = useWallet();

  const provider = new AnchorProvider(connection, wallet as AnchorWallet, {
    commitment: 'confirmed',
  });

  const STAKE_SEED = "stake";
  const USER_SEED = "user";
  const MINT_SEED = "mint";
  const TOKEN_SEED = "token";

  const program = new Program(IDL, MEME_PROGRAM_ID, provider);

  const [poolInfo] = web3.PublicKey.findProgramAddressSync(
    [Buffer.from(STAKE_SEED)],
    MEME_PROGRAM_ID
  );

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

  const [tokenPda] = web3.PublicKey.findProgramAddressSync(
    [Buffer.from(TOKEN_SEED)],
    MEME_PROGRAM_ID
  );


  //@ts-ignore
  const handleStake: MouseEventHandler<HTMLButtonElement> = async(event) => {

    const userINF = await program.account.UserInfo.fetch(userInfo);

    console.log("Staked Amount:", userINF.amount);

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
      const txHash = await program.methods.stake(new BN(amount * 10 ** 9)).accounts(context).rpc();

      await connection.confirmTransaction(txHash, "finalized");
      console.log(`  https://explorer.solana.com/tx/${txHash}?cluster=devnet`); 
    } catch(e) {
      console.log("Error staking:", e);
    }
 
  } 


  const handleUnstake: MouseEventHandler<HTMLButtonElement> = async(event) => {
  
      const userInf = await program.account.UserInfo.fetch(userInfo);
  
      console.log("USER INF NO:", userInf.amount.toNumber());
  
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
  
        await connection.confirmTransaction(txHash, "finalized");
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

      await connection.confirmTransaction(txHash, "finalized");
      console.log(`  https://explorer.solana.com/tx/${txHash}?cluster=devnet`);
    } catch (e) {
      console.log("ERROR:", e);
    }

    const userINF = await program.account.UserInfo.fetch(userInfo);

    console.log("Reward collected:", userINF.reward.toNumber());

   }

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
                GULULU: 100
              </div>
              <button className=" text-base font-bold z-20 w-64 h-14 font-omnes bg-black text-white rounded-full inline-block ">
                  CLAIM REWARD
                </button>

            </div>
            <div className="border-b border-black w-[90%] place-self-center"></div>
             
            <div className="flex flex-col items-center">
              <div className="flex flex-col gap-6 my-6 items-center justify-between w-full px-10">
                <div className="font-medium lg:text-xl text-lg ">
                  Available Balance: <span className="font-bold">$100,000</span>
                </div>
                <div className=" text-black font-bold flex gap-4 2xl:flex-row flex-col items-center justify-between text-center w-full ">
                  <input
                    type="text"
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
                  Staked Amount: <span className="font-bold">$100,000</span>
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
                  Reward collected: <span className="font-bold">$100,000</span>
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
