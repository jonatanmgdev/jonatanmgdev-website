import Image from "next/image";
import React from "react";

interface ProfileCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  cardColor?: string;
  textColor?: string;
  buttonText?: string;
  buttonUrl?: string;
  image: string;
}

const ProfileCard = (props: ProfileCardProps) => {
  const {
    title,
    description,
    icon = <></>,
    cardColor = "bg-neutral-dark",
    textColor = "text-[#044c93]",
    buttonText = "Contactar",
    buttonUrl = "https://www.linkedin.com/in/jonatanmgdev/",
    image,
  } = props;

  return (
    <div
      className={`flex flex-col md:flex-row rounded-3xl p-3 w-full max-w-xl gap-2 ${cardColor}`}
    >
      <div className="w-auto">
        <Image
          src={image}
          width={128}
          height={128}
          alt="Imagen de perfil"
          className="w-32 h-32 rounded-lg"
        />
      </div>
      <div className="flex-grow h-full">
        <div className="flex flex-col w-full justify-start">
          <span className={`flex font-semibold gap-1 ${textColor}`}>{icon} Linkedin</span>
          <p className={`text-lg font-bold ${textColor}`}>{title}</p>
          <p className={textColor}>{description}</p>
        </div>
        <div className="flex justify-end">
          <a
            href={buttonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#044c93] hover:bg-[#0a66c2] text-white hover:text-white/80 font-bold py-2 px-4 rounded-full"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
