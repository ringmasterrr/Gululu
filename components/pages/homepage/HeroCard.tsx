"use client";

import Image from "next/image";
import React from "react";
import Countdown from "../../utilities/Countdown";

const Section1 = () => {
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
                  <button className=" text-base font-bold z-20 w-64 h-14 font-omnes bg-black text-white rounded-full inline-block ">
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
                <button className=" text-base font-bold z-20 w-64 h-14 font-omnes bg-black text-white rounded-full inline-block ">
                  UNSTAKE
                </button>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="font-medium">
                  Reward collected: <span className="font-bold">$100,000</span>
                </div>
                <button className=" text-base font-bold z-20 w-64 h-14 font-omnes bg-black text-white rounded-full inline-block ">
                  CLAIM REWARD
                </button>
              </div>
            </div>
          </div>
        </div>
  );
};

export default Section1;
