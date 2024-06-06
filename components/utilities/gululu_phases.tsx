"use client";

import { useState, useEffect, Dispatch, SetStateAction } from "react";

const datesAndValues = [
  { date: new Date("2024-06-01"), value: 0.005 },
  { date: new Date("2024-06-06"), value: 0.006 },
  { date: new Date("2024-06-11"), value: 0.0072 },
  { date: new Date("2024-06-16"), value: 0.0085 },
  { date: new Date("2024-06-21"), value: 0.010 },
];

export const Gululu_price = () => {
  // const [GululuValueUSD, setGululuValueUSD] = useState(0);
  let GululuValueUSD = 0.85;
  checkDateAndUpdateValue(GululuValueUSD);
  const interval = setInterval(checkDateAndUpdateValue, 1000 * 60 * 60 * 24);
  clearInterval(interval);
  return  GululuValueUSD ;
};


const checkDateAndUpdateValue = (GululuValueUSD: number) => {
  const currentDate = new Date();
  datesAndValues.forEach(({ date, value }) => {
    if (
      currentDate.getFullYear() === date.getFullYear() &&
      currentDate.getMonth() === date.getMonth() &&
      currentDate.getDate() === date.getDate()
    ) {
      GululuValueUSD = value;
    }
  });
};
