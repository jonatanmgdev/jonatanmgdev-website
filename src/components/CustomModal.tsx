import React from 'react';

interface CustomModalProps {
  isOpen: boolean;
  title: string;
  description: string;
  onClose: () => void;
  closeText?: string;
  aceptText?: string;
  onAccept?: () => void;
  icon?: JSX.Element;
  content?: JSX.Element;
  avoidClose?: boolean;
}

const CustomModal: React.FC<CustomModalProps> = ({
  isOpen,
  onClose,
  icon,
  title,
  description,
  content,
  aceptText = 'Aceptar',
  closeText = 'Cancelar',
  avoidClose = false,
  onAccept = () => {},
}) => {
  return (
    <>
      {isOpen && (
        <div className="fixed top-0 right-0 left-0 bottom-0 z-50 flex items-center justify-center bg-[#000000] bg-opacity-80">
          <div className="relative p-4 w-full max-w-2xl">
            <div className="relative bg-neutral-light shadow border-2 border-primary-dark rounded-lg">
              <div className="flex items-center justify-between p-4 border-b border-neutral-medium rounded-t text-primary-dark">
                {icon}<h3 className="text-xl font-semibold text-white">{title}</h3>
                <button
                  onClick={onClose}
                  type="button"
                  className="text-white bg-primary-dark hover:bg-white hover:text-gray-900 border-2 border-primary-dark rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Cerrar popup</span>
                </button>
              </div>
              <div className="mx-4 my-1">
                <p className="text-base leading-relaxed">{description}</p>
              </div>
              <div className="flex mx-4 my-2">{content}</div>
              <div className="flex items-center justify-end p-4 border-t border-neutral-medium rounded-b">
                <button
                  onClick={onAccept}
                  type="button"
                  className="text-white bg-primary-dark hover:bg-neutral-medium focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  {aceptText}
                </button>
                <button
                  onClick={onClose}
                  type="button"
                  className={`${avoidClose && 'hidden'} py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-black focus:z-10 focus:ring-4 focus:ring-gray-100`}
                >
                  {closeText}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CustomModal;