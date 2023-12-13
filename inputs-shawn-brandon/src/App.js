import React, { useState } from "react";
import GoodRobot from "./components/GoodRobot";
import BadRobot from "./components/BadRobot";
import KeyLogBot from "./components/KeyLogBot";
import Title from "./components/Title"

const App = () => {
  const [userInput, setUserInput] = useState("");
  const [userInputHistory, setUserInputHistory] = useState([]);

  const handleInput = (event) => {
    setUserInput(event.target.value);
  };

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      setUserInput((prevInput) => {
        setUserInputHistory([...userInputHistory, prevInput]);
        return ""; // Clear the input field
      });
    }
  };
  return (
    <>
      <center><Title /></center>
      <p />
      <h3><center>Say something</center></h3>
      <center><input
        type="text"
        value={userInput}
        onChange={handleInput}
        onKeyPress={handleEnter}
      /></center>
      <center>
      <GoodRobot userInput={userInput}  />
      <BadRobot userInput={userInput}  />
      </center>
      <KeyLogBot
        userInput={userInput}
        userInputHistory={userInputHistory}
        setUserInputHistory={setUserInputHistory}
      />
    </>
  );
};

export default App;