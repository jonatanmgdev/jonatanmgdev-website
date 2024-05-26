"use client";
import React from "react";

interface ContactCardProps {
  methodName: string;
  methodValue: string;
  methodIcon: JSX.Element;
  url: string;
  className?: string;
}

/**
 * Card component of the experience section.
 * @returns {JSX.Element} HTML content of the component.
 * @param {methodName} name of the social media.
 * @param {methodValue} value of the social media.
 * @param {methodIcon} icon of the social media.
 * @param {url} url to redirect to.
 * @param {className} class name of the component.
 * @author Jonatan Montesdeoca González
 **/

const ContactSocialCard: React.FC<ContactCardProps> = ({
  methodName,
  methodValue,
  methodIcon,
  className,
  url,
}) => {
  return (
    <div className={`${className} card-primary min-w-[180px]`}>
      <button
        className="flex flex-col bg-transparent hover:bg-transparent w-full justify-center items-center text-center"
        onClick={() => window.open(url)}
      >
        <span className="flex flex-wrap gap-2">
          {methodIcon} {methodName}
        </span>
        <p className="flex text-white text-sm">{methodValue}</p>
      </button>
    </div>
  );
};

export default ContactSocialCard;
