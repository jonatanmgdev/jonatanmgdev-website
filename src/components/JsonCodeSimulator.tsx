"use client";
import React from "react";

interface KeyValue {
  key: string;
  value: string;
}

interface JsonCodeSimulatorProps {
  comment: string;
  data: KeyValue[];
}

const JsonCodeSimulator: React.FC<JsonCodeSimulatorProps> = ({
  data,
  comment,
}) => {
  return (
    <div className="flex w-full justify-start bg-neutral-medium rounded-xl p-4">
      <div className="w-full items-start justify-start">
        <code>
          <p className="text-sm mt-4">{`// ${comment}`}</p>
          <p className="items-start">
            <span className="text-[#C98BDF]">{"{"}</span>{" "}
          </p>
          {data.map((item, index) => (
            <p key={index} className="items-start">
              <span className="ml-4 text-white">{item.key + ":"}</span>
              <span className="ml-2 text-primary-dark">
                {'"' + item.value + '"'}
              </span>
              <span className="text-white">{","}</span>
            </p>
          ))}
          <p className="items-start">
            <span className="text-[#C98BDF]">{"}"}</span>{" "}
          </p>
        </code>
      </div>
    </div>
  );
};

export default JsonCodeSimulator;
