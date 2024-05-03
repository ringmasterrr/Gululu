import React from "react";

const RoadmapStages = ({ stage, description }: { stage: number, description: string })  => {
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

export default RoadmapStages;
