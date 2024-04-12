import Image from "next/image";
import React from "react";

const Section3 = () => {
  return (
    <div className="relative bg-[#FFC67D] py-20">
    <Image
          src={"/bone4.svg"}
          alt="paw"
          height={500}
          width={500}
          className=" absolute w-60 right-52 -top-36 "
        />
      <div className="text-5xl text-center font-omnes">
        Featured In
      </div>
      <div className="flex flex-wrap items-center justify-evenly md:px-80  px-40 py-20 gap-16">
      <Image
          src={"/feature1.svg"}
          alt="paw"
          height={500}
          width={100}
          className=" w-56 "
        />
        <Image
          src={"/feature2.svg"}
          alt="paw"
          height={500}
          width={100}
          className=" w-56 "
        />
        <Image
          src={"/feature3.svg"}
          alt="paw"
          height={500}
          width={100}
          className="  w-56 "
        />
        <Image
          src={"/feature4.svg"}
          alt="paw"
          height={500}
          width={100}
          className="  w-56  "
        />
        <Image
          src={"/feature5.svg"}
          alt="paw"
          height={500}
          width={500}
          className="  w-56  "
        />
        <Image
          src={"/feature6.svg"}
          alt="paw"
          height={500}
          width={500}
          className=" w-56 "
        />
        <Image
          src={"/feature7.svg"}
          alt="paw"
          height={500}
          width={500}
          className=" w-56  "
        />     
      </div>
    </div>
  );
};

export default Section3;
