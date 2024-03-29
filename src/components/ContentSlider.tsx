"use client";
import { useState } from "react";
import Spotlight, { SpotlightCard } from "./Spotlight";

interface CarouselProps {
  slides: JSX.Element[];
  titles: string[];
  className?: string;
}

const ContentSlider: React.FC<CarouselProps> = ({
  slides,
  titles,
  className,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <Spotlight>
      <SpotlightCard className={`card shadow-lg rounded-lg ${className}`}>
        <div
          id="carouselExampleCaptions"
          className="relative"
          data-twe-carousel-init
          data-twe-ride="carousel"
        >
          <div className="relative w-full justify-between top-0 right-0 z-[2] flex">
            <div className="items-start mb-2">
              <h5>{titles[activeIndex]}</h5>
            </div>
          </div>
          <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none ${
                  activeIndex === index ? "block" : "hidden"
                }`}
                data-twe-carousel-active
                data-twe-carousel-item
                style={{ backfaceVisibility: "hidden" }}
              >
                {slide}
              </div>
            ))}
          </div>
        </div>
        <div className="absolute p-3 bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-5 h-5 rounded-full border-2 border-[--tertiary-color] ${
                activeIndex === index
                  ? "bg-[--tertiary-color]"
                  : "bg-transparent"
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </SpotlightCard>
    </Spotlight>
  );
};

export default ContentSlider;
