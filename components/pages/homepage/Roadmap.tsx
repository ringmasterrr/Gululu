import React from "react";
import RoadmapData from "./RoadmapStages";
import Decorations from "@/components/ui/Decorations";
import Heading from "@/components/ui/Heading";

const Roadmap = () => {
  return (
    <div className="bg-[#FFC8BA]">
      <div className="py-20 max-w-[1920px] mx-auto">
        <Heading text="Roadmap" />
        <div className="flex flex-col sm:gap-72 gap-48 md:py-20 py-32 mt-16 ">
          {/* Section 1 */}
          <div className="relative flex items-end justify-center xl:justify-start xl:ml-[15%] 2xl:ml-[20rem] sm:ml-12 mx-4 md:h-[30rem]">
            <div className="relative flex flex-col bg-[#CFEEFF] md:w-[40rem] rounded-3xl md:py-20 md:px-[5.8rem] sm:p-16 p-12 z-10">
              <RoadmapData
                stage={1}
                description="Utilising smart contracts powered by Ethereum, GULULU is much
                more than a meme coin and brings passive earning potential to
                the community. Harness the power of your GULULU tokens by
                staking and earning rewards, making your tokens work for you."
              />

              <Decorations
                src="/catdab.svg"
                css="absolute md:w-[20rem] w-[14rem] md:-left-[13rem] -left-[10%] md:-bottom-[0rem] -bottom-[11rem] "
              />
              <Decorations
                src="/dogflip.svg"
                css="absolute md:w-[14rem] w-[10rem] right-[1rem] md:-top-[12.3rem] -top-[8.8rem] "
              />
              <Decorations
                src="/smolpaw1.svg"
                css="absolute w-[6rem] left-[1rem] -top-[13rem] xl:block hidden "
              />
              <Decorations
                src="/smolpaw2.svg"
                css="absolute w-[6rem] left-[70rem] top-[7rem] xl:block hidden "
              />
              <Decorations
                src="/Star9.svg"
                css="absolute w-[5rem] left-[55rem] -top-[10rem] xl:block hidden "
              />
              <Decorations
                src="/arrow1.svg"
                css="absolute 2xl:w-64 xl:w-56 w-64 2xl:left-[48rem] xl:left-[44rem] left-[48rem] top-[9rem] xl:block hidden  "
              />
            </div>
            <Decorations
              src="/bone5.svg"
              css="absolute w-[16.25rem] left-[34rem] top-[7.8rem] z-0 xl:block hidden "
            />
          </div>

          {/* Section 2 */}
          <div className="relative flex items-end justify-center xl:justify-end xl:mr-[6%] 2xl:mr-[14rem] sm:mr-12 mx-4 md:h-[30rem]">
            <div className="relative flex flex-col bg-[#CFEEFF] md:w-[40rem] rounded-3xl md:py-20 md:px-[5.8rem] sm:p-16 p-12 z-10">
              <RoadmapData
                stage={2}
                description="Utilising smart contracts powered by Ethereum, GULULU is much
                more than a meme coin and brings passive earning potential to
                the community. Harness the power of your GULULU tokens by
                staking and earning rewards, making your tokens work for you."
              />

              <Decorations
                src="/dogdab.svg"
                css="absolute md:w-[20rem] w-[14rem] md:-left-[13.5rem] -left-[14%] md:-bottom-[6rem] -bottom-[15rem] "
              />
              <Decorations
                src="/catflip.svg"
                css="absolute md:w-[14rem] w-[10rem] right-[0rem] md:-top-[11.4rem] -top-[8.2rem] "
              />
              <Decorations
                src="/smolpaw3.svg"
                css="absolute w-[6rem] right-[70rem] top-[1rem] xl:block hidden"
              />
              <Decorations
                src="/Star9.svg"
                css="absolute w-[5rem] right-[80rem] top-[16rem]xl:block hidden"
              />
              <Decorations
                src="/Star9.svg"
                css="absolute w-[5rem] right-[50rem] -top-[8rem] xl:block hidden"
              />
              <Decorations
                src="/arrow2.svg"
                css="absolute 2xl:w-64 xl:w-56 w-64 right-[55rem] top-[9rem] xl:block hidden"
              />
            </div>
            <Decorations
              src="/bone6.svg"
              css="w-[15.25rem] absolute right-[8rem] -bottom-[10rem] z-0 xl:block hidden"
            />
          </div>

          {/* Section 3 */}
          <div className="relative flex items-end justify-center xl:justify-start xl:ml-[15%] 2xl:ml-[20rem] mx-4 md:h-[30rem]">
            <div className="relative flex flex-col bg-[#CFEEFF] md:w-[40rem] rounded-3xl md:py-20 md:px-[5.8rem] sm:p-16 p-12 z-10">
              <RoadmapData
                stage={3}
                description="Utilising smart contracts powered by Ethereum, GULULU is much
                more than a meme coin and brings passive earning potential to
                the community. Harness the power of your GULULU tokens by
                staking and earning rewards, making your tokens work for you."
              />

              <Decorations
                src="/catdab.svg"
                css="absolute md:w-[20rem] w-[14rem] md:-left-[13rem] -left-[10%] md:-bottom-[0rem] -bottom-[11rem]"
              />
              <Decorations
                src="/dogflip.svg"
                css="absolute md:w-[14rem] w-[10rem] right-[1rem] md:-top-[12.3rem] -top-[8.8rem]"
              />
              <Decorations
                src="/smolpaw4.svg"
                css="absolute w-[6rem] left-[65rem] top-[2rem] xl:block hidden"
              />
              <Decorations
                src="/Star8.svg"
                css="absolute w-[5rem] left-[77rem] top-[15rem] xl:block hidden"
              />
              <Decorations
                src="/arrow3.svg"
                css="absolute 2xl:w-64 xl:w-56 w-64 2xl:left-[50rem] xl:left-[45rem] top-[9rem] xl:block hidden"
              />
            </div>
            <Decorations
              src="/bone7.svg"
              css="w-[16.25rem] absolute -left-[10rem] -top-[2rem] z-0 xl:block hidden"
            />
          </div>

          {/* Section 4 */}
          <div className="relative flex items-end justify-center xl:justify-end xl:mr-[6%] 2xl:mr-[14rem] sm:mr-12 mx-4 md:h-[30rem]">
            <div className="relative flex flex-col bg-[#CFEEFF] md:w-[40rem] rounded-3xl md:py-20 md:px-[5.8rem] sm:p-16 p-12 z-10">
              <RoadmapData
                stage={4}
                description="Utilising smart contracts powered by Ethereum, GULULU is much
                more than a meme coin and brings passive earning potential to
                the community. Harness the power of your GULULU tokens by
                staking and earning rewards, making your tokens work for you."
              />

              <Decorations
                src="/dogdab.svg"
                css="absolute md:w-[20rem] w-[14rem] md:-left-[13.5rem] -left-[14%] md:-bottom-[6rem] -bottom-[15rem]"
              />
              <Decorations
                src="/catflip.svg"
                css="absolute md:w-[14rem] w-[10rem] right-[0rem] md:-top-[11.4rem] -top-[8.2rem] "
              />
              <Decorations
                src="/smolpaw5.svg"
                css="absolute w-[6.5rem] right-[70rem] top-[4rem] xl:block hidden"
              />
              <Decorations
                src="/Star9.svg"
                css="absolute w-[5rem] right-[77rem]  top-[17rem] xl:block hidden"
              />
            </div>
            <Decorations
              src="/bone8.svg"
              css="w-[16.25rem] absolute right-[30rem] -top-[4rem] z-0 xl:block hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
