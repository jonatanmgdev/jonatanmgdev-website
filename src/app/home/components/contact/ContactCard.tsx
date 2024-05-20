import React from "react";

interface ContactCardProps {
  methodName: string;
  methodValue: string;
  methodIcon: JSX.Element;
  url: string;
  className?: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  methodName,
  methodValue,
  methodIcon,
  className,
  url,
}) => {
  return (
    <div
      className={`${className} card-primary flex flex-col items-center justify-center min-h-[60px] min-w-[180px] p-2`}
    >
      <span className="flex flex-wrap items-center justify-center gap-2">
        {methodIcon} {methodName}
      </span>
      <p className="text-center text-white text-sm">{methodValue}</p>
    </div>
  );
};

export default ContactCard;
