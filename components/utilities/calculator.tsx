import { useState, useEffect, Dispatch } from "react";
import Image from "next/image";
import Dropp from "./Dropdown";

const gululu = {
  value_USD: 0.0002,
};

export default function YourComponent({ result, setResult, selectedCurrency, setSelectedCurrency,}: { result: number, setResult: Dispatch<number>, selectedCurrency: string, setSelectedCurrency: Dispatch<string> }) {
  const [investedAmount, setInvestedAmount] = useState(0);
  const [exchangeRate, setExchangeRate] = useState<number | null>(null); // Specify exchangeRate as number or null

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Get the input value
    const inputValue = e.target.valueAsNumber;

    // Check if the input value is not negative
    if (inputValue >= 0 || isNaN(inputValue)) {
      // If not negative or NaN, update the state
      setInvestedAmount(inputValue);
    }
    // If negative or NaN, do nothing
  };

  const handleCurrencyChange = (currency: string) => {
    // Specify currency as string
    setSelectedCurrency(currency);
  };

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await fetch(
          `https://api.coinbase.com/v2/prices/${selectedCurrency}-USD/spot`
        );
        const data = await response.json();
        setExchangeRate(Number(data.data.amount)); // Convert exchange rate to number
      } catch (error) {
        console.error("Error fetching exchange rate:", error);
      }
    };

    fetchExchangeRate();
  }, [selectedCurrency]);

  useEffect(() => {
    if (exchangeRate !== null) {
      setResult((investedAmount * exchangeRate) / gululu.value_USD);
    }
  }, [investedAmount, exchangeRate]);

  

  return (
    <div className="flex md:flex-row flex-wrap gap-8 mx-4 py-8 text-black items-end justify-center" >
      <div className="text-black font-bold flex flex-col items-center justify-center text-center gap-3">
        Your Invested Amount{" "}
        <input
          type="number"
          value={investedAmount}
          onChange={handleAmountChange}
          placeholder="100"
          className="text-center rounded-full w-40 p-4 placeholder-gray-800 placeholder-opacity-70 text-base font-black font-omnes border border-black"
        />
      </div>
      <div className="text-black font-bold flex flex-col items-center justify-center text-center gap-3">
        <h3>Choose Currency</h3>
        <Dropp onSelectCurrency={handleCurrencyChange} />
      </div>
      <div className="text-black font-bold flex flex-col items-center justify-center text-center gap-3">
        You Get{" "}
        <input
          type="number"
          value={result.toFixed(2)}
          readOnly
          placeholder="0"
          className="text-center rounded-full w-40 h-14 p-4 bg-[#FFC67D] placeholder-black text-base font-black font-omnes border "
        />
      </div>
    </div>
  );
}
