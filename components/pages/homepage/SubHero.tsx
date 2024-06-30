import Image from "next/image";
import React from "react";
import StalkingCard from "./StalkingCard";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Para";

const Section2 = () => {
  return (
    <div className="flex flex-col  py-[4.8rem] items-center justify-center bg-[#FFC8BA] ">
      <div className="flex flex-col items-center justify-center mx-28">
        <Heading text="OUR GULULU - THE MOST REWARDING MEMECOIN" />

        <Paragraph
          text="
        Stake your Gululu to earn passive income while supporting the network. Enjoy generous rewards, exclusive perks, and influence over future developments. The more you stake, the more you benefit, making staking an integral part of your Gululu experience!"
        />

        <div className="flex md:flex-row flex-col gap-4">
          <button className="font-bold z-20 w-56 h-14 font-omnes bg-black text-white rounded-full inline-block  ">
            WHITEPAPER
          </button>
          <button className="font-bold z-20 w-56 h-14 font-omnes bg-transparent text-black border-black border rounded-full inline-block  ">
            AUDIT
          </button>
        </div>
      </div>
      <div className="md:py-20 py-16 md:gap-20 flex flex-col xl:self-start w-[85%] xl:ml-32">
        <StalkingCard
          imageSrc={"/stalking1.svg"}
          title="Meme Magic"
          description="Gululu transforms your favorite cat and dog memes into a fun and vibrant cryptocurrency. By tokenizing these hilarious moments, we give you a unique way to collect, trade, and enjoy the internet's best pet memes. Each token captures the essence and humor of our furry friends, making every transaction a delightful experience.
"
          outerClassName={"flex flex-col items-center justify-start mb-5 mt-8"}
          innerClassName={
            "flex md:flex-row flex-col w-[100%] items-center justify-start"
          }
        />
        <StalkingCard
          imageSrc={"/stalking2.svg"}
          title="Community Vibes"
          description="Join a community that's all about fun, laughter, and pets. Gululu's community is filled with meme enthusiasts and pet lovers who share, create, and compete in meme contests. Engage with like-minded individuals, earn rewards for your participation, and watch your Gululu stash grow as you contribute to the fun!"
          outerClassName={
            "flex flex-col items-center justify-center mb-14 lg:mr-[5%] "
          }
          innerClassName={
            "flex md:flex-row-reverse flex-col w-[100%] lg:items-center items-end "
          }
        />
        <StalkingCard
          imageSrc={"/stalking3.svg"}
          title="Fast and Secure"
          description="Built on the Solana blockchain, Gululu ensures your transactions are fast, secure, and cost-effective. Enjoy the benefits of lightning-speed transfers and low transaction fees, so you can focus on trading and collecting without any hassle. Our robust security measures keep your assets safe, giving you peace of mind."
          outerClassName={"flex flex-col items-center justify-start"}
          innerClassName={
            "flex md:flex-row flex-col w-[100%] items-center justify-start"
          }
        />
      </div>
    </div>
  );
};

export default Section2;
