import React from "react";

interface SkillCardProps {
  name: string;
  svg: React.JSX.Element;
  background?: string;
  className?: string;
  activeColor?: string;
  inactiveColor?: string;
}

/**
 * Card component of the experience section.
 * @returns {JSX.Element} HTML content of the component.
 * @param name - Name of the skill
 * @param svg - Icon of the skill
 * @param background - Background color of the card
 * @param className - Class name of the card
 * @param activeColor - Active color of the card
 * @param inactiveColor - Inactive color of the card
 * @author Jonatan Montesdeoca González
 **/

const SkillCard: React.FC<SkillCardProps> = ({ name, svg, background, className, activeColor, inactiveColor }) => {
  return (
    <div className={`${className} ${background} hover:bg-primary-deep flex flex-wrap h-fit w-fit items-center justify-center rounded-lg text-center gap-2 p-2 group`}>
      <span className={`${inactiveColor} ${activeColor}`}>
        {svg}
      </span>
      <p className={`${inactiveColor} ${activeColor}`}>
        {name}
      </p>
    </div>
  );
};

export default SkillCard;
