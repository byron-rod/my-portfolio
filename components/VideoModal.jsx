import React from "react";
import YouTube from "react-youtube";
import { useState, useEffect } from "react";

const VideoModal = ({ isOpen, onClose, videoUrl }) => {
  if (!isOpen) return null;
  const [videoWidth, setVideoWidth] = useState(380); // Default width for small screens
  const [videoHeight, setVideoHeight] = useState(250);

  const updateVideoSize = () => {
    // Determine the desired video dimensions based on the screen width
    if (window.innerWidth >= 1280) {
      setVideoWidth(800); // Adjust width for large screens
      setVideoHeight(450); // Adjust height for large screens
    } else if (window.innerWidth >= 768) {
      setVideoWidth(640); // Adjust width for medium-sized screens
      setVideoHeight(360); // Adjust height for medium-sized screens
    } else {
      setVideoWidth(380); // Default width for small screens
      setVideoHeight(250); // Default height for small screens
    }
  };

  useEffect(() => {
    // Update video size when the window size changes
    window.addEventListener("resize", updateVideoSize);
    return () => {
      window.removeEventListener("resize", updateVideoSize);
    };
  }, []);

  const opts = {
    height: videoHeight,
    width: videoWidth,
    playerVars: {
      autoplay: 1,
    },
  };

  const videoId = (videoUrl ?? "").split("v=")[1];

  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-80 z-50">
      <div className="max-w-3/4 bg-gray-600 rounded-lg p-4">
        <button
          className="absolute top-40 md:top-28 lg:top-16 justify-center text-white hover:text-gray-700"
          onClick={onClose}
        >
          Close
        </button>
        <div className="w-full h-auto  relative">
          <YouTube videoId={videoId} opts={opts} />
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
