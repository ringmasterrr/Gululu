"use client"

import React, { useState } from "react";
import Image from "next/image";
import openIcon from "../public/close.svg";
import closeIcon from "../public/open.svg";

interface AccordionProps {
  title: string;
  answer: string;
}

const Accordion = ({ title, answer }: AccordionProps) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  const iconStyle = {
    transition: "transform 0.3s ease-in-out",
    transform: accordionOpen ? "rotate(180deg)" : "rotate(0deg)",
  };

  return (
    <div className="py-2 border-b border-[#D4D2E3] w-[85rem]">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full text-black"
        style={{ fontSize: "20px" }}
      >
        <span className="text-left font-omnes text-2xl font-extrabold">{title}</span>
        <div style={iconStyle}>
          <Image
            src={accordionOpen ? openIcon : closeIcon}
            alt={accordionOpen ? "Open Icon" : "Close Icon"}
            width={40}
            height={40}
          />
        </div>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out font-omnesreg font-black py-6 w-10/12 ${
          accordionOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
        style={{ fontSize: "18px" }}
      >
        <div className="overflow-hidden">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;
