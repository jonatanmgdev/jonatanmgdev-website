"use client";
import React from "react";
import Image from "next/image";
import { SpotlightWrapper } from "@/components";

interface PortfolioData {
  title: string;
  description: string;
  imageSrc: string;
  url: string;
  type: string;
}

/**
 * Card component of the formation section.
 * @returns {JSX.Element} HTML content of the component.
 * @param title - Title of the card.
 * @param description - Description of the card.
 * @param imageSrc - Image source of the card.
 * @param url - URL to be redirected when clicking on the card.
 * @param type - Type of the formation
 * @author Jonatan Montesdeoca González
 **/

const FormationCard: React.FC<PortfolioData> = ({
  title,
  description,
  imageSrc,
  url,
  type,
}) => {
  return (
    <SpotlightWrapper
      spotlightClassName="h-full"
      spotlightCardClassName="card-primary p-4"
    >
      <article className="relative flex flex-col h-full justify-between">
        <div className="overflow-hidden rounded-xl text-white">
          <Image
            src={imageSrc}
            alt={title}
            width={450}
            height={300}
            className="w-full h-full object-cover"
          />
          <div className="!absolute top-4 right-4 p-2 bg-primary-dark bg-opacity-60 rounded-lg">
            <p className="text-white text-center text-xs">{type}</p>
          </div>
        </div>
        <div className="z-10 mt-6 text-center">
          <a
            href={url}
            className="text-xl sm:text-2xl font-bold text-textcolor-heading break-words"
            aria-label={`Acceder al enlace del portfolio ${title}`}
          >
            {title}
          </a>
          <p className="text-secondary break-words">{description}</p>
        </div>
      </article>
    </SpotlightWrapper>
  );
};

export default FormationCard;
