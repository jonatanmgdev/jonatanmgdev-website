import React from "react";
import Spotlight, { SpotlightCard } from "./Spotlight";

interface SoftSkillCardProps {
  skillName: string;
  svg: React.JSX.Element;
}

const SoftSkillCard: React.FC<SoftSkillCardProps> = ({ skillName, svg }) => {
  return (
    <Spotlight className="h-full min-h-[140px]">
      <SpotlightCard className="h-full">
        <div className="flex flex-col h-full soft-skill-card-primary shadow-lg rounded-lg items-center justify-center gap-2">
          <div className="flex">{svg}</div>
          <div className="items-center justify-center">
            <p className="text-[--quinary-color] text-center">{skillName}</p>
          </div>
        </div>
      </SpotlightCard>
    </Spotlight>
  );
};

export default SoftSkillCard;
