"use client";
import React, { useState } from 'react';

interface YouTubeModalProps {
  youtubeUrl: string;
  onClose: () => void;
}

const YouTubeModal: React.FC<YouTubeModalProps> = ({ youtubeUrl, onClose }) => {
  const [showModal, setShowModal] = useState(true);

  const handleCloseModal = () => {
    setShowModal(false);
    onClose();
  };

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-[#000000] bg-opacity-90" onClick={handleCloseModal}>
          <div className="flex items-center justify-center min-h-screen">
            <div className="relative max-w-[95%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[50%] p-2 bg-[--primary-color]  border-2 border-[--tertiary-color] rounded-lg shadow-lg">
              <button
                onClick={handleCloseModal}
                type="button"
                className="absolute top-[-40px] right-0 text-black bg-[--tertiary-color] border-2 border-[--tertiary-color] hover:bg-[#EEEEEE] hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex items-center justify-center"
              >
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="aspect-w-16 aspect-h-9 min-w-[380px] h-[200px] md:min-w-[460px] md:h-[250px]">
                <iframe
                  width="100%"
                  height="100%"
                  src={youtubeUrl}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default YouTubeModal;