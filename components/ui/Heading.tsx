import React from "react";

interface HeadingProps {
    text: string;
  }
  const Heading: React.FC<HeadingProps> = ({ text }) => {
  return (
    <div className="text-5xl text-center font-omnes py-[2rem]">{text}</div>
  );
};

export default Heading