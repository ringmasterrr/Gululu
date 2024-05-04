"use client";

import Image from "next/image";
import React, { useState, useEffect, ChangeEvent } from "react";

interface PhasePrices {
  [key: number]: number;
}

const Section9: React.FC = () => {
  const [coinAmount, setCoinAmount] = useState<string>("1");
  const [dollarsValue, setDollarsValue] = useState<string>("");
  const [rupeesValue, setRupeesValue] = useState<string>("");
  const [coinPhase, setCoinPhase] = useState<number>(10);
  const [currency, setCurrency] = useState<string>("USD");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const inputValue: string = e.target.value;
    setCoinAmount(inputValue);
    const dollarsAmount: number =
      parseFloat(inputValue) * getPhasePrice(coinPhase) || 0;
    setDollarsValue(dollarsAmount.toFixed(2));
    setRupeesValue((dollarsAmount * 83).toFixed(2));
  };

  const handlePhaseChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const newPhase: number = parseFloat(e.target.value);
    setCoinPhase(newPhase);
    const phasePrice: number = 0.005 + (newPhase - 1) * 0.0001;
    const dollarsAmount: number = parseFloat(coinAmount) * phasePrice || 0;
    setDollarsValue(dollarsAmount.toFixed(2));
    setRupeesValue((dollarsAmount * 83).toFixed(2));
  };

  useEffect(() => {
    const dollarsAmount: number =
      parseFloat(coinAmount) * getPhasePrice(coinPhase) || 0;
    setDollarsValue(dollarsAmount.toFixed(2));
    setRupeesValue((dollarsAmount * 83).toFixed(2));
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coinAmount, coinPhase]);

  const getPhasePrice = (phase: number): number => {
    const currentPhase: number = Math.floor(phase / 10) * 10;
    const nextPhase: number = currentPhase + 10;
    const currentPrice: number = phasePrices[currentPhase] || 0;
    const nextPrice: number = phasePrices[nextPhase] || 0;
    const phaseDiff: number = phase - currentPhase;
    const priceDiff: number = nextPrice - currentPrice;
    return currentPrice + (priceDiff / 10) * phaseDiff;
  };

  const phasePrices: PhasePrices = {
    0: 0.0,
    10: 0.005,
    20: 0.006,
    30: 0.0072,
    40: 0.0085,
    50: 0.01,
  };

  const handleCurrencyChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setCurrency(event.target.value);
  };

  return (
    <div className="relative bg-[#FFC67D] flex flex-col items-center justify-center py-12">
      <Image
        src={"/smolshiba2.svg"}
        alt="auction"
        height={500}
        width={500}
        className=" absolute h-auto w-auto -bottom-[6rem] left-0 z-0  2xl:block hidden"
      />
      <Image
        src={"/bone12.svg"}
        alt="auction"
        height={500}
        width={500}
        className=" absolute h-auto w-auto -top-[5rem] left-10 z-0 lg:block hidden "
      />
      <Image
        src={"/smolpaw8.svg"}
        alt="auction"
        height={500}
        width={500}
        className=" absolute h-auto w-auto top-[25rem] right-[85%] z-0 2xl:block hidden"
      />

      <div className="text-5xl text-center font-omnes py-5 uppercase">
        Rewards Calculator
      </div>

      <p className="text-xl font-semibold text-center font-omnesreg pb-[4rem] xl:px-[15rem] px-[2rem]">
        GULULU offers a new passive rewards opportunity to the meme coin scene
        but could also benefit from token price appreciation. GULULU has a fully
        diluted starting market cap nearly 900 times cheaper than the original
        Dogecoin.
      </p>

      <div className="bg-[#CFEEFF] lg:w-[62.5rem] w-[90%] rounded-3xl text-center py-10 flex flex-col items-center justify-center px-3">
        <h3 className="text-2xl font-omnes">Returns Calculator</h3>
        <h3 className="text-xl font-omnesreg font-semibold py-2 md:px-28">
          Input the amount of GULULU you&apos;re purchasing, and see what it
          would be worth at different prices.
        </h3>
        <div className=" lg:w-[75%] w-[90%] flex flex-col  justify-center">
          <div className="font-omnes flex flex-row justify-between items-center px-8 py-4  uppercase">
            <h3>If I buy</h3>

            <div>
              <select value={currency} onChange={handleCurrencyChange}>
                <option value="INR">INR</option>
                <option value="USD">USD</option>
              </select>
              <h2>
                {currency === "USD"
                  ? `${(0.005 * parseFloat(coinAmount)).toFixed(2)}`
                  : `${(0.005 * 83 * parseFloat(coinAmount)).toFixed(2)}`}
              </h2>
            </div>
          </div>
          <input
            type="number"
            placeholder="1000000"
            value={coinAmount}
            onChange={handleInputChange}
            className="rounded-full px-4 py-1 w-[100%] h-[3.8rem] text-xl outline-none border border-black "
          />

          <div className="flex flex-col w-full pt-8">
            <h3 className="text-[#667CC1] font-bold text-start">
              And the token price reaches: {getPhasePrice(coinPhase).toFixed(3)}$
            </h3>
            <div className="flex items-start justify-between mt-4 mb-8">
              <input
                type="range"
                min={10}
                max={50} // Adjust the max value to allow finer adjustments
                step={1} // Change the step to 1
                value={coinPhase}
                onChange={handlePhaseChange}
                className="custom_slider appearance-none mt-[1px] "
              />
            </div>
          </div>
          <div className="text-[#667CC1] text-xl font-omnes flex flex-row justify-between items-center px-1 uppercase py-2">
            <h3 className="w-1/4 text-left">Your $GULULU would be worth</h3>
            <div>
              <h3>USD {dollarsValue}</h3>
              <h3>INR {rupeesValue}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section9;