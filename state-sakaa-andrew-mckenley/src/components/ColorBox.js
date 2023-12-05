import React, {useState} from "react";

const ColorBox = () => {
    const colors = ['white','red', 'orange', 'yellow', 'green', 'blue', 'indigo','purple', 'pink'];
    const [currentColorIndex, setCurrentColorIndex] = useState(0);
    const changeColor = () => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    };
    const removeBox = () => {
    };
    return (
      <div
        style={{
          width: '200px',
          height: '200px',
          border: '2px solid black',
          backgroundColor: colors[currentColorIndex],
          display: 'inline-block',
          margin: '5px',
          textAlign: 'center',
          lineHeight: '100px',
          cursor: 'pointer',
        }}
        onClick={changeColor}
      >
        {colors[currentColorIndex]}
      </div>
    );
  };

  export default ColorBox