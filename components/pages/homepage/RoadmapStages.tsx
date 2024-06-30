import React from "react";


const RoadmapData = ({
  roadmap,
  description,
}: {
  roadmap: string;
  description: string;
}) => {
  return (
    <div>
      <h3 className="md:text-4xl text-3xl font-omnesblack uppercase pb-6">
        {roadmap}
      </h3>
      <p className="md:text-xl text-lg font-omnesreg font-semibold">
        {description}
      </p>
    </div>
  );
};

export default RoadmapData