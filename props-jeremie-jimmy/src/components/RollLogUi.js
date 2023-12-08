import React from "react"
import dice1Image from "./1-6 Dice/1-dice.png"
import dice2Image from "./1-6 Dice/2-dice.png"
import dice3Image from "./1-6 Dice/3-dice.png"
import dice4Image from "./1-6 Dice/4-dice.png"
import dice5Image from "./1-6 Dice/5-dice.png"
import dice6Image from "./1-6 Dice/6-dice.png"

const RollLogUi = (props) => {
    const diceImages = [dice1Image, dice2Image, dice3Image, dice4Image, dice5Image, dice6Image]
    const diceIndex = props - 1
    return (
        <>
        <img src={diceImages[diceIndex]} alt={props.name}/>
        </>
    )
}

export default RollLogUi