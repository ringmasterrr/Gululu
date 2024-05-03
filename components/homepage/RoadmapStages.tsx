import Image from "next/image";
import React from "react";

export const Decorations = ({ src, css }: { src: string; css: string }) => {
  return (
    <div>
      <Image src={src} alt="paw" height={500} width={500} className={css} />
    </div>
  );
};

export const RoadmapStages = ({
  stage,
  description,
}: {
  stage: number;
  description: string;
}) => {
  return (
    <div>
      <h3 className="md:text-5xl text-4xl font-omnesblack uppercase pb-6">
        Stage {stage}
      </h3>
      <p className="md:text-xl text-lg font-omnesreg font-semibold">
        {description}
      </p>
    </div>
  );
};
