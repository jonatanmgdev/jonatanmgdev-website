"use client";
import React from "react";
import { Spotlight, SpotlightCard } from "../../../../components/Spotlight";
import Image from "next/image";
import Popover from "@/components/popover/Popover";

type techIcon = {
  icon: JSX.Element;
  name: string;
};

export interface PortfolioData {
  title: string;
  description: string;
  techIcons: techIcon[];
  imageSrc: string;
  url: string;
  type: string;
}

const PortfolioCard: React.FC<PortfolioData> = ({
  title,
  description,
  imageSrc,
  techIcons,
  url,
  type,
}) => {
  return (
    <Spotlight className="h-full">
      <SpotlightCard className="card-primary p-4">
        <article className="h-full relative flex flex-col justify-between">
          <div className="overflow-hidden rounded-xl text-white shadow-lg">
            <Image
              src={imageSrc}
              alt={title}
              width={450}
              height={300}
              className="w-full h-full object-cover"
            />
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
            <div className="!absolute top-4 right-4 p-2 bg-[#00bb86] bg-opacity-60 rounded-lg">
              <p className="text-white text-center text-xs">{type}</p>
            </div>
          </div>
          <div className="z-10 mt-6 text-center">
            <a
              aria-label={`Acceder al enlace del portfolio ${title}`}
              href={url}
              className="flex justify-center xs:text-xl text-2xl text-white font-semibold truncate"
            >
              {title}
            </a>
            <p className="text-secondary break-words">{description}</p>
          </div>
          <div className="flex flex-col z-10 mt-6">
            <span>Desarrollado con:</span>
            <div className="mt-2 inline-flex flex-row items-center gap-3">
            {/* Se itera sobre el array de iconos */}
            {techIcons.map((icon, iconIndex) => (
              <Popover key={iconIndex} content={`${icon.name}`}>
              <span
                key={iconIndex}
                className="cursor-pointer rounded-full text-[#00bb86] text-opacity-60 hover:text-[#00bb86] border border-[#00bb86] border-opacity-20 hover:border-[#00bb86] hover:border-opacity-20 bg-[#00bb86] bg-opacity-5 hover:bg-[#38b349] hover:bg-opacity-15  p-3 transition-colors"
              >
                {icon.icon}
              </span>
              </Popover>
            ))}
          </div>
          </div>

        </article>
      </SpotlightCard>
    </Spotlight>
  );
};

export default PortfolioCard;
