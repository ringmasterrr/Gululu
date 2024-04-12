import Image from "next/image";
import React from "react";
import ReferralBox from "@/components/refferal";

const Section5 = () => {
  return (
    <div className="flex flex-col items-center   bg-[#FFC67D] h-[51rem] py-10 ">
      <div className="text-5xl text-center font-omnes py-5">REFERRAL</div>
      <div className="relative text-xl font-semibold text-center font-omnesreg px-[22rem]">
        <p>
          Dogecoin20 offers a new passive rewards opportunity to the meme coin
          scene but could also benefit from token price appreciation. DOGE20 has
          a fully diluted starting market cap nearly 900 times cheaper than the
          original Dogecoin.
        </p>
        <Image
          src={"/smolpaw6.svg"}
          alt="i"
          width={1000}
          height={1000}
          className="absolute w-[7rem] right-[100rem] -top-[4rem]"
        />
        <Image
          src={"/bone9.svg"}
          alt="i"
          width={1000}
          height={1000}
          className="absolute w-[10rem] left-[105rem] -top-[4rem]"
        />
      </div>
      <div className=" flex items-end justify-end w-[70rem]">
      <div className="relative flex flex-col bg-[#CFEEFF]  pl-[13rem] pb-10 my-24 w-[50rem] rounded-3xl px-[5.8rem] z-10 h-[27rem] items-center justify-center ">
        <h3 className="text-[1.7rem] text-center font-omnes">
          Referral Generated: $123.222
        </h3>
        <h3 className="text-[1.8rem] font-semibold text-center font-omnesregular pt-10">
          Share Your Unique Referral Link
        </h3>
        <div className="flex flex-row py-4 gap-2">
          <Image
            src={"/socials/facebook.svg"}
            alt="i"
            width={100}
            height={100}
            className="w-10"
          />
          <Image
            src={"/socials/twitter.svg"}
            alt="i"
            width={100}
            height={100}
            className="w-10"
          />
          <Image
            src={"/socials/linkedIn.svg"}
            alt="i"
            width={100}
            height={100}
            className="w-10"
          />
          <Image
            src={"/socials/Messenger.svg"}
            alt="i"
            width={100}
            height={100}
            className="w-10"
          />
          <Image
            src={"/socials/Sms.svg"}
            alt="i"
            width={100}
            height={100}
            className="w-10"
          />
          <Image
            src={"/socials/Whatsapp.svg"}
            alt="i"
            width={100}
            height={100}
            className="w-10"
          />
          <Image
            src={"/socials/Telegram.svg"}
            alt="i"
            width={100}
            height={100}
            className="w-10"
          />
          <Image
            src={"/socials/Wechat.svg"}
            alt="i"
            width={100}
            height={100}
            className="w-10"
          />
          <Image
            src={"/socials/Line.svg"}
            alt="i"
            width={100}
            height={100}
            className="w-10"
          />
          <Image
            src={"/socials/Messsage.svg"}
            alt="i"
            width={100}
            height={100}
            className="w-10"
          />
        </div>
        <ReferralBox referralLink={"https://example.com/referral"} />
        <Image
          src={"/puppytub.svg"}
          alt="i"
          width={1000}
          height={1000}
          className="absolute w-[40rem] right-[33rem]"
        />
      </div>
      </div>
    </div>
  );
};

export default Section5;
