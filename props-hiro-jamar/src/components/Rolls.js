import React from "react";

const Rolls = ({ rollResult }) => {
  return (
    <div>
      <h2>Logs How many rolls</h2>
      <div className="result">
        {rollResult !== null && <p>Roll: {rollResult}</p>}
      </div>
    </div>
  );
};

export default Rolls;