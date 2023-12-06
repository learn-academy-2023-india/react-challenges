import React, {useState} from "react";
import ColorBox from "./ColorBox";

const Box = () => {
    const [boxes, setBoxes] = useState([]);
    const addBox = () => {
      setBoxes((prevBoxes) => [...prevBoxes, <ColorBox key={prevBoxes.length} />]);
    };
    const removeBox = () => {
      if (boxes.length > 0) {
        const updatedBoxes = [...boxes];
        updatedBoxes.pop();
        setBoxes(updatedBoxes);
      }
    };
    return (
      <div>
        <button onClick={addBox}>Add Box</button>
        <button onClick={removeBox}>Remove Box</button>
        {boxes.map((box, index) => (
          <React.Fragment key={index}>{box}</React.Fragment>
        ))}
      </div>
    );
};

export default Box