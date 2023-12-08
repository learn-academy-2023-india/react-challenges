import React from "react";

const Dice = (props) => {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <div className="card" onClick={handleClick}>
      <img src={props.title} alt="Dice" />
    </div>
  );
};

export default Dice;
