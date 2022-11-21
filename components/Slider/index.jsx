import React, { useState } from "react";
import Image from "next/image";

import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

export const Slider = ({ images = [] }) => {
  const [currImageIndex, setCurrImageIndex] = useState(0);
  const totalImages = images.length;

  const handleNext = () => {
    if (currImageIndex === totalImages - 1) {
      setCurrImageIndex(0);
      return;
    }
    setCurrImageIndex(currImageIndex + 1);
  };

  const handleBack = () => {
    if (currImageIndex === 0) {
      setCurrImageIndex(totalImages - 1);
      return;
    }
    setCurrImageIndex(currImageIndex - 1);
  };

  return (
    <div className="relative flex justify-between items-center gap-8">
      <button
        onClick={handleBack}
        className="text-4xl absolute left-4 top-0 h-fit my-auto bottom-0 z-10 bg-white rounded-sm"
      >
        <RiArrowLeftSLine />
      </button>
      {images.map((img, index) => (
        <React.Fragment key={index + img}>
          {currImageIndex === index && (
            <div
              className={`rounded-lg shadow-lg transition-opacity ease-linear duration-1000  ${
                currImageIndex === index ? "opacity-100" : ""
              } `}
            >
              <Image
                src={img}
                width={1200}
                height={1000}
                objectFit="cover"
                alt="Imagen sobre el trabajo"
              />
            </div>
          )}
        </React.Fragment>
      ))}
      <button
        onClick={handleNext}
        className="text-4xl absolute right-4 top-0 h-fit my-auto bottom-0 z-10 bg-white rounded-sm"
      >
        <RiArrowRightSLine />
      </button>
    </div>
  );
};
