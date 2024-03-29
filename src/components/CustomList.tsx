"use client";
import React, { useState } from 'react';

import YouTubeModal from './YoutubeModal';

export interface CustomListProps {
  title: string;
  subtitle: string;
  startElement: JSX.Element;
  url?: string;
  endElement?: JSX.Element;
}

const CustomList: React.FC<{ listOfElements: CustomListProps[] }> = ({ listOfElements: list }) => {
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null);

  const handleVideoClick = (url: string) => {
    setSelectedVideoUrl(url);
  };

  const closeModal = () => {
    setSelectedVideoUrl(null);
  };

  return (
    <div>
      <ul role="list" className="divide-y divide-[--primary-color]">
        {list.map((element, index) => (
          <li key={index} className="py-4">
            <div className="flex items-center space-x-4">
              <div className="flex min-w-8 min-h-8 justify-center items-center">
                {element.startElement}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-[--tertiary-color]">{element.title}</p>
                <p className="text-sm truncate">{element.subtitle}</p>
              </div>
              <div className="inline-flex items-center text-base font-semibold cursor-pointer text-[--quinary-color] hover:text-[--tertiary-color]" onClick={() => handleVideoClick(element.url || '')}>
                {element.endElement}
              </div>
            </div>
          </li>
        ))}
      </ul>
      {selectedVideoUrl && (
        <YouTubeModal youtubeUrl={selectedVideoUrl} onClose={closeModal} />
      )}
    </div>
  );
};

export default CustomList;