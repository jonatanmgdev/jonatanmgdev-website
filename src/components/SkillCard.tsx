import React from "react";
import { Spotlight, SpotlightCard } from "./Spotlight";

interface SkillCardProps {
  skillName: string;
  svg: React.JSX.Element;
}

const SkillCard: React.FC<SkillCardProps> = ({
  skillName,
  svg,
}) => {
  return (
    <Spotlight>
      <SpotlightCard>
        <div className="flex flex-col bg-neutral-medium shadow-lg rounded-lg items-center justify-center min-h-[100px] p-4 gap-2">
          <div className="text-white hover:text-accent-dark">{svg}</div>
          <p className="text-center sm:text-left text-white ml-2">
            {skillName}
          </p>
        </div>
      </SpotlightCard>
    </Spotlight>
  );
};

export default SkillCard;
