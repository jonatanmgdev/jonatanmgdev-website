import React from "react";
import  { Spotlight, SpotlightCard } from "../../../../components/Spotlight";

interface SoftSkillCardProps {
  skillName: string;
  svg: React.JSX.Element;
}

const SoftSkillCard: React.FC<SoftSkillCardProps> = ({ skillName, svg }) => {
  return (
    <Spotlight>
      <SpotlightCard>
        <div className="card-primary flex flex-col items-center justify-center min-h-[140px] p-4 gap-2">
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
