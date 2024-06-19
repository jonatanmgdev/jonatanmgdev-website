"use client";
import React from "react";

interface KeyValue {
  key: string;
  value: string;
}

export interface CodeBlockProps {
  comment: string;
  data: KeyValue[];
  className?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ data, comment, className }) => {

  return (
    <div className={`${className} bg-neutral-dark`}>
      <div className="flex flex-col h-full items-start justify-start">
        <div className="flex flex-row w-full bg-primary-deep rounded-tr-lg rounded-tl-lg p-2">
            <p className="font-bold text-white">Resumen de su e-mail</p>
        </div>
        <div className="w-full items-start justify-start p-4">
          <code>
            <p className="font-sourceCodePro text-textcolor-secondary">{`// ${comment}`}</p>
            <p className="items-start">
              <span className="text-[#C98BDF]">{"{"}</span>{" "}
            </p>
            {data.map((item, index) => (
              <p key={index} className="items-start">
                <span className="ml-4 text-textcolor-accent font-sourceCodePro">
                  {item.key + ":"}
                </span>
                <span className="ml-2 font-sourceCodePro text-textcolor-secondary">
                  {'"' + item.value + '"'}
                </span>
                <span className="text-textcolor-accent">{","}</span>
              </p>
            ))}
            <p className="items-start">
              <span className="text-[#C98BDF]">{"};"}</span>{" "}
            </p>
          </code>
        </div>
      </div>
    </div>
  );
};

export default CodeBlock;