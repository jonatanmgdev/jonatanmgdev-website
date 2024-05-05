"use client";
import React from "react";
import  { Spotlight, SpotlightCard } from "./Spotlight";
import Image from "next/image";
import IconLink from "@assets/icons/IconLink";

export interface PortfolioData {
  title: string;
  companyName: string;
  description: string;
  icons: JSX.Element[];
  imageSrc: string;
  url: string;
  type: string;
}

const PortfolioCard: React.FC<PortfolioData> = ({ title, companyName, description, imageSrc, icons, url, type }) => {
    return (
        <Spotlight className="w-full h-full">
          <SpotlightCard className="h-full">
            <div className="w-full h-full rounded-xl bg-neutral-medium shadow-lg p-8">
              <div className="relative overflow-hidden rounded-xl text-white shadow-lg">
                <Image
                  src={imageSrc} 
                  alt={title} 
                  width={1470} 
                  height={980}
                  className="w-full h-full object-cover"
                />
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
                <div className="!absolute top-4 right-4 p-2 bg-[#00bb86] bg-opacity-60 rounded-lg">
                  <p className="text-white text-center text-xs uppercase">
                    {type}
                  </p>
                </div>
              </div>
              <div className="mt-6 text-center relative z-10 space-y-2">
                <h2 className="text-lg text-white transition flex-row flex justify-center align-middle content-center">
                  {title} - {companyName} 
                  <a href={url} className="ml-1">{IconLink(20)}</a>
                </h2>
                <p className="text-secondary">{description}</p>
              </div>
              <div className="z-10 group mt-8 inline-flex flex-wrap items-center gap-3">
                {/* Se itera sobre el array de iconos */}
                {icons.map((icon, iconIndex) => (
                  <span
                    key={iconIndex}
                    className="cursor-pointer rounded-full text-[#00bb86] text-opacity-60 hover:text-[#00bb86] border border-[#00bb86] border-opacity-20 hover:border-[#00bb86] hover:border-opacity-20 bg-[#00bb86] bg-opacity-5 hover:bg-[#38b349] hover:bg-opacity-15  p-3 transition-colors"
                  >
                    {icon}
                  </span>
                ))}
              </div>
            </div>
          </SpotlightCard>
        </Spotlight>
      );
};

export default PortfolioCard;
