import React, { useState } from "react"

const Dice = () => {
    const [diceNum, setDiceNum] = useState(null); // Set initial state to null
    const getRandomDice = () => {
        const randomDiceNum = ['1', '2', '3', '4', '5', '6']
        const diceRoll = randomDiceNum[Math.floor(Math.random() * 6)];
        setDiceNum(diceRoll)
        return diceRoll;
    }

    const handleClick = () => {
        getRandomDice()
    }

    const getImageUrl = () => {
        if (diceNum) {
            return `https://github.com/learn-academy-2023-india/syllabus/blob/main/react/assets/${diceNum}-dice.png?raw=true`
        } 
        else
         {
        return 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Blank_Square.svg/1024px-Blank_Square.svg.png'
    }}

    return (
        <div className="dice" onClick={handleClick}>
            <img id="image" alt=" " width="200" height="200" src={getImageUrl()} />
        </div>
    )
}

export default Dice

// import React, { useState } from "react";

// const Dice = () => {
//     const [diceNum, setDiceNum] = useState(null);
//     const getRandomDice = () => {
//         const randomDiceNum = ['1', '2', '3', '4', '5', '6'];
//         const diceRoll = randomDiceNum[Math.floor(Math.random() * 6)];
//         let image = '';
//         switch (diceRoll) {
//             case '1': image = 'https://github.com/learn-academy-2023-india/syllabus/blob/main/react/assets/1-dice.png?raw=true'; break;
//             case '2': image = 'https://github.com/learn-academy-2023-india/syllabus/blob/main/react/assets/2-dice.png?raw=true'; break;
//             case '3': image = 'https://github.com/learn-academy-2023-india/syllabus/blob/main/react/assets/3-dice.png?raw=true'; break;
//             case '4': image = 'https://github.com/learn-academy-2023-india/syllabus/blob/main/react/assets/4-dice.png?raw=true'; break;
//             case '5': image = 'https://github.com/learn-academy-2023-india/syllabus/blob/main/react/assets/5-dice.png?raw=true'; break;
//             case '6': image = 'https://github.com/learn-academy-2023-india/syllabus/blob/main/react/assets/6-dice.png?raw=true'; break;
//             default: break;
//         }
//         document.getElementById('image').src = image;
//         return diceRoll;
//     };
//     const handleClick = () => {
//         const newNum = getRandomDice();
//         setDiceNum(newNum);
//     };
//     const getImageUrl = () => {
//         if (diceNum) {
//             return `https://github.com/learn-academy-2023-india/syllabus/blob/main/react/assets/${diceNum}-dice.png?raw=true`;
//         }
//         // Return a default image or placeholder if diceNum is null
//         return 'https://example.com/placeholder-image.png';
//     };
//     return (
//         <div className="dice" onClick={handleClick}>
//             <img id="image" alt=" " width="200" height="200" src="" />
//         </div>
//     );
// };
// export default Dice;