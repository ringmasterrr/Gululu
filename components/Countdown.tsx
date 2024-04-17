"use client";

import Image from "next/image";
import CountdownComp from "react-countdown";

const Countdown = () => {
  const renderer = ({ days, hours, minutes, seconds }: any) => {
    // Add leading zeros to ensure two-digit format
    const formattedDays = String(days).padStart(2, '0');
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
  
    return (
      <div className=" flex flex-wrap h-28 place-items-center text-center items-center justify-evenly font-omnesblack text-xs bg-[#FFCBBF] sm:mx-14 mx-4 px-4 rounded-2xl mt-12">
        <span className="flex flex-col items-center justify-center sm:w-20 w-8 h-24 sm:text-4xl text-3xl font-semibold ">
          {formattedDays}
          <span className="text-sm font-light pt-3">DAY</span>
        </span>
        <Dots/>
        <span className="flex flex-col items-center justify-center sm:w-20 w-8 h-24 sm:text-4xl text-3xl font-semibold ">
          {formattedHours}
          <span className="text-sm font-light pt-3">HRS</span>
        </span>
        <Dots/>
        <span className="flex flex-col items-center justify-center sm:w-20 w-8 h-24 sm:text-4xl text-3xl font-semibold ">
          {formattedMinutes}
          <span className="text-sm font-light pt-3">MINS</span>
        </span>
        <Dots/>
        <span className="flex flex-col items-center justify-center sm:w-20 w-8 h-24 sm:text-4xl text-3xl font-semibold ">
          {formattedSeconds}
          <span className="text-sm font-light pt-3">SEC</span>
        </span>
      </div>
    );
  };
  
  return <CountdownComp date={Date.now() + (18 * 24 * 60 * 60 * 1000) + (51 * 60 * 1000)} renderer={renderer} />;
};

export default Countdown;

const Dots = () => {
  return (
    <>
    <Image
            src="/dots.svg"
            alt=":"
            width={5}
            height={24}
            className="w-[0.6rem] h-[1.5rem] mb-6"
          />
    </>
  )
}