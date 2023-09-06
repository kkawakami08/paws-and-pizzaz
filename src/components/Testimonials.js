import React from "react";
import TestimonialTile from "./TestimonialTile";

const Testimonials = () => {
  return (
    <div className="flex flex-col gap-10 px-10 pb-10">
      <p className="text-xl font-semibold">What Our Customers Say</p>
      <TestimonialTile />
      <TestimonialTile />
      <TestimonialTile />
    </div>
  );
};

export default Testimonials;
