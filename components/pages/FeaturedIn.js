import Image from "next/image";
import React from "react";

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
      <div className="text-5xl text-center font-omnes">
        Featured In
      </div>
      <div className="flex flex-wrap items-center justify-evenly md:w-[70%] w-[85%] py-20 gap-16 ">
      <Image
          src={"/feature1.svg"}
          alt="paw"
          height={500}
          width={100}
          className=" md:w-56 w-40 "
        />
        <Image
          src={"/feature2.svg"}
          alt="paw"
          height={500}
          width={100}
          className=" md:w-56 w-40 "
        />
        <Image
          src={"/feature3.svg"}
          alt="paw"
          height={500}
          width={100}
          className="  md:w-56 w-40 "
        />
        <Image
          src={"/feature4.svg"}
          alt="paw"
          height={500}
          width={100}
          className="  md:w-56 w-40 "
        />
        <Image
          src={"/feature5.svg"}
          alt="paw"
          height={500}
          width={500}
          className="  md:w-56 w-40 "
        />
        <Image
          src={"/feature6.svg"}
          alt="paw"
          height={500}
          width={500}
          className=" md:w-56 w-40 "
        />
        <Image
          src={"/feature7.svg"}
          alt="paw"
          height={500}
          width={500}
          className=" md:w-56 w-40 "
        />     
      </div>
    </div>
  );
};

export default Section3;
