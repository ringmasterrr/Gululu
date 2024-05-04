import Image from "next/image";
import React from "react";
import ReferralBox from "../../utilities/Refferal";
import SocialIcon from "../../ui/Socials";


const Section5 = () => {
  return (
    <div className="flex flex-col items-center   bg-[#FFC67D] py-10 ">
      <div className="text-5xl text-center font-omnes py-5">REFERRAL</div>
      <div className="relative text-xl font-semibold text-center font-omnesreg xl:px-[20rem] md:px-[10rem] px-4">
        <p>
          GULULU offers a new passive rewards opportunity to the meme coin scene
          but could also benefit from token price appreciation. GULULU has a
          fully diluted starting market cap nearly 900 times cheaper than the
          original Dogecoin.
        </p>
        <Image
          src={"/smolpaw6.svg"}
          alt="i"
          width={1000}
          height={1000}
          className="absolute w-[7rem] left-[10rem] -top-[4rem] xl:block hidden "
        />
        <Image
          src={"/bone9.svg"}
          alt="i"
          width={1000}
          height={1000}
          className="absolute w-[10rem] right-[5rem] -top-[4rem] xl:block hidden"
        />
      </div>
      <div className=" flex items-end justify-end lg:w-[70rem]">
        <div className="relative flex flex-col bg-[#CFEEFF]  lg:pl-[13rem] pb-10 my-24 lg:w-[50rem] rounded-3xl md:px-[5.8rem] px-10 z-10 lg:h-[27rem] items-center justify-center py-10 lg:py-0">
          <h3 className="text-[1.7rem] text-center font-omnes">
            Referral Generated: $123.222
          </h3>
          <h3 className="sm:text-[1.8rem] text-lg font-semibold text-center font-omnesregular sm:pt-10 pt-2">
            Share Your Unique Referral Link
          </h3>
          <div className="flex md:flex-row flex-wrap py-4 gap-2">
            <SocialIcon src="/socials/twitter.svg" />
            <SocialIcon src="/socials/linkedin.svg" />
            <SocialIcon src="/socials/Messenger.svg" />
            <SocialIcon src="/socials/Sms.svg" />
            <SocialIcon src="/socials/Whatsapp.svg" />
            <SocialIcon src="/socials/Telegram.svg" />
            <SocialIcon src="/socials/Wechat.svg" />
            <SocialIcon src="/socials/Line.svg" />
            <SocialIcon src="/socials/Messsage.svg" />
          </div>
          <ReferralBox referralLink={"https://example.com/referral"} />
          <Image
            src={"/puppytub.svg"}
            alt="i"
            width={1000}
            height={1000}
            className="lg:absolute w-[40rem] right-[33rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default Section5;
