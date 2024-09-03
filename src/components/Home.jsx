import React, { useState, useRef, useCallback } from 'react';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

const Home = () => {
  const [textBoxes, setTextBoxes] = useState([]);
  const [selectedBoxIndex, setSelectedBoxIndex] = useState(null);
  const videoRef = useRef(null);

  const addTextBox = useCallback(() => {
    if (videoRef.current && videoRef.current.readyState >= 2) {
      const videoRect = videoRef.current.getBoundingClientRect();
      const newTextBox = {
        x: Math.floor(videoRect.width / 2.5),
        y: Math.floor(videoRect.height / 1.2),
        width: 150,
        height: 30,
        fontSize: 16,
        fontFamily: 'Arial',
        color: '#000000',
        backgroundColor: '#ffffff',
        textAlign: 'left',
        bold: false,
        italic: false,
        underline: false,
        text: 'Sample Text',
      };
      setTextBoxes([...textBoxes, newTextBox]);
      setSelectedBoxIndex(textBoxes.length); 
    }
  }, [textBoxes]);

  const updateTextBox = useCallback((index, key, value) => {
    const updatedTextBoxes = [...textBoxes];
    updatedTextBoxes[index] = {
      ...updatedTextBoxes[index],
      [key]: value,
    };
    setTextBoxes(updatedTextBoxes);
  }, [textBoxes]);

  const deleteTextBox = useCallback((index) => {
    const updatedTextBoxes = textBoxes.filter((_, i) => i !== index);
    setTextBoxes(updatedTextBoxes);
    setSelectedBoxIndex(null);
  }, [textBoxes]);

  return (
    <div className="flex flex-col gap-6 lg:flex-row h-screen p-10 bg-gray-200">
      <LeftPanel
        textBoxes={textBoxes}
        setSelectedBoxIndex={setSelectedBoxIndex}
        deleteTextBox={deleteTextBox}
        videoRef={videoRef}
      />
      <RightPanel
        textBoxes={textBoxes}
        selectedBoxIndex={selectedBoxIndex}
        addTextBox={addTextBox}
        updateTextBox={updateTextBox}
      />
    </div>
  );
};

export default Home;
