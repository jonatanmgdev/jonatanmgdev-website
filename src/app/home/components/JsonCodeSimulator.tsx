'use client';
import React, { useState } from "react";

const JsonCodeSimulator: React.FC<any> = ({}) => {
    const [activeContent, setActiveContent] = useState(false);

  return (
    <div>
        {!activeContent ? (
        <div className="flex h-full items-center justify-start">
            <div className="w-full items-start justify-start">
            <code>
                <p className="text-sm mt-4">{"// JSON to Send"}</p>
                <p className="items-start">
                <span className="text-[#C98BDF]">{"{"}</span>{" "}
                </p>
                <p className="items-start">
                <span className="ml-4 text-[--quinary-color]">
                    {"name:"}
                </span>
                <span className="ml-2 text-[--tertiary-color]">
                    {'"Jonatan"'}
                </span>
                <span className="text-[--quinary-color]">{","}</span>
                </p>
                <p className="items-start">
                <span className="ml-4 text-[--quinary-color]">
                    {"surnames:"}
                </span>
                <span className="ml-2 text-[--tertiary-color]">
                    {'"Las Palmas de Gran Canaria"'}
                </span>
                <span className="text-[--quinary-color]">{","}</span>
                </p>
                <p className="items-start">
                <span className="ml-4 text-[--quinary-color]">
                    {"email:"}
                </span>
                <span className="ml-2 text-[--tertiary-color]">
                    {'"info@jonatanmg.dev"'}
                </span>
                <span className="text-[--quinary-color]">{","}</span>
                </p>
                <p className="items-start">
                <span className="ml-4 text-[--quinary-color]">
                    {"phone:"}
                </span>
                <span className="ml-2 text-[--tertiary-color]">{"2"}</span>
                <span className="text-[--quinary-color]">{","}</span>
                </p>
                <p className="items-start">
                <span className="ml-4 text-[--quinary-color]">
                    {"message:"}
                </span>
                <span className="ml-2 text-[--tertiary-color]">
                    {'"Spanish"'}
                </span>
                <span className="text-[--quinary-color]">{","}</span>
                </p>
                <p className="items-start">
                <span className="text-[#C98BDF]">{"}"}</span>{" "}
                </p>
            </code>
            </div>
        </div>
        ) : (
        <iframe
            src="https://open.spotify.com/embed/playlist/7ydlbniYlZpexOa06JD7ru?utm_source=generator&theme=0"
            width="100%"
            height="352"
            frameBorder="0"
            allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
        ></iframe>
        )}
    </div>
  );
};

export default JsonCodeSimulator;
