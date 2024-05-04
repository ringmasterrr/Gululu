import Image from "next/image";
import React from "react";

interface StalkingCardProps {
  imageSrc: string;
  title: string;
  description: string;
  outerClassName?: string;
  innerClassName?: string;
}

const StalkingCard: React.FC<StalkingCardProps> = ({ imageSrc, title, description, outerClassName, innerClassName }) => {
  return (
    <div className={outerClassName}>
      <div className={innerClassName}>
        <div className="flex items-center justify-center">
          <Image src={imageSrc} alt="i" width={1000} height={1000} className="md:w-[45%] w-[70%] object-cover transform md:scale-[2.2]" />
        </div>
        <div className="flex flex-col items-start justify-center gap-5 md:w-[600px]">
          <h3 className="xl:text-5xl lg:text-4xl text-3xl font-omnesblack uppercase">{title}</h3>
          <p className="xl:text-xl lg:text-lg text-base font-omensreg font-bold">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default StalkingCard;
