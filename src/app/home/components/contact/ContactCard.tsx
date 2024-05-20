import React from "react";
import { Spotlight, SpotlightCard } from "../../../../components/Spotlight";

interface ContactCardProps {
  methodName: string;
  methodValue: string;
  url: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  methodName,
  methodValue,
  url,
}) => {
  return (
    <div className="card-primary flex flex-col items-center justify-start w-full py-4">
      <span>
        {methodName}
      </span>
      <p className="text-center text-white">
        {methodValue}
      </p>
    </div>
  );
};

export default ContactCard;
