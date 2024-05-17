import Image from "next/image";
import React from "react";

const Section7 = () => {
  return (
    <div className="xl:flex xl:min-h-[60rem] ">
      <div className="relative flex flex-col xl:w-[65rem] bg-black justify-start items-center lg:p-10  ">
        <div className="flex  text-white flex-col items-start justify-start xl:w-[60%] xl:mt-24 xl:p-0 sm:p-28 p-12 ">
          <h3 className=" font-omnesblack text-white md:text-[4.5rem] text-3xl  uppercase leading-[5rem] pb-14">
            Buy me GULULU
          </h3>
          <p className="font-omnesreg font-bold md:text-[1.6rem] text-lg tracking-wider">
            Install a Solana Wallet: Choose a wallet like Phantom, download, and
            follow the setup instructions. Ensure your wallet is secure and back
            up your seed phrase for recovery purposes. Install a Solana Wallet:
            Choose a wallet like Phantom, download, and follow the setup
            instructions. Ensure your wallet is secure and back up your seed
            phrase for recovery purposes.
          </p>
        </div>
        <Image
          src={"/smolpaw7.svg"}
          alt="buy"
          height={800}
          width={800}
          className="absolute bottom-[7rem] left-[5rem] w-28 xl:block hidden"
        />
      </div>
      <div className="xl:w-1/2 bg-[#FFC67D]">
        <Image
          src={"/buymeme.svg"}
          alt="buy"
          height={2000}
          width={2000}
          className="object-cover max-w-full h-full"
        />
      </div>
    </div>
  );
};

export default Section7;
