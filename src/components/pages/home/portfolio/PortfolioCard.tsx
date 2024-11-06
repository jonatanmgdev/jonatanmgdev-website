"use client";
import React from "react";
import Image from "next/image";
import Popover from "@/components/popover/Popover";
import { SpotlightWrapper } from "@/components";
import { IconGithub } from "@/components/svgIcons";

type techIcon = {
  icon: JSX.Element;
  name: string;
};

interface PortfolioData {
  title: string;
  description: string;
  techIcons: techIcon[];
  imageSrc: string;
  type: string;
  url: string;
  gitHubUrl?: string;
}

/**
 * Card component of the portfolio section.
 * @returns {JSX.Element} HTML content of the component.
 * @param title - Title of the card.
 * @param description - Description of the card.
 * @param techIcons - Array of tech icons to be displayed in the card.
 * @param imageSrc - Image source of the card.
 * @param url - URL to be redirected when clicking on the card.
 * @param type - Type of the portfolio web or app.
 * @author Jonatan Montesdeoca González
 **/

const PortfolioCard: React.FC<PortfolioData> = ({
  title,
  description,
  imageSrc,
  techIcons,
  type,
  url,
  gitHubUrl,
}) => {
  return (
    <SpotlightWrapper
      spotlightClassName="h-full"
      spotlightCardClassName="card-primary p-4"
    >
      <article className="flex flex-col h-full">
        <div className="relative flex-grow">
          <div className="!absolute flex top-4 right-4">
            <div className="flex flex-col p-2 bg-primary-dark rounded-lg w-fit h-fit">
              <p className="text-white text-center text-xs">{type}</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg text-white">
            <Image
              src={imageSrc}
              alt={title}
              width={450}
              height={300}
              className="w-full h-full object-cover"
            />
            <div className="rounded-lg absolute inset-0 bg-gradient-to-t from-neutral-dark to-transparent"></div>
          </div>
        </div>
        <div className="z-10 mt-6 text-center flex-grow">
          <a
            href={url}
            className="text-lg sm:text-xl font-bold text-textcolor-heading break-words"
            aria-label={`Acceder al enlace del portfolio ${title}`}
          >
            {title}
          </a>
          <p className="text-secondary break-words">{description}</p>
        </div>
        <div className="flex flex-wrap z-10 items-center gap-2 mt-4">
          <div className="flex flex-wrap items-center gap-2 w-full">
            {gitHubUrl && (
              <button
                onClick={() => window.open(gitHubUrl, "_blank")}
                className="flex flex-row w-fit px-5 items-center justify-center gap-2 text-primary-dark text-opacity-90 hover:text-white border border-[#00bb86] border-opacity-20 hover:border-white hover:border-opacity-20 bg-neutral-deep hover:bg-neutral-deep hover:bg-opacity-80 p-2 transition-colors"
              >
                {IconGithub(20)}
                code
              </button>
            )}
            {techIcons.map((icon, iconIndex) => (
              <Popover key={iconIndex} content={`Uso de ${icon.name}`}>
                <span
                  key={iconIndex}
                  className="cursor-pointer rounded-full text-primary-dark text-opacity-90 hover:text-white border border-[#00bb86] border-opacity-20 hover:border-white hover:border-opacity-20 bg-neutral-deep hover:bg-neutral-deep hover:bg-opacity-15 p-3 transition-colors"
                >
                  {icon.icon}
                </span>
              </Popover>
            ))}
          </div>
        </div>
      </article>
    </SpotlightWrapper>
  );
};

export default PortfolioCard;
