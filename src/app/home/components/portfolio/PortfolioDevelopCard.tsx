"use client";
import React from "react";
import { Spotlight, SpotlightCard } from "../../../../components/Spotlight";
import Image from "next/image";
import { IconCode } from "@/assets/icons";

export interface PortfolioDevelopData {
  title: string;
  description: string;
  imageSrc: string;
  type: string;
}

const PortfolioDevelopCard: React.FC<PortfolioDevelopData> = ({
  title,
  description,
  imageSrc,
  type,
}) => {
  return (
    <Spotlight>
      <SpotlightCard className="card-primary p-4">
        <div className="flex xs:flex-cols-1 sm:flex-cols-2 p-2">
          <div className="flex flex-col justify-between relative z-10 space-y-12 lg:space-y-6">
            <div className="bg-opacity-60 rounded-lg text-white flex justify-center items-center gap-2 relative bg-primary-dark max-w-max p-2">
              {IconCode(20)}
              <p className="text-white text-xs">
                {type} - En desarrollo
              </p>
            </div>
            <div className="space-y-2">
              <h2 className="text-lg text-white">{title}</h2>
              <p className="text-secondary">{description}</p>
            </div>
          </div>
          <div className="overflow-hidden relative mt-6 sm:mt-auto h-fit -mb-[34px] -mr-[34px] sm:ml-6 p-6 rounded-tl-3xl">
            <Image
              src={imageSrc}
              width={620}
              height={620}
              alt={`Imagen del desarrollo de ${title}`}
              className="portfolioDevelopImage border-2 border-neutral-medium rounded-xl"
            />
          </div>
        </div>
      </SpotlightCard>
    </Spotlight>
  );
};

export default PortfolioDevelopCard;
