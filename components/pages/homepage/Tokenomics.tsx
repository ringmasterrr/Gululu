import Image from "next/image";
import React from "react";
import Decorations  from "../../ui/Decorations";

const Tokenomicslist = ({ text }: { text: string }) => {
  return (
    <h3 className="text-black font-omnesreg font-semibold text-xl sm:text-2xl">
      {text}
    </h3>
  );
};

const Section6 = () => {
  return (
    <div className="relative flex flex-col items-center bg-[#CFEEFF] h-full pt-14 pb-40 ">
      <div className="md:text-5xl text-3xl text-center font-omnes py-4 ">
        Tokenomics
      </div>
      <div className="md:text-xl text-base font-semibold text-center font-omnesreg mx-5">
        <p className="pb-3">
          GULULU tokenomics include smart staking rewards, meaning you can earn
          right away.
        </p>
        <p>GULULU Token Address:</p>
        <p className="font-omnes pt-1">
          0x2541A36BE4cD39286ED61a3E6AFC2307609d6
        </p>
      </div>
      <div className="relative flex flex-wrap-reverse bg-[#FFCBBF] mt-14 rounded-[1.25rem] w-[80%] items-center justify-center py-10 px-10 ">
        <div className="flex items-center justify-center w-1/2">
          <Image
            src={"/dawg.png"}
            alt="dawg"
            height={1000}
            width={1000}
            className="lg:w-auto w-[20rem]"
          />
        </div>

        <div className="flex flex-col items-start py-20 justify-between gap-10">
          <Image
            src={"/tokenomics.svg"}
            alt="dawg"
            height={1200}
            width={1200}
            className="h-auto w-auto pb-20 xl:py-0"
          />
          <div className="flex flex-col gap-9">
            <h3 className="text-[#667CC1] font-omnes sm:text-5xl text-3xl uppercase">
              $GULULU Tokenomics
            </h3>
            <Tokenomicslist text="Total Supply 1 billion" />
            <Tokenomicslist text="50% Tokens to Liquidity Pool" />
            <Tokenomicslist text="35% Tokens to Presale Contributors" />
            <Tokenomicslist text="5% Tokens for CEX" />
            <Tokenomicslist text="5% Tokens for Marketing" />
            <Tokenomicslist text="5% Tokens for Team and Advisors" />
          </div>
        </div>

        <Decorations
          src="/coin1.svg"
          css="absolute w-[10rem] right-[2rem] -top-[7.8rem] xl:block hidden"
        />
        <Decorations
          src="/minipaw.svg"
          css="absolute w-[4rem] left-[13rem] top-[4rem] xl:block hidden"
        />
        <Decorations
          src="/smolerpaw.svg"
          css="absolute w-[6rem] left-[4rem] bottom-[2rem] xl:block hidden "
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
