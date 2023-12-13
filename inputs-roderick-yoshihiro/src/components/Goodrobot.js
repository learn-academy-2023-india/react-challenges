// components/Goodrobot.js
import React from "react";

const Goodrobot = (props) => {
    return (
        <>
        <h1>
            Goodrobot
        </h1>
        <p>
            I hear you saying {props.userInput}. Is that correct?
        </p>
        </>
    )
}

export default Goodrobot