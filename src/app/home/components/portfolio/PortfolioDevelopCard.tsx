"use client";
import React from "react";
import Image from "next/image";
import { IconCode } from "@/components/svgIcons";
import { SpotlightWrapper } from "@/components";

export interface PortfolioDevelopData {
  title: string;
  description: string;
  imageSrc: string;
  type: string;
}


/**
 * Card component of the develop projects in portfolio section.
 * @returns {JSX.Element} HTML content of the component.
 * @param title - Title of the card.
 * @param description - Description of the card.
 * @param imageSrc - Image source of the card.
 * @param type - Type of the portfolio web or app.
 * @author Jonatan Montesdeoca González
 **/

const PortfolioDevelopCard: React.FC<PortfolioDevelopData> = ({
  title,
  description,
  imageSrc,
  type,
}) => {
  return (
    <SpotlightWrapper
      spotlightClassName="h-full"
      spotlightCardClassName="card-primary p-4"
    >
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 h-full">
        <div className="col-span-1 order-2 lg:order-1 lg:col-span-4 flex flex-col justify-between">
          <div className="bg-opacity-60 rounded-lg text-white flex justify-center items-center gap-2 relative bg-primary-dark max-w-max p-2 my-2 lg:mt-0">
            {IconCode(20)}
            <p className="text-white text-xs">{type} - en desarrollo</p>
          </div>
          <div className="space-y-2">
            <p className="text-xl sm:text-2xl font-bold text-textcolor-heading break-words">
              {title}
            </p>
            <p className="text-secondary break-words">{description}</p>
          </div>
        </div>
        <div className="grid col-span-1 order-1 lg:order-2 lg:col-span-2 justify-center items-center">
          <Image
            src={imageSrc}
            width={250}
            height={250}
            alt={`Imagen del desarrollo de ${title}`}
            className="portfolioDevelopImage border border-neutral-medium rounded-lg h-fit"
          />
        </div>
      </div>
    </SpotlightWrapper>
  );
};

export default PortfolioDevelopCard;
