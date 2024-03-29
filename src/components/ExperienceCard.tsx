import React from "react";
import Spotlight, { SpotlightCard } from "./Spotlight";
import { IconCheck, IconHome, IconLocation } from "@assets/icons";

export interface ExperienceCardProps {
  experienceData: ExperienceData[];
}

export interface ExperienceData {
  companyName: string;
  dates: string;
  position: string;
  ubication: string;
  description: JSX.Element;
  isActive: boolean;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experienceData }) => {
  return (
    <>
      {experienceData.map((experience, index) => (
        <div
          key={index}
          className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group ${
            experience.isActive ? "is-active" : ""
          }`}
        >
          {index === experienceData.length - 1 ? (
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white group-[.is-active]:bg-[--tertiary-color] text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              {IconHome(12)}
            </div>
          ) : (
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white group-[.is-active]:bg-[--tertiary-color] text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              {IconCheck(12)}
            </div>
          )}
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
            <Spotlight>
              <SpotlightCard className="my-experience-primary rounded-lg shadow-lg">
                <div className="h-full items-center justify-start">
                  <div className="w-max bg-[--tertiary-color] rounded-lg p-1 my-1 sm:mt-0">
                    <p className="text-sm font-bold text-[--primary-color]">
                      {experience.dates}
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-lg text-[--tertiary-color]">
                      {experience.companyName}
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between sm:space-x-2 mb-1">
                    <div>
                      <p className="font-semibold text-md text-[--quinary-color] leading-7">
                        {experience.position}
                      </p>
                    </div>
                    <div className="mt-1 sm:mt-0">
                      <div className="flex text-sm text-[--quinary-color] items-center justify-center gap-1">
                      {IconLocation(15)} {experience.ubication}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-starts justify-start">
                    {experience.description}
                  </div>
                </div>
              </SpotlightCard>
            </Spotlight>
          </div>
        </div>
      ))}
    </>
  );
};

export default ExperienceCard;
