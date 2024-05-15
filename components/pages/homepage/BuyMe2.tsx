import Heading from "@/components/ui/Heading";
import Image from "next/image";
import React from "react";

const Section8 = () => {
  return (
    <div className="relative bg-[#F7E8D5] py-24 ">
      <div className="relative z-10">
        <Heading text="BUY ME $GULULU"/>
        <div className="flex flex-row flex-wrap items-center justify-center gap-9 pt-2">
          <div className="flex flex-col items-start justify-start md:h-[34rem] bg-white rounded-md p-5">
            <div className="md:h-[25rem] md:w-[25rem] bg-[#FF933B] rounded-md rounded-br-[3rem] flex items-center justify-center ">
              <Image
                src={"/catdab.svg"}
                alt="dab"
                width={500}
                height={500}
                className=" w-fit"
              />
            </div>
            <h3 className=" font-omnes font-medium text-3xl  py-4">MEME 1</h3>
            <h3 className=" font-omnesreg font-medium text-xl text-[#3333337F] uppercase">
              Small Description
            </h3>
          </div>
          <div className="flex flex-col items-start justify-start md:h-[34rem] bg-white rounded-md p-5">
            <div className="md:h-[25rem] md:w-[25rem] bg-[#F49F8A] rounded-md rounded-br-[3rem] flex items-center justify-center ">
              <Image
                src={"/catdab.svg"}
                alt="dab"
                width={500}
                height={500}
                className=" w-fit"
              />
            </div>
            <h3 className=" font-omnes font-medium text-3xl  py-4">MEME 1</h3>
            <h3 className=" font-omnesreg font-medium text-xl text-[#3333337F] uppercase">
              Small Description
            </h3>
          </div>
          <div className="flex flex-col items-start justify-start md:h-[34rem] bg-white rounded-md p-5">
            <div className="md:h-[25rem] md:w-[25rem] bg-[#CFEEFF] rounded-md rounded-br-[3rem] flex items-center justify-center ">
              <Image
                src={"/catdab.svg"}
                alt="dab"
                width={500}
                height={500}
                className=" w-fit"
              />
            </div>
            <h3 className=" font-omnes font-medium text-3xl  py-4">MEME 1</h3>
            <h3 className=" font-omnesreg font-medium text-xl text-[#3333337F] uppercase">
              Small Description
            </h3>
          </div>
        </div>
      </div>
      <Image
        src={"/auction.svg"}
        alt="auction"
        height={500}
        width={1000}
        className=" absolute h-auto w-auto top-[23rem] right-0 z-0"
      />
      <Image
        src={"/auction.svg"}
        alt="auction"
        height={500}
        width={1000}
        className=" absolute h-auto w-auto top-[30.0rem] left-0 z-0"
      />
      <div className="w-full flex items-center justify-center py-20">
        <button className="  font-bold z-20 h-[4.4rem] w-[21.25rem] font-omnes bg-black text-white rounded-full inline-block  ">
          BUY GULULU
        </button>
      </div>

      <Image
        src={"/catflip.svg"}
        alt="auction"
        height={500}
        width={500}
        className=" absolute h-auto w-auto -bottom-[1.3rem] right-0 z-0"
      />

      <Image
        src={"/Star14.svg"}
        alt="auction"
        height={500}
        width={500}
        className=" absolute h-auto w-auto bottom-[5rem] right-[25rem] z-0"
      />

      <Image
        src={"/pinkpaw2.svg"}
        alt="auction"
        height={500}
        width={500}
        className=" absolute h-auto w-auto top-[2rem] right-[33rem] z-0"
      />
    </div>
  );
};

export default Section8;
