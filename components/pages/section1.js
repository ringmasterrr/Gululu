import Image from "next/image";
import React from "react";
import Countdown from "../Countdown";

const Section1 = () => {
  return (
    <div className="flex bg-[#F7E8D5] px-24 pb-14">
      <div className="flex flex-col w-[55%]">
        <Image
          src={"/sec1doge.png"}
          alt="doge"
          height={1500}
          width={1500}
          className="w-[809px] pt-11 pb-5 ml-14"
        />

        <div>
          <div className="pl-24">
          <div className="relative">
            <Image
              src={"/paw.svg"}
              alt="paw"
              height={500}
              width={500}
              className="absolute w-20 translate-x-24 translate-y-5 "
            />
            </div>
            <h1 className="text-[3.5rem] text-center font-omnesblack pb-7 leading-[4.7rem]">
              HI, MY NAME IS <br /> MEMECOIN
            </h1>
            <h3 className="text-[1.56rem] text-center font-omnes pb-4 leading-[2.2rem]">
              I like chess and beating everyone <br /> in the Solana Ecosystem
            </h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[50%] items-center justify-center pt-16 mr-4">
        <div className="bg-[#CFEEFF] rounded-3xl w-10/12 pt-20  ">

          <div className="flex flex-col justify-between ">
            <div>
              <h3 className="px-24 font-omnes text-center leading-7 text-2xl">
                MEMECOIN launches on doge day! Last <br /> chance to buy!
              </h3>
              <Countdown />
              <h3 className="text-center text-lg font-omnesreg font-bold my-6 ">
                Till DOGE20 claim and launch
              </h3>
              <h3 className="text-center text-2xl font-omnesblack leading-3 my-3">
                Over $10M raised!
              </h3>
              <div className="flex items-center justify-center gap-6 ml-8 ">
                <h3 className="text-center text-base font-omnesreg my-3 font-bold ">
                  Your purchased DOGE20 = 0
                </h3>
                <Image src={"/i.svg"} alt="i" width={22} height={22} />
              </div>
              <div className="flex items-center justify-center gap-6 ml-8">
                <h3 className="text-center text-base font-omnesreg my-1 font-bold ">
                  Your stakeable DOGE20 = 0
                </h3>
                <Image src={"/i.svg"} alt="i" width={22} height={22} />
              </div>
              <div className="flex items-center justify-center gap-5">
                <div className="border-b-4 border-black w-48 "></div>
                <h3 className="text-center text-xl font-omnes my-6">
                  1 MEME20 = $0.00022
                </h3>
                <div className="border-b-4 border-black w-48 "></div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src={"/payments.svg"}
                  alt="i"
                  width={1000}
                  height={100}
                  className="w-[500px] h-[35px] "
                />
              </div>
            </div>
            <div className="flex items-center justify-center gap-7 mt-36">
              <button className="  font-bold z-20 w-64 h-14 font-omnes bg-black text-white rounded-full inline-block  ">
                BUY WITH BNB
              </button>
              <button className="  font-bold z-20 w-64 h-14 font-omnes bg-black text-white rounded-full inline-block  ">
                BUY NOW
              </button>
            </div>
            <div className="flex items-center justify-center my-6">
            <Image
                  src={"/poweredby.svg"}
                  alt="i"
                  width={1000}
                  height={100}
                  className="w-64 h-6 "
                />
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;