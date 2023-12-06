import React, {useState} from "react"
import Square from "./Square"


const Box = () => {
   const [boxes, setBoxes] = useState([]) 

    const addBox = () => {
    setBoxes([...boxes, boxes.lenght + 1]);
   };

    const removeBox = () => { 
        if (boxes.length > 0) {
            const newBoxes = [...boxes];
            newBoxes.pop();
            setBoxes(newBoxes);
        }
    };

    return (
        <>
        <div>
            <button onClick={addBox}>Add a Box</button>
            <button onClick={removeBox}>Remove a Box</button>
            {boxes.map((value, index) => {
                 return <Square key={index} />
            })}
            </div>
            </>
    );
        };
    

export default Box;