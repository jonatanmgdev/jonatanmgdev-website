"use client";
import React from "react";
import { SpotlightWrapper } from "@/components";
import { IconCertificate } from "@/components/svgIcons";

interface PortfolioData {
  title: string;
  description: string;
  hours: number;
  type: string;
  isActive?: boolean;
}

/**
 * Card component of the formation section.
 * @returns {JSX.Element} HTML content of the component.
 * @param title - Title of the card.
 * @param description - Description of the card.
 * @param hours - Number of hours of the formation.
 * @param type - Type of the formation
 * @param isActive - The card is active or not.
 * @author Jonatan Montesdeoca González
 **/

const FormationCard: React.FC<PortfolioData> = ({
  title,
  description,
  hours,
  type,
  isActive = false,
}) => {
  return (
    <SpotlightWrapper
      spotlightClassName={"h-full"}
      spotlightCardClassName={"p-4 card-primary"}
    >
      <article className="relative flex flex-col h-full">
        <div className="w-full flex flex-wrap justify-between items-center mb-2">
          <span
            className={`flex ${
              isActive ? "text-textcolor-accent" : "text-textcolor-heading"
            } bg-neutral-deep rounded-lg items-center font-bold p-2 gap-2`}
          >
            {IconCertificate(30)} {isActive && "En curso"}
          </span>
          <div className="flex flex-col items-end justify-end">
            <p className="w-fit h-fit bg-neutral-deep rounded-lg p-2 mb-1 text-white text-xs">
              {type}
            </p>
            <p className="font-semibold text-sm">{hours} horas</p>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <p
            className={`text-lg font-semibold  ${
              isActive ? "text-textcolor-accent" : "text-textcolor-heading"
            }  break-words pb-1`}
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
