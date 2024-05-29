"use client";
import React, { useState } from 'react';

interface PopoverProps {
  content: string;
  children: React.ReactNode;
}

const Popover: React.FC<PopoverProps> = ({ content, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="relative inline-grid"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className="absolute bottom-full mb-2 w-auto p-2 bg-primary-deep rounded-md text-sm">
          {content}
        </div>
      )}
    </div>
  );
};

export default Popover;