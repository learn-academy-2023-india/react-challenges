import React, { useState } from "react";
import Dice from "./components/Dice";
import MediaPlayer from "./components/MediaPlayer";
import "./App.css";

const App = () => {
  const dicegame = [
    "https://raw.githubusercontent.com/learn-academy-2023-india/syllabus/main/react/assets/1-dice.png",
    "https://raw.githubusercontent.com/learn-academy-2023-india/syllabus/main/react/assets/2-dice.png",
    // Add more dice images as needed
  ];

  const [currentDice, setCurrentDice] = useState(dicegame[0]);

  const handleNextDice = () => {
    const nextIndex = dicegame.indexOf(currentDice) + 1;
    setCurrentDice(dicegame[nextIndex % dicegame.length]);
  };

  const handleCardClick = () => {
    // Cycle to the next dice image
    const nextIndex = dicegame.indexOf(currentDice) + 1;
    setCurrentDice(dicegame[nextIndex % dicegame.length]);
  };

  return (
    <>
      <h1>Our Work Example</h1>
      <MediaPlayer currentDice={currentDice} handleNextDice={handleNextDice} />
      <div className="cards">
        <Dice title={currentDice} onClick={handleCardClick} />
      </div>
    </>
  );
};

export default App;
