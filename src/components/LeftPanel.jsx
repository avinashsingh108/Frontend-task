import React from "react";
import videoSrc from "../video/demoVideo.mp4";

const LeftPanel = ({
  textBoxes,
  setSelectedBoxIndex,
  deleteTextBox,
  videoRef,
}) => {
  return (
    <div className="relative flex-1 bg-gray-800">
      <video
        ref={videoRef}
        controls
        autoPlay
        className="w-full h-full object-cover"
        onError={(e) => console.error("Error loading video:", e)}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div
        className="absolute top-0 left-0 w-full h-full z-10"
        style={{ pointerEvents: "none" }} 
      >
        {textBoxes.map((box, index) => (
          <div
            key={index}
            className="absolute cursor-pointer group"
            style={{
              top: `${box.y}px`,
              left: `${box.x}px`,
              width: `${box.width}px`,
              height: `${box.height}px`,
              fontSize: `${box.fontSize}px`,
              fontFamily: box.fontFamily,
              color: box.color,
              padding: "2px 14px",
              borderRadius: "3px",
              backgroundColor: box.backgroundColor,
              textAlign: box.textAlign,
              fontWeight: box.bold ? "bold" : "normal",
              fontStyle: box.italic ? "italic" : "normal",
              textDecoration: box.underline ? "underline" : "none",
              zIndex: 10,
              border: "1px solid black",
              pointerEvents: "auto", 
            }}
            onClick={() => setSelectedBoxIndex(index)}
          >
            {box.text}
            <span
              className="absolute top-0 right-0 text-red-500 cursor-pointer z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              onClick={(e) => {
                e.stopPropagation();
                deleteTextBox(index);
              }}
              style={{
                padding: "0px 4px",
              }}
            >
              &times;
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftPanel;
