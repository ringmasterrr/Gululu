import Heading from "@/components/ui/Heading";
import Image from "next/image";
import React from "react";

const Logo = ({ src }: any) => {
  return (
      <Image
        src={src}
        alt="logos"
        height={500}
        width={100}
        className=" md:w-56 w-40 "
      />
  );
};

const Section3 = () => {
  return (
    <div className="relative bg-[#FFC67D] py-20 flex flex-col items-center justify-center ">
      <Image
        src={"/bone4.svg"}
        alt="paw"
        height={500}
        width={500}
        className=" absolute xl:w-60 w-32 right-52 xl:-top-36 -top-14 "
      />
      <Heading text="Featured In" />
      <div className="flex flex-wrap items-center justify-evenly md:w-[70%] w-[85%] py-20 gap-16 ">
        <Logo src="/feature1.svg" />
        <Logo src="/feature2.svg" />
        <Logo src="/feature3.svg" />
        <Logo src="/feature4.svg" />
        <Logo src="/feature5.svg" />
        <Logo src="/feature6.svg" />
        <Logo src="/feature7.svg" />
      </div>
    </div>
  );
};

export default Section3;
