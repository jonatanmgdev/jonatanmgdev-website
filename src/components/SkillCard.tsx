import React from "react";
import Spotlight, { SpotlightCard } from "./Spotlight";
import CircleIndicatorProgress from "./CircleIndicatorsProgress";

interface SkillCardProps {
  skillName: string;
  svg: React.JSX.Element;
  skillValue: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skillName, svg, skillValue }) => {
  return (
    <Spotlight>
      <SpotlightCard>
        <div className="flex flex-col sm:flex-row tech-skill-card-primary shadow-lg rounded-lg items-center justify-center gap-2">
          <div className="text-[--quinary-color] hover:text-[--quaternary-color]">
            {svg}
          </div>
          <div className="sm:ml-2">
            <div className="mb-2">
              <p className="text-center sm:text-left text-[--quinary-color] ml-2">{skillName}</p>
            </div>
            <div>
              <CircleIndicatorProgress value={skillValue} />
            </div>
          </div>
        </div>
      </SpotlightCard>
    </Spotlight>
  );
};

export default SkillCard;