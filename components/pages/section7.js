import Image from "next/image";
import React from "react";

const Section7 = () => {
  return (
    <div className="flex h-[60rem]">
      <div className="relative flex flex-col w-[75rem] bg-black justify-start items-center ">
        <div className="flex  text-white flex-col items-start justify-start w-[35.5rem] mt-24">
          <h3 className=" font-omnesblack text-white text-[4.5rem] uppercase leading-[5rem] pb-14">
            Buy me MEMECOIN
          </h3>
          <p className="font-omnesreg font-bold text-[1.6rem] tracking-wider">
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
          className="absolute bottom-[7rem] left-[13rem] w-28"
        />
      </div>
      <div className="w-1/2">
        <Image
          src={"/buymeme.png"}
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
