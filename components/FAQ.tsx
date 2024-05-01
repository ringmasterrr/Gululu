import React from "react";
import Accordion from "./accordian";

const FAQ = () => {
  return (
    <div className="rounded-lg mt-40  flex flex-col items-center ">
      <h3 className="pb-[5%] text-[#667CC1] text-5xl font-omnes text-left w-[80%]">FAQ&apos;S</h3>
      <Accordion
        title="What is Webflow and why is it the best website builder?"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes."
      />
      <Accordion
        title="What is your favorite template from BRIX Templates??"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes."
      />

      <Accordion
        title="What is your favorite template from BRIX Templates?"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes."
      />
    </div>
  );
};

export default FAQ;
