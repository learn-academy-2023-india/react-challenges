import React, { useState } from 'react';
import './App.css';

function DiceRoll() {
    const [rolls, setRolls] = useState([]);

    const rollDice = () => {
        const newRoll = Math.floor(Math.random() * 6) + 1;
        setRolls([...rolls, newRoll]);
    };

    return (
        <div className="dice-roll-container">
            <button className="roll-button" onClick={rollDice}>Roll Dice</button>
            <div>
                {rolls.map((roll, index) => (
                    <div key={index}>
                        <p>Roll {index + 1}: {roll}</p>
                        <img src={`https://github.com/learn-academy-2023-india/syllabus/blob/main/react/assets/${roll}-dice.png?raw=true`} alt={`Dice roll ${roll}`} width="75px" display="inline-flex"/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DiceRoll;