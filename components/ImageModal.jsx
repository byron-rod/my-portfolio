import React from "react";
import Image from "next/image";

const ImageModal = ({ isOpen, onClose, imageUrl }) => {
  if (!isOpen) return null;

  if (window.innerWidth < 1000) {
    onClose();
    return null;
  }

  return (
    <div className="hidden md:block lg:block fixed top-0 left-0 w-screen h-screen items-center justify-center bg-black bg-opacity-80 z-50">
      <div className="max-w-3/4 bg-grey-100 rounded-lg p-8 flex flex-col items-center">
        <div className="relative lg:h-[450px] lg:w-[900px]">
          <Image
            src={imageUrl}
            layout="fill"
            objectFit="contain"
            alt="Full Image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
        <button
          className="relative top-4 text-white hover:text-[#cabca3]"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
