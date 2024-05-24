"use client";

import Image from "next/image";
import React, { useState } from "react";
import Decorations from "../../ui/Decorations";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Para";
import copy from "copy-to-clipboard";

const Tokenomicslist = ({ text }: { text: string }) => {
  return (
    <h3 className="text-black font-omnesreg font-semibold text-xl sm:text-xl">
      {text}
    </h3>
  );
};

const Section6 = () => {
  const TokenAddress = " 0x2541A36BE4cD39286ED61a3E6AFC2307609d6";

  const [copied, setCopied] = useState(false);

  const CopyTokenAddress = () => {
    copy(TokenAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <div className="relative flex flex-col items-center bg-[#CFEEFF] h-full pt-14 pb-40 ">
      <Heading text="Tokenomics" />
      <div className="md:text-xl text-base font-semibold text-center font-omnesreg mx-5 flex flex-col items-center justify-center ">
        <Paragraph
          text="
         GULULU tokenomics include smart staking rewards, meaning you can earn right away."
        />
        <p>GULULU Token Address:</p>
        <div className="flex md:flex-row flex-col items-center gap-4">
          <p className="font-omnes pt-1 break-all">{TokenAddress}</p>
          <button
            onClick={CopyTokenAddress}
            className="w-fit bg-black text-white px-4 py-2 text-base font-semibold rounded-lg hover:bg-slate-700 focus:outline-none"
          >
            {copied ? "Copied!" : "Copy Address"}
          </button>
        </div>
      </div>
      <div className="relative flex flex-col bg-[#FFCBBF] mt-14 rounded-[1.25rem] lg:w-[80%] w-[90%] px-2 ">
        <div className="flex flex-wrap-reverse xl:flex-row items-center  justify-center w-full gap-11">
          <div className="relative z-50">
            <Image
              src={"/dawg.svg"}
              alt="dawg"
              height={1000}
              width={1000}
              className="w-[30rem] py-8 transform scale-125 translate-y-16 
              
              "
            />
          </div>

          <div className="flex flex-col h-full items-center justify-between py-8 gap-8 ">
            <Image
              src={"/tokenomics.svg"}
              alt="dawg"
              height={1500}
              width={1500}
              className="h-auto w-[30rem] pb-0"
            />
            <div className="flex flex-col gap-4 px-8 ">
              <h3 className="text-[#667CC1] font-omnes sm:text-4xl text-3xl uppercase">
                $GULULU Tokenomics
              </h3>
              <Tokenomicslist text="Total Supply 5 billion" />
              <Tokenomicslist text="25% Tokens to Pre Sale" />
              <Tokenomicslist text="20% Tokens to Treasury Foundation" />
              <Tokenomicslist text="25% Tokens to Partnerships & Marketing" />
              <Tokenomicslist text="15% Tokens to Liquidity Management" />
              <Tokenomicslist text="15% Tokens to Staking" />
            </div>
          </div>
        </div>
        <Decorations
          src="/coin1.svg"
          css="absolute w-[10rem] right-[2rem] -top-[7.8rem] xl:block hidden"
        />
        <Decorations
          src="/minipaw.svg"
          css="absolute w-[4rem] left-[1rem] top-[4rem] xl:block hidden "
        />
        <Decorations
          src="/smolerpaw.svg"
          css="absolute w-[5rem] left-[0rem] bottom-[2rem] xl:block hidden "
        />
        <Decorations
          src="/Star13.svg"
          css="absolute w-[5rem] right-[4rem] bottom-[2rem] xl:block hidden"
        />
      </div>

      <Decorations
        src="/coin4.svg"
        css="absolute top-20 left-16 h-auto w-auto xl:block hidden"
      />

      <Decorations
        src="/Star13.svg"
        css="absolute top-[7rem] right-[85rem] w-[4rem] 2xl:block hidden "
      />

      <Decorations
        src="/bone10.svg"
        css="absolute -top-[5.8rem] right-[20rem] w-[13rem] xl:block hidden"
      />

      <Decorations
        src="/coin3.svg"
        css="absolute -bottom-[2rem] left-[0rem] w-[13rem] xl:block hidden"
      />

      <Decorations
        src="/coin2.svg"
        css="absolute bottom-[0.2rem] right-[2rem] w-[13rem] xl:block hidden"
      />
    </div>
  );
};

export default Section6;
