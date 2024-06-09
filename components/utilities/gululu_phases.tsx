import React, { useState, useEffect } from 'react';

const GululuPrice = () => {
  const phases = [
    { price: 0.005, timestamp: 1717816319 },
    { price: 0.006, timestamp: 1718421119 },
    { price: 0.0072, timestamp: 1719026526 },
    { price: 0.0085, timestamp: 1719631326 },
    { price: 0.01, timestamp: 1720236126 },
  ];

  const getCurrentPrice = () => {
    const currentTime = Math.floor(Date.now() / 1000);
    for (let i = phases.length - 1; i >= 0; i--) {
      if (currentTime >= phases[i].timestamp) {
        return phases[i].price;
      }
    }
    return phases[0].price; 
  };

  return getCurrentPrice();
};

export default GululuPrice;
