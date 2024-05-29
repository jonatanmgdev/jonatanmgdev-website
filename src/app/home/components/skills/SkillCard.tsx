import { SpotlightWrapper } from "@/components";
import React from "react";

interface SkillCardProps {
  name: string;
  svg: React.JSX.Element;
}

/**
 * Card component of the experience section.
 * @returns {JSX.Element} HTML content of the component.
 * @param name - Name of the skill
 * @param svg - Icon of the skill
 * @author Jonatan Montesdeoca González
 **/

const SkillCard: React.FC<SkillCardProps> = ({ name, svg }) => {
  return (
    <SpotlightWrapper
      spotlightClassName="group"
      spotlightCardClassName="card-primary p-2"
    >
      <div className="flex flex-row items-center justify-center w-full gap-2">
        <span className="text-white group-hover:text-accent-dark">{svg}</span>
        <p className="text-center text-white">{name}</p>
      </div>
    </SpotlightWrapper>
  );
};

export default SkillCard;
