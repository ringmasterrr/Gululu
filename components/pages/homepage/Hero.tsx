"use client";

import Image from "next/image";
import React, { useState } from "react";
import Countdown from "../../utilities/Countdown";
import SelectCurrency from "../../utilities/Dropdown";
import { AnchorProvider, BN, Program, web3 } from "@coral-xyz/anchor";
import { ASSOCIATED_TOKEN_PROGRAM_ID, TOKEN_PROGRAM_ID, getAssociatedTokenAddress } from '@solana/spl-token';
import { AnchorWallet, useConnection, useWallet } from "@solana/wallet-adapter-react";
import { IDL } from "@/components/utilities/idl";
import { MEME_PROGRAM_ID } from "@/components/utilities/programConsts";
import { PublicKey } from "@solana/web3.js";
import HeroCard from "@/components/pages/homepage/HeroCard"
import Calculator from "@/components/utilities/calculator";


const Section1 = () => {
  const [mintAmount, setMintAmount] = useState(0);
  const { connection } = useConnection();
  const wallet = useWallet();
  const payer = wallet.publicKey;

  const provider = new AnchorProvider(connection, wallet as AnchorWallet, {
    commitment: 'confirmed',
  });

  const program = new Program(IDL, MEME_PROGRAM_ID, provider);

  const TOKEN_SEED = "token";
  const MINT_SEED = "mint";
  const priceFeed = new PublicKey("J83w4HKfqxwcq3BEMMkPFSppX3gqekLyLJBexebFVkix");


  //@ts-ignore
  const handleButtonClick: MouseEventHandler<HTMLButtonElement> = async(event) => {
    const [mint] = await web3.PublicKey.findProgramAddressSync(
      [Buffer.from(MINT_SEED)],
      MEME_PROGRAM_ID
    );
  
    const [tokenPda] = await web3.PublicKey.findProgramAddressSync(
      [Buffer.from(TOKEN_SEED)],
      MEME_PROGRAM_ID
    );
  
    const fromAta = await getAssociatedTokenAddress(
      mint,
      tokenPda,
      true,
    );
  
    const destination = await getAssociatedTokenAddress(
      mint,
      //@ts-ignore
      payer
    );

    const context = {
      mint,
      tokenPda,
      fromAta,
      referrer: null,  // pass the referrer address publickey like: new PublicKey("PUBLICKEY OF THE REFERRER")
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
    //@ts-ignore
    const txHash = await program.methods.buyTokens(new BN(mintAmount * 10 ** decimals)).accounts(context).rpc();

    await connection.confirmTransaction(txHash);
    console.log(`  https://explorer.solana.com/tx/${txHash}?cluster=devnet`);
  } 



  return (
    <div className="relative flex flex-wrap items-start bg-[#F7E8D5] px-8  pb-14 pt-10 md:pt-0 justify-center">
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
      
        <div className=" buytoken bg-[#CFEEFF] rounded-3xl md:w-[85%] w-[100%] pt-20 pb-10 z-50 ">
            <div>
              <h3 className="sm:px-24 px-4 font-omnes text-center leading-7 text-2xl ">
                GULULU launches on doge day! Last <br /> chance to buy!
              </h3>
              <Countdown css={''} />
              <h3 className="text-center text-xl font-omnes font-bold my-6 ">
                Till GULULU claim and launch
              </h3>
              <h3 className="text-center text-3xl font-omnesblack leading-3 my-3">
                <span className=" font-omnesreg font-bold ">Over</span> $10M{" "}
                <span className=" font-omnesreg font-bold ">raised!</span>
              </h3>
              <div className="flex items-center justify-center sm:gap-6 gap-2  ml-2 my-2 ">
                <h3 className="text-center text-xl font-omnes my-3 font-bold ">
                  <span className="text-xl font-omnesreg font-bold ">
                    Your purchased
                  </span>{" "}
                  GULULU = 0
                </h3>
              </div>
              <div className="flex items-center justify-between 2xl:gap-5 gap-2 px-4">
                <div className="border-b-4 border-black 2xl:w-40 xl:w-32 w-52 "></div>
                <h3 className="text-center 2xl:text-lg  font-omnes my-4">
                  1 GULULU = $0.00022
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
                  SOL: 100
                </div>
                <div className="flex gap-2 sm:text-sm text-base font-bold">
                  <Image
                    src={"/usdt.svg"}
                    alt="i"
                    width={500}
                    height={100}
                    className="w-6 h-6 "
                  />
                  USDT: 100
                </div>
              </div>
              <div className="flex md:flex-row flex-wrap  gap-8  mx-4 py-2 text-black items-end justify-center"> 
                  <Calculator/>
                </div>
              </div>
              <div className="flex sm:flex-row flex-col items-center justify-center gap-7 2xl:mt-6 mt-2 ">
              <button 
                className="  font-bold z-20 w-64 h-14 font-omnes bg-black text-white rounded-full inline-block "
                onClick={handleButtonClick}
                >
                BUY GULULU
              </button>
            </div>
          </div> 
          
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
