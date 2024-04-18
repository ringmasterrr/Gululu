"use client"

import React, { useState } from "react";

const Section9 = () => {
  const [rupeesValue, setRupeesValue] = useState("");
  const [dollarsValue, setDollarsValue] = useState("");

  // Conversion rate from Indian Rupees to Dollars
  const conversionRate = 0.013;

  // Function to handle input change and calculate dollars value
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setRupeesValue(inputValue);

    // Calculate dollars value based on the conversion rate
    const dollarsAmount = parseFloat(inputValue) * conversionRate;
    setDollarsValue(dollarsAmount.toFixed(2)); // Round to 2 decimal places
  };

  return (
    <div className="relative bg-[#FFC67D] flex flex-col items-center justify-center py-6">
      <div className="text-5xl text-center font-omnes py-5 uppercase">
        Rewards Calculator
      </div>

      <p className="text-xl font-semibold text-center font-omnesreg pb-[4rem] xl:px-[20rem] px-4">
        GULULU offers a new passive rewards opportunity to the meme coin
        scene but could also benefit from token price appreciation. GULULU has a
        fully diluted starting market cap nearly 900 times cheaper than the
        original Dogecoin.
      </p>

      <div className="bg-[#CFEEFF] lg:w-[62.5rem] w-[90%] rounded-3xl text-center py-10 flex flex-col items-center justify-center px-3">
        <h3 className="text-2xl font-omnes">Returns Calculator</h3>
        <h3 className="text-xl font-omnesreg font-semibold py-2 md:px-28">
          Input the amount of GULULU you&apos;re purchasing, and see what it
          would be worth at different prices.
        </h3>
        <div className=" lg:w-[75%] w-[90%] flex flex-col  justify-center">
          <div className="font-omnes flex flex-row justify-between items-center px-8 py-4  uppercase">
            <h3>If I buy</h3> <h3>($220)</h3>
          </div>
          <input
            type="number"
            placeholder="1000000"
            value={rupeesValue}
            onChange={handleInputChange}
            className="rounded-full px-4 py-1 w-[100%] h-[3.8rem] text-xl outline-none border border-black "
          />
          <div className="flex flex-col w-full pt-8">
            <h3 className="text-[#667CC1] font-bold text-start">
              Your $GULULU would be worth approximately:
            </h3>
            <div className=" bg-white rounded-full h-[1.1rem] mt-2 border border-black w-[99%]">
              <div className="bg-black h-[1rem] rounded-full w-[50%]"></div>
            </div>
          </div>
          <div className="text-[#667CC1] text-xl font-omnes flex flex-row justify-between items-center px-1 uppercase py-2">
            <h3 className="w-1/4 text-left">Your $GULULU would be worth</h3>
            <h3>${dollarsValue}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section9;
