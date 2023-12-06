import React, {useState} from "react";

const ColorBox = () => {
    const colorChoice = ['white','red', 'orange', 'yellow', 'green', 'blue', 'indigo','purple', 'pink','brown','black'];
    const [currentColorIndex, setCurrentColorIndex] = useState(0);
    const changeColor = () => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colorChoice.length);
    };
    const removeBox = () => {
    };
    return (
      <div
        style={{
          width: '200px',
          height: '200px',
          border: '2px solid black',
          backgroundColor: colorChoice[currentColorIndex],
          display: 'inline-block',
          margin: '5px',
          textAlign: 'center',
          lineHeight: '100px',
          cursor: 'pointer',
        }}
        onClick={changeColor}
      >
        {colorChoice[currentColorIndex]}
      </div>
    );
  };

  export default ColorBox
