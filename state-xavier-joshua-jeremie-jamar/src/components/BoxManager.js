import React, { useState } from 'react';

const colors = ['white', 'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];

const Box = ({ color, onClick }) => {
  return (
    <div
      className="box"
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {color}
    </div>
  );
};

const BoxManager = () => {
  const [boxes, setBoxes] = useState([]);

  const addBox = () => {
    setBoxes([...boxes, 'white']);
  };

  const removeBox = () => {
    if (boxes.length > 0) {
      setBoxes(boxes.slice(0, -1));
    }
  };

  const changeColor = (index) => {
    const updatedBoxes = [...boxes];
    const currentIndex = colors.indexOf(updatedBoxes[index]);
    const nextIndex = (currentIndex + 1) % colors.length;
    updatedBoxes[index] = colors[nextIndex];
    setBoxes(updatedBoxes);
  };

  return (
    <div>
      <button onClick={addBox}>Add Box</button>
      <button onClick={removeBox}>Remove Box</button>
      <div className="box-container">
        {boxes.map((color, index) => (
          <Box key={index} color={color} onClick={() => changeColor(index)} />
        ))}
      </div>
    </div>
  );
};

export default BoxManager;