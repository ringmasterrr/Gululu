"use client";

import Image from "next/image";
import React from "react";
import ReferralBox from "../../utilities/Refferal";
import SocialIcon from "../../ui/Socials";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Para";

const Section5 = ({
  referralSolAmount,
  referralUSDTAmount,
}: {
  referralSolAmount: number | undefined;
  referralUSDTAmount: number | undefined;
}) => {
  return (
    <div className="flex flex-col items-center   bg-[#FFC67D] py-10 ">
      <Heading text="REFERRAL" />
      <div className="relative text-xl font-semibold text-center font-omnesreg xl:px-[20rem] md:px-[10rem] px-4 flex items-center justify-center">
        <Paragraph
          text="
        GULULU offers a new passive rewards opportunity to the meme coin scene
        but could also benefit from token price appreciation. GULULU has a fully
        diluted starting market cap nearly 900 times cheaper than the original
        Dogecoin."
        />

        <Image
          src={"/smolpaw6.svg"}
          alt="i"
          width={1000}
          height={1000}
          className="absolute w-[7rem] left-[10rem] -top-[4rem] xl:block hidden "
        />
        <Image
          src={"/bone9.svg"}
          alt="i"
          width={1000}
          height={1000}
          className="absolute w-[10rem] right-[5rem] -top-[4rem] xl:block hidden"
        />
      </div>
      <div className=" flex items-end justify-end lg:w-[70rem]">
        <div className="relative gap-2 flex flex-col bg-[#CFEEFF]  lg:pl-[25rem] pb-10 my-22  rounded-3xl md:px-[2rem] px-10 z-10 lg:h-[27rem] lg:items-end items-center justify-center py-10 lg:py-0">
          <div className="w-[90%] flex flex-col items-center gap-6">
            <h3 className="text-[1.7rem] text-center font-omnes">
              Referral Generated
            </h3>
            <div className="flex md:flex-row flex-wrap md:gap-32 gap-8 items-center justify-center mx-4">
              <div className="flex gap-2 sm:text-sm text-base font-bold">
                <Image
                  src={"/sol.svg"}
                  alt="i"
                  width={500}
                  height={100}
                  className="w-6 h-6 "
                />
                SOL: {referralSolAmount}
              </div>
              <div className="flex gap-2 sm:text-sm text-base font-bold">
                <Image
                  src={"/usdt.svg"}
                  alt="i"
                  width={500}
                  height={100}
                  className="w-6 h-6 "
                />
                USDT: {referralUSDTAmount}
              </div>
            </div>
            <h3 className="sm:text-[1.5rem] text-lg font-semibold text-center font-omnesregular sm:pt-6 py-2 ">
              Share Your Unique Referral Link
            </h3>

            <ReferralBox />
          </div>
          <Image
            src={"/puppytub.svg"}
            alt="i"
            width={1000}
            height={1000}
            className="lg:absolute w-[35rem] right-[33rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default Section5;
