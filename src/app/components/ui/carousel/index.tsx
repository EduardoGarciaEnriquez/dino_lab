import Image from "next/image";

import React, { useState } from 'react';

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className="relative">
      <div className="flex justify-center">
        <Image
                alt="Image"
                className="w-full max-w-md rounded-lgmx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                src={images[currentIndex]}
                width={550}
                height={310}
                layout="responsive"
              />      
      </div>
      <button
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        Prev
      </button>
      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
