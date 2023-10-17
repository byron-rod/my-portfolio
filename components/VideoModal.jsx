import React from "react";

const VideoModal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  const handleClose = (e = {}) => {
    if (e.target?.id === "wrapper") onClose();
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50"
        id="wrapper"
        onClick={(e) => handleClose(e)}
      >
        <div className="w-[400px] md:w-[50%] flex flex-col">
          <button
            className="text-white text-xl place-self-end"
            onClick={() => onClose()}
          >
            X
          </button>
          <div className="bg-white p-2 rounded-md z-20">{children}</div>
        </div>
      </div>
    </>
  );
};

export default VideoModal;
