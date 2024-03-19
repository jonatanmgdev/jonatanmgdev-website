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
        <div className="flex tech-skill-card-primary shadow-lg rounded-lg items-center justify-center gap-2">
          <div className="">
            {svg}
          </div>
          <div className="ml-2">
            <div className="mb-3">
              <p className="text-[--quinary-color] ml-2">{skillName}</p>
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