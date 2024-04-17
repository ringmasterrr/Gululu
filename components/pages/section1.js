import Image from "next/image";
import React from "react";
import Countdown from "../Countdown";

const Section1 = () => {
  return (
    <div className="relative flex flex-wrap bg-[#F7E8D5] sm:px-8 px-4  pb-14 pt-10 md:pt-0 justify-center">
      <div className=" relative flex flex-col xl:max-w-[50%] w-10/12 ">
        <Image
          src={"/sec1doge.png"}
          alt="doge"
          height={1500}
          width={1500}
          className="w-[809px] pt-11 pb-5 xl:ml-14"
        />
        <Image
          src={"/Star1.svg"}
          alt="paw"
          height={500}
          width={500}
          className=" absolute w-10 left-32 bottom-[27rem]  "
        />
        <Image
          src={"/Star3.svg"}
          alt="paw"
          height={500}
          width={500}
          className=" absolute md:w-[5rem] w-[3rem] left-[92%] top-[10%] "
        />
        <Image
          src={"/Star4.svg"}
          alt="paw"
          height={500}
          width={500}
          className=" absolute w-[3.5rem] left-[97%] top-[50%] "
        />
        <div>
          <div className="lg:pl-24">
            <div className="relative">
              <Image
                src={"/paw.svg"}
                alt="paw"
                height={500}
                width={500}
                className=" absolute sm:w-20 w-14 sm:-left-0 -left-14 sm:top-0 top-8 "
              />
              <h1 className="md:text-[3.5rem] sm:text-5xl text-[2.3rem] text-center font-omnesblack sm:pb-7 sm:leading-[4.7rem]">
                HI, MY NAME IS <br /> MEMECOIN
              </h1>
            </div>

            <h3 className="md:text-[1.56rem] text-xl text-center font-omnes pb-4 leading-[2.2rem]">
              I like chess and beating everyone <br /> in the Solana Ecosystem
            </h3>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col xl:max-w-[48%] w-full items-center justify-center pt-16 xl:ml-5 ml-0 ">
        <div className="bg-[#CFEEFF] rounded-3xl md:w-10/12 w-[97%] pt-20 z-10 ">
          <div className="flex flex-col justify-between ">
            <div>
              <h3 className="sm:px-24 px-4 font-omnes text-center leading-7 text-2xl ">
                MEMECOIN launches on doge day! Last <br /> chance to buy!
              </h3>
              <Countdown />
              <h3 className="text-center text-xl font-omnes font-bold my-6 ">
                Till DOGE20 claim and launch
              </h3>
              <h3 className="text-center text-2xl font-omnesblack leading-3 my-3">
                Over $10M raised!
              </h3>
              <div className="flex items-center justify-center sm:gap-6 gap-2 sm:ml-8 ml-2 ">
                <h3 className="text-center text-xl font-omnes my-3 font-bold ">
                  Your purchased DOGE20 = 0
                </h3>
                <Image src={"/i.svg"} alt="i" width={22} height={22} className=" w-7"/>
              </div>
              <div className="flex items-center justify-center sm:gap-6 gap-2 sm:ml-8 ml-2">
                <h3 className="text-center text-xl font-omnes my-1 font-bold ">
                  Your stakeable DOGE20 = 0
                </h3>
                <Image src={"/i.svg"} alt="i" width={22} height={22}  className=" w-7"/>
              </div>
              <div className="flex items-center justify-center gap-5">
                <div className="border-b-4 border-black w-48 "></div>
                <h3 className="text-center text-xl font-omnes my-6">
                  1 MEME20 = $0.00022
                </h3>
                <div className="border-b-4 border-black w-48 "></div>
              </div>
              <div className="flex md:flex-row flex-wrap md:gap-32 gap-4 items-center justify-center mx-4">
                <Image
                  src={"/eth.png"}
                  alt="i"
                  width={500}
                  height={100}
                  className="w-20 h-8 "
                />
                <Image
                  src={"/ustd.png"}
                  alt="i"
                  width={500}
                  height={100}
                  className="w-20 h-8 "
                />
                <Image
                  src={"/fiat.png"}
                  alt="i"
                  width={500}
                  height={100}
                  className="w-20 h-8 "
                />
              </div>
            </div>
            <div className="flex sm:flex-row flex-col items-center justify-center gap-7 mt-36">
              <button className="  font-bold z-20 w-64 h-14 font-omnes bg-black text-white rounded-full inline-block ">
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

        <Image
          src={"/bone1.svg"}
          alt="paw"
          height={500}
          width={500}
          className=" absolute w-40 bottom-24  -left-4 "
        />
        <Image
          src={"/bone2.svg"}
          alt="paw"
          height={500}
          width={500}
          className=" absolute w-40 bottom-2 -left-[2.6rem] "
        />
        <Image
          src={"/bone3.svg"}
          alt="paw"
          height={500}
          width={500}
          className=" absolute w-40 -right-4 top-16 "
        />
      </div>
    </div>
  );
};

export default Section1;
