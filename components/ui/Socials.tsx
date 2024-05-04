import Image from "next/image";
import React from "react";

const SocialIcon = ({ src }: any) => {
  return (
    <Image
      src={src}
      alt="SocialMediaIcon"
      height={100}
      width={100}
      className="w-10"
    />
  );
};

export default SocialIcon