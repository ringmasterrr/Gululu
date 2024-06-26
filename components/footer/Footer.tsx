import React from "react";
import FAQ from "../utilities/FAQ";
import Image from "next/image";
import BuyGululu from "../ui/BuyGululu";

const Section10 = () => {
  return (
    <div className="relative bg-[#F7E8D5] sm:pb-96 pb-10 flex flex-col items-center gap-36">
        <Image src={"/bone14.svg"} alt="left" height={800} width={800} className="absolute -top-[5rem] right-[5%]  w-[10rem] 2xl:block hidden"/>
    
      <FAQ />
      <div className="relative bg-[#CFEEFF] lg:w-[60rem] w-[90%] rounded-2xl flex flex-col justify-between p-14 pb-32 gap-10">
        <div className="text-5xl text-center font-omnesblack  py-5 uppercase">
          JOIN OUR SOCIALS
        </div>

        <div className="flex items-center justify-center gap-12">
          <Image src={"/tel.svg"} alt="twitter" height={100} width={100} className="w-[5rem]" />
          <Image src={"/X.svg"} alt="twitter" height={100} width={100} className="w-[5rem]"/>
        </div>

        <div className="w-full flex items-center justify-center">
          <BuyGululu/>
        </div>
        <Image src={"/pawleft.svg"} alt="left" height={800} width={800} className="absolute -left-[15%] -top-[7%] w-[6rem] xl:block hidden"/>
        <Image src={"/pawright.svg"} alt="left" height={800} width={800} className="absolute -right-[15%] -top-[2%] w-[6rem] xl:block hidden"/>
        
        <Image src={"/left.svg"} alt="left" height={800} width={800} className="absolute lg:-bottom-[10rem] -bottom-[15rem] md:right-[35rem] right-20  xl:w-[40rem] lg:w-[25rem] md:w-[20rem] md:block hidden"/>
        <Image src={"/right.svg"} alt="left" height={800} width={800} className="absolute lg:-bottom-[10rem] -bottom-[15rem] md:left-[35rem] left-20 xl:w-[40rem] lg:w-[25rem] md:w-[20rem] md:block hidden"/>
      </div>
    </div>
  );
};

export default Section10;
