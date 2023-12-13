// Badrobot.js
import React from "react";

const Badrobot = (props) => {
  const roboLang = (string) => {
    return string.split("").map((value, index) => {
      if (index % 3 === 0) {
        return "B" 
      } 
      else if (index % 3 === 1){
        return "L" 
      } 
      else {
        return "A"
      }
    }).join("");
  };

  return (
    <>
      <h1>Badrobot</h1>
      <p>I hear you saying {roboLang(props.userInput)}. Is that correct?</p>
    </>
  );
};

export default Badrobot;
