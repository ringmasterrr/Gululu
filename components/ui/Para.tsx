import React from "react";

interface ParaProps {
    text: string;
  }
  const Paragraph: React.FC<ParaProps> = ({ text }) => {
  return (
    <p className="text-xl font-semibold text-center font-omnesreg pb-[2rem] w-[90%]">
        { text }
      </p>
  );
};

export default Paragraph