"use server";
import React from "react";
import { IconCheck, IconHome } from "@assets/icons";
import { SpotlightWrapper } from "@/components";

export type ExperienceData = {
  companyName: string;
  dates: string;
  position: string;
  ubication: string;
  description: JSX.Element;
  isActive: boolean;
};

/**
 * Card component of the experience section.
 * @returns {JSX.Element} HTML content of the component.
 * @param {ExperienceData} experienceData - Array with the data of the cards.
 * @param {companyName} experienceData.companyName - Name of the company.
 * @param {dates} experienceData.dates - Dates of the experience.
 * @param {position} experienceData.position - Position of the experience.
 * @param {ubication} experienceData.ubication - Ubication of the experience.
 * @param {description} experienceData.description - Description of the experience.
 * @param {isActive} experienceData.isActive - If the card is active.
 * @author Jonatan Montesdeoca González
 **/

export const ExperienceCard: React.FC<{ experienceData: ExperienceData[] }> = ({
  experienceData,
}) => {
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
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white group-[.is-active]:bg-primary-dark text-neutral-light group-[.is-active]:text-emerald-50 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              {IconHome(12)}
            </div>
          ) : (
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white group-[.is-active]:bg-primary-dark text-neutral-light group-[.is-active]:text-emerald-50 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              {IconCheck(12)}
            </div>
          )}
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
            <SpotlightWrapper spotlightCardClassName="card-primary p-4">
              <div className="flex w-full my-1 gap-2">
                <p className="md:flex-1 text-start text-sm font-medium text-textcolor-accent">
                  {experience.dates}
                </p>
                <p className="md:flex-1 text-start md:text-right  text-sm font-medium text-textcolor-accent">
                  {experience.ubication}
                </p>
              </div>
              <div className="flex w-full">
                <p className="font-bold text-lg text-textcolor-accent">
                  {experience.companyName}
                </p>
              </div>
              <div className="flex flex-col text-left">
                <p className="font-semibold text-md text-white">
                  {experience.position}
                </p>
              </div>
              <div className="flex text-left">{experience.description}</div>
            </SpotlightWrapper>
          </div>
        </div>
      ))}
    </>
  );
};
