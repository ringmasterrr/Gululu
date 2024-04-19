"use client";

import React, { useState, useEffect } from "react";
import { FaFlag } from "react-icons/fa";
import { GiUsaFlag } from "react-icons/gi";

const Section9 = () => {
  const [coinAmount, setCoinAmount] = useState("1");
  const [dollarsValue, setDollarsValue] = useState("");
  const [rupeesValue, setRupeesValue] = useState("");
  const [coinPhase, setCoinPhase] = useState(1);
  const [currency, setCurrency] = useState("USD");

  // Function to handle input change and calculate dollars value
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setCoinAmount(inputValue);
    // Calculate the value of dollars and rupees when input changes
    const dollarsAmount =
      parseFloat(inputValue) * getPhasePrice(coinPhase) || 0;
    setDollarsValue(dollarsAmount.toFixed(2)); // Round to 2 decimal places
    setRupeesValue((dollarsAmount * 83).toFixed(2)); // Convert dollars to rupees
  };

  // Function to handle phase change and update coin phase
  const handlePhaseChange = (e) => {
    const newPhase = parseInt(e.target.value);
    setCoinPhase(newPhase);
    // Recalculate dollars and rupees value when phase changes
    const dollarsAmount = parseFloat(coinAmount) * getPhasePrice(newPhase) || 0;
    setDollarsValue(dollarsAmount.toFixed(2)); // Round to 2 decimal places
    setRupeesValue((dollarsAmount * 83).toFixed(2)); // Convert dollars to rupees
  };

  // Calculate dollars and rupees value based on the coin amount and phase price

  useEffect(() => {
    const dollarsAmount =
      parseFloat(coinAmount) * getPhasePrice(coinPhase) || 0;
    setDollarsValue(dollarsAmount.toFixed(2)); // Round to 2 decimal places
    setRupeesValue((dollarsAmount * 83).toFixed(2)); // Convert dollars to rupees
  }, [coinAmount, coinPhase]);

  // Function to get the price per coin for a given phase
  
  const getPhasePrice = (phase) => {
    switch (phase) {
      case 0:
        return 0.000;
      case 1:
        return 0.005;

      case 2:
        return 0.006;

      case 3:
        return 0.0072;

      case 4:
        return 0.0085;

      case 5:
        return 0.01;

      default:
        return 0.005;
    }
  };

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <div className="relative bg-[#FFC67D] flex flex-col items-center justify-center py-6">
      <div className="text-5xl text-center font-omnes py-5 uppercase">
        Rewards Calculator
      </div>

      <p className="text-xl font-semibold text-center font-omnesreg pb-[4rem] xl:px-[20rem] px-4">
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
                <option value="INR">
                   INR
                </option>
                <option value="USD">
                   USD
                </option>
              </select>
              <h2>
                {currency === "USD"
                  ? `${(0.005 * coinAmount).toFixed(2)}`
                  : `${(0.005 * 83 * coinAmount).toFixed(2)}`}
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
              And the token price reaches: {getPhasePrice(coinPhase)}$
            </h3>
            <div className="flex items-start justify-between mt-4 mb-8">
              <input
                type="range"
                min={0}
                max={5}
                value={coinPhase}
                onChange={handlePhaseChange}
                className="custom_slider appearance-none mt-[1px] "
              />
              <div className="text-gray-800 md:text-base text-sm pl-2 font-omnes">
                Phase {coinPhase}
              </div>
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
