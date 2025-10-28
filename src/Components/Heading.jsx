import React from "react";

export const Heading = ({ heading }) => {
  return (
    <div className="text-center mt-5 mb-2">
      <span className="heading text-white px-3 py-1 rounded-pill my-3 fw-bold">
        {heading}
      </span>
    </div>
  );
};
