import React, { useState } from "react";
import Rolls from "./Rolls";

const Dice = () => {
  const [rollResult, setRollResult] = useState(null);

  const rollHandle = () => {
    const newResult = Math.floor(Math.random() * 6) + 1;
    setRollResult(newResult);
  };

  return (
    <>
      <div className="box" onClick={rollHandle}>
        Click Box To Roll
        {rollResult !== null ? (
          <button className="click">{rollResult}</button>
        ) : (
          <p>Click</p>
        )}
      </div>
      <Rolls rollResult={rollResult} />
    </>
  );
};

export default Dice;