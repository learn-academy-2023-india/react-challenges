// Counter.js

import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);

  const colorNames = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];

  const handleClick = () => {
    setCount(count + 1);
    setColorIndex((colorIndex + 1) % colorNames.length);
  };

  const handleMouseOver = () => {
    setIsMouseOver(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };

  return (
    <div
      onClick={handleClick}
      className="counter-box"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      style={{
        position: "relative",
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
        backgroundColor: isMouseOver ? colorNames[colorIndex] : "transparent",
        color: "black", // Set the color of "Count #" text to black
      }}
    >
      {isMouseOver && (
        <div
          style={{
            position: "absolute",
            backgroundColor: "white",
            padding: "5px",
            border: "1px solid black",
            borderRadius: "5px",
            marginTop: "-30px",
            marginLeft: "90px", // Adjusted marginLeft to display the tooltip to the right
            zIndex: 2,
          }}
        >
          <p>Color: {isMouseOver ? colorNames[colorIndex] : "transparent"}</p>
        </div>
      )}
      <h3 style={{ zIndex: 1 }}>Count {count}</h3>
    </div>
  );
};

export default Counter;





