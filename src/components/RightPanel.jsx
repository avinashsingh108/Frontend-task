/* eslint-disable react/prop-types */
import {
    FaAlignLeft,
    FaAlignJustify,
    FaAlignRight,
    FaAlignCenter,
  } from "react-icons/fa";
  import { MdFormatBold, MdFormatUnderlined } from "react-icons/md";
  import { BsTypeItalic } from "react-icons/bs";
  
  const RightPanel = ({
    textBoxes,
    selectedBoxIndex,
    addTextBox,
    updateTextBox,
  }) => {
    return (
      <div className="w-80 p-8 bg-white border-l font-montserrat rounded-xl">
        <div className="pb-4 border-b-2 flex justify-center">
          <button
            className="bg-black text-white px-10 py-2 rounded font-semibold "
            onClick={addTextBox}
          >
            Add Text
          </button>
        </div>
  
        {selectedBoxIndex !== null && (
          <div className="space-y-4 ">
            <div className="py-4 border-b-2 border-gray-100 border-opacity-70">
              <label className="font-semibold mb-2">Enter Text</label>
              <input
                className="w-full mt-1 p-2 rounded-md font-medium bg-gray-100 text-sm"
                value={textBoxes[selectedBoxIndex].text}
                onChange={(e) =>
                  updateTextBox(selectedBoxIndex, "text", e.target.value)
                }
              />
            </div>
  
            {/*Position Inputs */}
            <div className="pb-4 border-b-2 border-gray-100 border-opacity-70">
              <label className="font-semibold mb-2">Position</label>
              <div className="flex flex-col gap-y-2">
                <div className="flex gap-x-12 justify-center items-center">
                  <div className="flex items-center ">
                    <label className="font-medium w-8">X</label>
                    <input
                      type="number"
                      className="w-full mt-1 px-2 py-1 bg-gray-100 text-center rounded-md font-medium"
                      value={textBoxes[selectedBoxIndex].x}
                      onChange={(e) =>
                        updateTextBox(
                          selectedBoxIndex,
                          "x",
                          parseInt(e.target.value)
                        )
                      }
                    />
                  </div>
                  <div className="flex items-center gap-x-2">
                    <label className="font-medium w-8">Y</label>
                    <input
                      type="number"
                      className="w-full mt-1 px-2 py-1 bg-gray-100 text-center rounded-md font-medium"
                      value={textBoxes[selectedBoxIndex].y}
                      onChange={(e) =>
                        updateTextBox(
                          selectedBoxIndex,
                          "y",
                          parseInt(e.target.value)
                        )
                      }
                    />
                  </div>
                </div>
                <div className="flex gap-x-12 justify-center items-center">
                  <div className="flex items-center ">
                    <label className="font-medium w-8">W</label>
                    <input
                      type="number"
                      className="w-full mt-1 px-2 py-1 bg-gray-100 text-center rounded-md font-medium"
                      value={textBoxes[selectedBoxIndex].width}
                      onChange={(e) =>
                        updateTextBox(
                          selectedBoxIndex,
                          "width",
                          parseInt(e.target.value)
                        )
                      }
                    />
                  </div>
  
                  <div className="flex items-center gap-x-2">
                    <label className="font-medium w-8">H</label>
                    <input
                      type="number"
                      className="w-full mt-1 px-2 py-1 bg-gray-100 text-center rounded-md font-medium"
                      value={textBoxes[selectedBoxIndex].height}
                      onChange={(e) =>
                        updateTextBox(
                          selectedBoxIndex,
                          "height",
                          parseInt(e.target.value)
                        )
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
  
            <div className="pb-4 border-b-2 border-gray-100 border-opacity-70">
              <label className="font-semibold">Text</label>
              <div className="flex gap-x-6 mb-4">
                <select
                  className="w-9/12 mt-1 px-2 py-1 bg-gray-100 rounded-md font-medium"
                  value={textBoxes[selectedBoxIndex].fontFamily}
                  onChange={(e) =>
                    updateTextBox(selectedBoxIndex, "fontFamily", e.target.value)
                  }
                >
                  <option value="Arial">Arial</option>
                  <option value="Verdana">Verdana</option>
                  <option value="Times New Roman">Times New Roman</option>
                  <option value="Courier New">Courier New</option>
                </select>
  
                <input
                  type="number"
                  className="w-3/12 mt-1 px-2 py-1 bg-gray-100 rounded-md font-medium"
                  value={textBoxes[selectedBoxIndex].fontSize}
                  onChange={(e) =>
                    updateTextBox(
                      selectedBoxIndex,
                      "fontSize",
                      parseInt(e.target.value)
                    )
                  }
                />
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <div className="flex space-x-1 bg-gray-100 text-xs p-1 rounded-md w-fit">
                    <button
                      className={`p-2 border rounded ${
                        textBoxes[selectedBoxIndex].textAlign === "left"
                          ? "bg-blue-500 text-white"
                          : "bg-white text-black"
                      }`}
                      onClick={() =>
                        updateTextBox(selectedBoxIndex, "textAlign", "left")
                      }
                    >
                      <FaAlignLeft />
                    </button>
  
                    <button
                      className={`p-2 border rounded ${
                        textBoxes[selectedBoxIndex].textAlign === "center"
                          ? "bg-blue-500 text-white"
                          : "bg-white text-black"
                      }`}
                      onClick={() =>
                        updateTextBox(selectedBoxIndex, "textAlign", "center")
                      }
                    >
                      <FaAlignCenter />
                    </button>
  
                    <button
                      className={`p-2 border rounded ${
                        textBoxes[selectedBoxIndex].textAlign === "right"
                          ? "bg-blue-500 text-white"
                          : "bg-white text-black"
                      }`}
                      onClick={() =>
                        updateTextBox(selectedBoxIndex, "textAlign", "right")
                      }
                    >
                      <FaAlignRight />
                    </button>
                    <button
                      className={`p-2 border rounded ${
                        textBoxes[selectedBoxIndex].textAlign === "justify"
                          ? "bg-blue-500 text-white"
                          : "bg-white text-black"
                      }`}
                      onClick={() =>
                        updateTextBox(selectedBoxIndex, "textAlign", "justify")
                      }
                    >
                      <FaAlignJustify />
                    </button>
                  </div>
                </div>
  
                <div>
                  <div className="flex space-x-1 bg-gray-100 text-xl p-1 rounded-md w-fit">
                    <button
                      className={`p-1 border rounded ${
                        textBoxes[selectedBoxIndex].bold
                          ? "bg-blue-500 text-white"
                          : "bg-white text-black"
                      }`}
                      onClick={() =>
                        updateTextBox(
                          selectedBoxIndex,
                          "bold",
                          !textBoxes[selectedBoxIndex].bold
                        )
                      }
                    >
                      <MdFormatBold />
                    </button>
  
                    {/* Italic Button */}
                    <button
                      className={`p-1 border rounded ${
                        textBoxes[selectedBoxIndex].italic
                          ? "bg-blue-500 text-white"
                          : "bg-white text-black"
                      }`}
                      onClick={() =>
                        updateTextBox(
                          selectedBoxIndex,
                          "italic",
                          !textBoxes[selectedBoxIndex].italic
                        )
                      }
                    >
                      <BsTypeItalic />
                    </button>
  
                    {/* Underline Button */}
                    <button
                      className={`p-1 border rounded ${
                        textBoxes[selectedBoxIndex].underline
                          ? "bg-blue-500 text-white"
                          : "bg-white text-black"
                      }`}
                      onClick={() =>
                        updateTextBox(
                          selectedBoxIndex,
                          "underline",
                          !textBoxes[selectedBoxIndex].underline
                        )
                      }
                    >
                      <MdFormatUnderlined />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Text and Background Color Inputs */}
            <div>
              <label className="font-semibold mb-2">Text Color:</label>
              <div className="flex items-center space-x-4 bg-gray-100 rounded-md px-2 py-1">
                <p className="flex-1 text-sm font-medium">
                  {textBoxes[selectedBoxIndex].color.toUpperCase()}
                </p>
                <input
                  type="color"
                  className="flex-1 rounded-md px-2 "
                  value={textBoxes[selectedBoxIndex].color}
                  onChange={(e) =>
                    updateTextBox(selectedBoxIndex, "color", e.target.value)
                  }
                />
              </div>
            </div>
  
            <div>
              <label className="font-semibold mb-2">Background Color:</label>
              <div className="flex items-center space-x-4 bg-gray-100 rounded-md px-2 py-1">
                <p className="flex-1 text-sm font-medium">
                  {textBoxes[selectedBoxIndex].backgroundColor.toUpperCase()}
                </p>
                <input
                  type="color"
                  className="flex-1 rounded-md px-2 "
                  value={textBoxes[selectedBoxIndex].backgroundColor}
                  onChange={(e) =>
                    updateTextBox(
                      selectedBoxIndex,
                      "backgroundColor",
                      e.target.value
                    )
                  }
                />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default RightPanel;
  