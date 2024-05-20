import React from "react";
import { Spotlight, SpotlightCard } from "../../../../components/Spotlight";

interface SkillCardProps {
  skillName: string;
  svg: React.JSX.Element;
}

const SkillCard: React.FC<SkillCardProps> = ({
  skillName,
  svg,
}) => {
  return (
    <Spotlight className="group">
      <SpotlightCard className="card-primary p-4">
        <div className="flex flex-col items-center justify-center min-h-[100px] w-full p-2 gap-2">
          <span className="text-white group-hover:text-accent-dark">
          {svg}
          </span>
          <p className="text-center text-white">
            {skillName}
          </p>
        </div>
      </SpotlightCard>
    </Spotlight>
  );
};

export default SkillCard;
