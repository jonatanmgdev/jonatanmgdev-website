"use client";
import React from "react";

interface KeyValue {
  key: string;
  value: string;
}

export interface JsonCodeSimulatorProps {
  comment: string;
  data: KeyValue[];
}

const JsonCodeSimulator: React.FC<JsonCodeSimulatorProps> = ({ data, comment }) => {

  return (
    <div>
      <div className="flex h-full items-center justify-start">
        <div className="w-full items-start justify-start">
          <code>
            <p className="text-sm mt-4">{`// ${comment}`}</p>
            <p className="items-start">
              <span className="text-[#C98BDF]">{"{"}</span>{" "}
            </p>
            {data.map((item, index) => (
              <p key={index} className="items-start">
                <span className="ml-4 text-[--quinary-color]">
                  {item.key + ":"}
                </span>
                <span className="ml-2 text-[--tertiary-color]">
                  {'"' + item.value + '"'}
                </span>
                <span className="text-[--quinary-color]">{","}</span>
              </p>
            ))}
            <p className="items-start">
              <span className="text-[#C98BDF]">{"}"}</span>{" "}
            </p>
          </code>
        </div>
      </div>
    </div>
  );
};

export default JsonCodeSimulator;
