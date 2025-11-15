import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials } from "@/data";
import { div } from "motion/react-client";
import { TextSvg } from "./TextSvg";

const Clients = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        Kind words from
        <span className="text-purple"> satisfied clients</span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />

        <div className="flex flex-wrap items-center justify-center md:mt-8 gap-4 md:gap-16 max-lg:mt-10">
          {companies.map(({ id, img, name }) => (
            <div
              key={id}
              className={`flex h-12 md:max-w-60 max-w-32 gap-2 ${
                id === 5 ? "mr-12" : id === 6 ? "ml-20" : ""
              }`}
            >
              <img src={img} alt={name} className="md:w-8 w-5 md:h-8 h-5" />
              <TextSvg text={name} className="w-24 h-10" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
