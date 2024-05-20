"use client";
import { Spotlight, SpotlightCard } from "..";

interface CarouselItemProps {
  title: string;
  description: string;
  image: React.JSX.Element;
  className?: string;
}

const CarouselItem: React.FC<CarouselItemProps> = ({
  title,
  description,
  image,
  className,
}) => {

  return (
    <Spotlight>
      <SpotlightCard className={`bg-neutral-medium p-4 rounded-lg ${className}`}>
        <div className="max-w-[200px]" >
          {image}
          <h5 className="pt-4">{title}</h5>
          <p className="text-sm">{description}</p>
        </div>
      </SpotlightCard>
    </Spotlight>
  );
};

export default CarouselItem;
