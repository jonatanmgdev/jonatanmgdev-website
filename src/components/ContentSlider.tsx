import { useState } from "react";
import Spotlight, { SpotlightCard } from "./Spotlight";

interface CarouselProps {
  slides: JSX.Element[];
  slidesCaptions: string[];
}

const ContentSlider: React.FC<CarouselProps> = ({ slides, slidesCaptions }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideTo = (index: number) => {
    setActiveIndex(index);
  };

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <Spotlight>
      <SpotlightCard className="card-primary shadow-lg rounded-lg">
        <div
          id="carouselExampleCaptions"
          className="relative"
          data-twe-carousel-init
          data-twe-ride="carousel"
        >
          <div className="relative w-full justify-between top-0 right-0 z-[2] mt-4 mr-4 flex">
            <div className="items-start">
                <h4>{slidesCaptions[activeIndex]}</h4>
            </div>
            <div className="items-end">
              <button
                type="button"
                onClick={goToPrevSlide}
                className="box-content h-8 w-8 flex-initial cursor-pointer border-0 border-solid border-transparent bg-[--primary-color] bg-clip-padding p-0 opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                style={{ visibility: activeIndex === 0 ? "hidden" : "visible" }}
                aria-label="Previous Slide"
              >
                {/* Icono de flecha izquierda */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[--quinary-color] hover:text-[--quaternary-color]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                type="button"
                onClick={goToNextSlide}
                className="box-content h-8 w-8 flex-initial cursor-pointer border-0 border-solid border-transparent bg-[--primary-color] bg-clip-padding p-0 opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                style={{
                  visibility:
                    activeIndex === slides.length - 1 ? "hidden" : "visible",
                }}
                aria-label="Next Slide"
              >
                {/* Icono de flecha derecha */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[--quinary-color] hover:text-[--quaternary-color]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
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
      </SpotlightCard>
    </Spotlight>
  );
};

export default ContentSlider;
