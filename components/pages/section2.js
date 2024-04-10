import Image from "next/image";
import React from "react";

const Section2 = () => {
  return (
    <div className="flex flex-col  px-24 py-[4.8rem] items-center justify-center bg-[#FFC8BA]">
      <div className="flex flex-col items-center justify-center">
        <div className="text-5xl text-center font-omnes uppercase">
          Our Doge just got more rewarding
        </div>
        <div className="text-xl font-semibold text-center font-omnesreg py-[2.8rem] p-64">
         <p> Prepare for the ultimate Doge upgrade! We&apos;re sending Elon&apos;s fave
          towards a more sustainable future. Stake DOGE20 today to start earning
          eco-friendly rewards.
          </p>
        </div>
        <div className="flex gap-4">
          <button className="font-bold z-20 w-56 h-14 font-omnes bg-black text-white rounded-full inline-block  ">
            WHITEPAPER
          </button>
          <button className="font-bold z-20 w-56 h-14 font-omnes bg-transparent text-black border-black border rounded-full inline-block  ">
            AUDIT
          </button>
        </div>
      </div>

      <div className="relative h-[90rem] ">

        <div className="flex flex-col w-[95%] items-center justify-center bg-transparent  ">
          <div className="flex flex-row w-[80%] items-center justify-start ">
            <div className="relative">
              <Image
                src={"/dog.svg"}
                alt="i"
                width={1000}
                height={1000}
                className="w-[40rem] "
              />
              <Image
                src={"/fade.svg"}
                alt="i"
                width={1000}
                height={1000}
                className="w-[30rem] absolute top-52 right-10 "
              />
              <Image
                src={"/pinkpawl.svg"}
                alt="i"
                width={1000}
                height={1000}
                className="w-[6rem] absolute top-1 left-12"
              />
              <Image
                src={"/Star7.svg"}
                alt="i"
                width={1000}
                height={1000}
                className="w-[5rem] absolute bottom-56 left-20"
              />
            </div>
            <div className="flex flex-col items-start justify-center gap-5 w-[42%]">
              <h3 className="text-5xl font-omnesblack uppercase">
                Good Boy Staking!
              </h3>
              <p className="text-lg font-omensreg font-bold ">
                Utilising smart contracts powered by Ethereum, DOGE20 is much
                more than a meme coin and brings passive earning potential to
                the community. Harness the power of your DOGE20 tokens by
                staking and earning rewards, making your tokens work for you.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-[95%] items-center justify-center -translate-y-[15rem] bg-transparent">
          <div className="flex flex-row-reverse w-[80%] items-center ">
            <div className="relative">
              <Image
                src={"/dog.svg"}
                alt="i"
                width={1000}
                height={1000}
                className="w-[40rem] "
              />
              <Image
                src={"/fade.svg"}
                alt="i"
                width={1000}
                height={1000}
                className="w-[30rem] absolute top-52 right-10 "
              />
              <Image
                src={"/pinkpawr.svg"}
                alt="i"
                width={1000}
                height={1000}
                className="w-[6rem] absolute top-1 right-12"
              />
              <Image
                src={"/Star7.svg"}
                alt="i"
                width={1000}
                height={1000}
                className="w-[5rem] absolute bottom-56 left-20"
              />
            </div>
            <div className="flex flex-col items-start justify-center gap-5 w-[42%]">
              <h3 className="text-5xl font-omnesblack uppercase">
                Good Boy Staking!
              </h3>
              <p className="text-lg font-omensreg font-bold ">
                Utilising smart contracts powered by Ethereum, DOGE20 is much
                more than a meme coin and brings passive earning potential to
                the community. Harness the power of your DOGE20 tokens by
                staking and earning rewards, making your tokens work for you.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-[95%] items-center justify-center bg-transparent -translate-y-[27rem] ">
          <div className="flex flex-row w-[80%] items-center justify-start ">
            <div className="relative">
              <Image
                src={"/dog.svg"}
                alt="i"
                width={1000}
                height={1000}
                className="w-[40rem] "
              />
              <Image
                src={"/fade.svg"}
                alt="i"
                width={1000}
                height={1000}
                className="w-[30rem] absolute top-52 right-10 "
              />
              <Image
                src={"/pinkpawl.svg"}
                alt="i"
                width={1000}
                height={1000}
                className="w-[6rem] absolute top-1 left-12"
              />
              <Image
                src={"/Star7.svg"}
                alt="i"
                width={1000}
                height={1000}
                className="w-[5rem] absolute bottom-56 left-20"
              />
            </div>
            <div className="flex flex-col items-start justify-center gap-5 w-[42%]">
              <h3 className="text-5xl font-omnesblack uppercase">
                Good Boy Staking!
              </h3>
              <p className="text-lg font-omensreg font-bold ">
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
