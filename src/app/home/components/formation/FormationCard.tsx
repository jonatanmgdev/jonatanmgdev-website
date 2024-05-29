"use client";
import React from "react";
import { SpotlightWrapper } from "@/components";
import { IconCertificate } from "@/assets/icons";

interface PortfolioData {
  title: string;
  description: string;
  type: string;
}

/**
 * Card component of the formation section.
 * @returns {JSX.Element} HTML content of the component.
 * @param title - Title of the card.
 * @param description - Description of the card.
 * @param type - Type of the formation
 * @author Jonatan Montesdeoca González
 **/

const FormationCard: React.FC<PortfolioData> = ({
  title,
  description,
  type,
}) => {
  return (
    <SpotlightWrapper
      spotlightClassName="h-full"
      spotlightCardClassName="p-4 card-primary"
    >
      <article className="relative flex flex-col h-full">
        <div className="w-full flex flex-wrap justify-between items-center mb-2">
          <span className="flex text-white">{IconCertificate(50)}</span>
          <p className="flex justify-end w-fit h-fit rounded-lg p-2 text-white  text-xs bg-primary-deep">
            {type}
          </p>
        </div>
        <div className="flex flex-col w-full">
          <p
            className="text-lg font-semibold text-textcolor-accent break-words"
            aria-label={`Acceder al enlace del portfolio ${title}`}
          >
            {title}
          </p>
        </div>
        <div>
          <p className="text-secondary break-words">{description}</p>
        </div>
      </article>
    </SpotlightWrapper>
  );
};

export default FormationCard;
