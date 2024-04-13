import React from "react";
import FAQ from "../FAQ";
import Image from "next/image";

const Section10 = () => {
  return (
    <div className="bg-[#F7E8D5] h-[100rem] flex flex-col items-center gap-36">
      <FAQ />
      <div className="relative bg-[#CFEEFF] h-[30rem] w-[60rem] rounded-2xl flex flex-col justify-between p-14">
        <div className="text-5xl text-center font-omnesblack  py-5 uppercase">
          JOIN OUR SOCIALS
        </div>

        <div className="flex items-center justify-center gap-20">
          <Image src={"/tel.svg"} alt="twitter" height={100} width={100} />
          <Image src={"/x.svg"} alt="twitter" height={100} width={100} />
        </div>

        <div className="w-full flex items-center justify-center">
          <button className="  text-2xl font-bold h-[4.4rem] w-[21.25rem] font-omnes bg-black text-white rounded-full inline-block  ">
            BUY $CATMATE
          </button>
        </div>
     
        <Image src={"/left.png"} alt="left" height={800} width={800} className="absolute -bottom-[20rem] right-[35rem]  w-[40rem] "/>
        <Image src={"/right.png"} alt="left" height={800} width={800} className="absolute -bottom-[20rem] left-[35rem]  w-[40rem] "/>

      </div>
      
    </div>
  );
};

export default Section10;
