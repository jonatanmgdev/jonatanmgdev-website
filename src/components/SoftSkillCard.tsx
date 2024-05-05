import React from "react";
import  { Spotlight, SpotlightCard } from "./Spotlight";

interface SoftSkillCardProps {
  skillName: string;
  svg: React.JSX.Element;
}

const SoftSkillCard: React.FC<SoftSkillCardProps> = ({ skillName, svg }) => {
  return (
    <Spotlight>
      <SpotlightCard>
        <div className="flex flex-col bg-neutral-medium shadow-lg rounded-lg items-center justify-center min-h-[100px] p-4 gap-2">
          <div className="text-white hover:text-accent-dark">{svg}</div>
          <div className="items-center justify-center">
            <p className="text-white text-center">{skillName}</p>
          </div>
        </div>
      </SpotlightCard>
    </Spotlight>
  );
};

export default SoftSkillCard;
