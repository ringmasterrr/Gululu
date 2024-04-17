import React from "react";
import FAQ from "../FAQ";
import Image from "next/image";

const Section10 = () => {
  return (
    <div className="bg-[#F7E8D5] sm:pb-96 pb-10 flex flex-col items-center gap-36">
      <FAQ />
      <div className="relative bg-[#CFEEFF] lg:w-[60rem] w-[90%] rounded-2xl flex flex-col justify-between p-14 gap-10">
        <div className="text-5xl text-center font-omnesblack  py-5 uppercase">
          JOIN OUR SOCIALS
        </div>

        <div className="flex items-center justify-center gap-20">
          <Image src={"/tel.svg"} alt="twitter" height={100} width={100} />
          <Image src={"/X.svg"} alt="twitter" height={100} width={100} />
        </div>

        <div className="w-full flex items-center justify-center">
          <button className="  text-2xl font-bold h-[4.4rem] w-[21.25rem] font-omnes bg-black text-white rounded-full inline-block  ">
            BUY $CATMATE
          </button>
        </div>
     
        <Image src={"/left.png"} alt="left" height={800} width={800} className="absolute lg:-bottom-[20rem] -bottom-[15rem] md:right-[35rem] right-20  xl:w-[40rem] lg:w-[25rem] md:w-[20rem] md:block hidden"/>
        <Image src={"/right.png"} alt="left" height={800} width={800} className="absolute lg:-bottom-[20rem] -bottom-[15rem] md:left-[35rem] left-20 xl:w-[40rem] lg:w-[25rem] md:w-[20rem] md:block hidden"/>

      </div>
      
    </div>
  );
};

export default Section10;
