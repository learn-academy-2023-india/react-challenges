// App.js

import React, { useState } from "react";
import Counter from "./components/Counter";
import "./App.css";

const App = () => {
  const [boxes, setBoxes] = useState([]);

  const addBox = () => {
    const newBoxId = boxes.length + 1;
    setBoxes([...boxes, { id: newBoxId }]);
  };

  const removeLastBox = () => {
    if (boxes.length > 0) {
      const updatedBoxes = [...boxes];
      updatedBoxes.pop(); // Remove the last box
      setBoxes(updatedBoxes);
    }
  };

  return (
    <>
      <h1>Counter Application</h1>
      {boxes.map((box) => (
        <Counter key={box.id} />
      ))}
      <button onClick={addBox}>Add Box</button>
      <button onClick={removeLastBox}>Remove Last Box</button>
    </>
  );
};

export default App;