import React, { useState } from 'react';
import './Components/App.css'; // Import the CSS file

const DiceBox = ({ rollDice, restartGame }) => {
  return (
    <div>
      <div id="dice-box" onClick={rollDice}>
        <img id="dice-face" src={`dice${{rollDice}}.png`} alt="Dice Face" />
      </div>
      <button id="restart-button" onClick={restartGame}>Restart</button>
    </div>
  );
};

export default DiceBox;