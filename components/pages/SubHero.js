import Image from "next/image";
import React from "react";

const Section2 = () => {
  return (
    <div className="flex flex-col  py-[4.8rem] items-center justify-center bg-[#FFC8BA] ">
      <div className="flex flex-col items-center justify-center">
        <div className="md:text-5xl text-4xl text-center font-omnes uppercase">
          Our GULULU just got more rewarding
        </div>
        <div className="text-xl font-semibold text-center font-omnesreg py-[2.8rem] xl:px-[5%] md:px-12 px-2">
         <p> Prepare for the ultimate GULULU upgrade! We&apos;re sending Elon&apos;s fave
          towards a more sustainable future. Stake GULULU today to start earning
          eco-friendly rewards.
          </p>
        </div>
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

        <div className="flex flex-col items-center justify-start mb-5 mt-8">
          <div className="flex md:flex-row flex-col w-[100%] items-center justify-start ">
            <div className="flex items-center justify-center">
              <Image
                src={"/dog_left.png"}
                alt="i"
                width={1000}
                height={1000}
                className="md:w-[45%] w-[70%]  object-cover transform md:scale-[2.2]"
              />
            </div>
            <div className="flex flex-col items-start justify-center gap-5 md:w-[600px] ">
              <h3 className="xl:text-5xl lg:text-4xl text-3xl font-omnesblack uppercase">
                Good Boy Staking!
              </h3>
              <p className="xl:text-xl lg:text-lg text-base font-omensreg font-bold">
                Utilising smart contracts powered by Ethereum, GULULU is much
                more than a meme coin and brings passive earning potential to
                the community. Harness the power of your GULULU tokens by
                staking and earning rewards, making your tokens work for you.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mb-14 lg:mr-[5%] ">
          <div className="flex md:flex-row-reverse flex-col w-[100%] lg:items-center items-end ">
            <div className="flex items-center justify-center">
              <Image
                src={"/dog_right.png"}
                alt="i"
                width={1000}
                height={1000}
                className=" md:w-[45%] w-[70%] object-cover transform md:scale-[2.2]"

              />
            </div>
            <div className="flex flex-col items-start justify-center gap-5 md:w-[600px]">
              <h3 className="xl:text-5xl lg:text-4xl text-3xl font-omnesblack uppercase">
                Good Boy Staking!
              </h3>
              <p className="xl:text-xl lg:text-lg text-base font-omensreg font-bold ">
                Utilising smart contracts powered by Ethereum, GULULU is much
                more than a meme coin and brings passive earning potential to
                the community. Harness the power of your GULULU tokens by
                staking and earning rewards, making your tokens work for you.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-start">
          <div className="flex md:flex-row flex-col w-[100%] items-center justify-start ">
            <div className=" flex items-center justify-center">
              <Image
                src={"/dog_left.png"}
                alt="i"
                width={1000}
                height={1000}
                className="md:w-[45%] w-[70%] object-cover transform md:scale-[2.2]"

              />
            </div>
            <div className="flex flex-col items-start justify-center gap-5 md:w-[600px]">
              <h3 className="xl:text-5xl lg:text-4xl text-3xl font-omnesblack uppercase">
                Good Boy Staking!
              </h3>
              <p className="xl:text-xl lg:text-lg text-base font-omensreg font-bold ">
                Utilising smart contracts powered by Ethereum, GULULU is much
                more than a meme coin and brings passive earning potential to
                the community. Harness the power of your GULULU tokens by
                staking and earning rewards, making your tokens work for you.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Section2;
