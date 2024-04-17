import Image from "next/image";
import React from "react";

const Section2 = () => {
  return (
    <div className="flex flex-col  xl:px-24 px-8 py-[4.8rem] items-center justify-center bg-[#FFC8BA]">
      <div className="flex flex-col items-center justify-center">
        <div className="md:text-5xl text-4xl text-center font-omnes uppercase">
          Our Doge just got more rewarding
        </div>
        <div className="text-xl font-semibold text-center font-omnesreg py-[2.8rem] xl:px-64 md:px-12 px-2">
         <p> Prepare for the ultimate Doge upgrade! We&apos;re sending Elon&apos;s fave
          towards a more sustainable future. Stake DOGE20 today to start earning
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

      <div className="md:py-0 py-16 md:gap-0 flex flex-col gap-10">

        <div className="flex flex-col xl:w-[95%] items-center justify-center bg-transparent  ">
          <div className="flex md:flex-row flex-col xl:w-[80%] w-auto items-center justify-start ">
            <div className="relative flex items-center justify-center">
              <Image
                src={"/dog.svg"}
                alt="i"
                width={1000}
                height={1000}
                className="lg:w-[40rem] md:w-[25rem] w-[90%]"
              />
              <Image
                src={"/fade.svg"}
                alt="i"
                width={1000}
                height={1000}
                className="w-[30rem] absolute top-52 right-10 lg:block hidden "
              />
              <Image
                src={"/pinkpawl.svg"}
                alt="i"
                width={1000}
                height={1000}
                className="lg:w-[6rem] w-[4rem] absolute -top-4 left-12"
              />
              <Image
                src={"/Star7.svg"}
                alt="i"
                width={1000}
                height={1000}
                className="w-[5rem] absolute bottom-56 left-20 lg:block hidden"
              />
            </div>
            <div className="flex flex-col items-start justify-center gap-5 md:w-[42%] w-[80%]">
              <h3 className="md:text-5xl text-4xl font-omnesblack uppercase">
                Good Boy Staking!
              </h3>
              <p className="text-xl font-omensreg font-bold ">
                Utilising smart contracts powered by Ethereum, DOGE20 is much
                more than a meme coin and brings passive earning potential to
                the community. Harness the power of your DOGE20 tokens by
                staking and earning rewards, making your tokens work for you.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col xl:w-[95%] items-center justify-center bg-transparent">
          <div className="flex md:flex-row-reverse flex-col xl:w-[80%] w-auto items-center ">
            <div className="relative flex items-center justify-center">
              <Image
                src={"/dog.svg"}
                alt="i"
                width={1000}
                height={1000}
                className="lg:w-[40rem] md:w-[25rem] w-[90%]"
              />
              <Image
                src={"/fade.svg"}
                alt="i"
                width={1000}
                height={1000}
                className="w-[30rem] absolute top-52 right-10 lg:block hidden"
              />
              <Image
                src={"/pinkpawr.svg"}
                alt="i"
                width={1000}
                height={1000}
                className="lg:w-[6rem] w-[4rem] absolute -top-4 right-12"
              />
              <Image
                src={"/Star7.svg"}
                alt="i"
                width={1000}
                height={1000}
                className="w-[5rem] absolute bottom-56 left-20 lg:block hidden"
              />
            </div>
            <div className="flex flex-col items-start justify-center gap-5 md:w-[42%] w-[80%]">
              <h3 className="md:text-5xl text-4xl font-omnesblack uppercase">
                Good Boy Staking!
              </h3>
              <p className="text-xl font-omensreg font-bold ">
                Utilising smart contracts powered by Ethereum, DOGE20 is much
                more than a meme coin and brings passive earning potential to
                the community. Harness the power of your DOGE20 tokens by
                staking and earning rewards, making your tokens work for you.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col xl:w-[95%] items-center justify-center bg-transparent  ">
          <div className="flex md:flex-row flex-col xl:w-[80%] w-auto items-center justify-start ">
            <div className="relative flex items-center justify-center">
              <Image
                src={"/dog.svg"}
                alt="i"
                width={1000}
                height={1000}
                className="lg:w-[40rem] md:w-[25rem] w-[90%]"
              />
              <Image
                src={"/fade.svg"}
                alt="i"
                width={1000}
                height={1000}
                className="w-[30rem] absolute top-52 right-10 lg:block hidden "
              />
              <Image
                src={"/pinkpawl.svg"}
                alt="i"
                width={1000}
                height={1000}
                className="lg:w-[6rem] w-[4rem] absolute -top-4 left-12"
              />
              <Image
                src={"/Star7.svg"}
                alt="i"
                width={1000}
                height={1000}
                className="w-[5rem] absolute bottom-56 left-20 lg:block hidden"
              />
            </div>
            <div className="flex flex-col items-start justify-center gap-5 md:w-[42%] w-[80%]">
              <h3 className="md:text-5xl text-4xl font-omnesblack uppercase">
                Good Boy Staking!
              </h3>
              <p className="text-xl font-omensreg font-bold ">
                Utilising smart contracts powered by Ethereum, DOGE20 is much
                more than a meme coin and brings passive earning potential to
                the community. Harness the power of your DOGE20 tokens by
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
