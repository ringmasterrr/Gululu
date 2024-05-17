import Image from "next/image";
import React from "react";
import StalkingCard from "./StalkingCard";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Para";

const Section2 = () => {
  return (
    <div className="flex flex-col  py-[4.8rem] items-center justify-center bg-[#FFC8BA] ">
      <div className="flex flex-col items-center justify-center">
        <Heading text="OUR GULULU JUST GOT MORE REWARDING" />

        <Paragraph
          text="
        Prepare for the ultimate GULULU upgrade! We're sending
        Elon's fave towards a more sustainable future. Stake GULULU
        today to start earning eco-friendly rewards."
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
          title="Good Boy Staking!"
          description="Utilising smart contracts powered by Ethereum, GULULU is much more than a meme coin and brings passive earning potential to the community. Harness the power of your GULULU tokens by staking and earning rewards, making your tokens work for you."
          outerClassName={"flex flex-col items-center justify-start mb-5 mt-8"}
          innerClassName={
            "flex md:flex-row flex-col w-[100%] items-center justify-start"
          }
        />
        <StalkingCard
          imageSrc={"/stalking2.svg"}
          title="Good Boy Staking!"
          description="Utilising smart contracts powered by Ethereum, GULULU is much more than a meme coin and brings passive earning potential to the community. Harness the power of your GULULU tokens by staking and earning rewards, making your tokens work for you."
          outerClassName={
            "flex flex-col items-center justify-center mb-14 lg:mr-[5%] "
          }
          innerClassName={
            "flex md:flex-row-reverse flex-col w-[100%] lg:items-center items-end "
          }
        />
        <StalkingCard
          imageSrc={"/stalking3.svg"}
          title="Good Boy Staking!"
          description="Utilising smart contracts powered by Ethereum, GULULU is much more than a meme coin and brings passive earning potential to the community. Harness the power of your GULULU tokens by staking and earning rewards, making your tokens work for you."
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
