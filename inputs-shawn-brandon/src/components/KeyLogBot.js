import React, { useEffect, useState } from "react";

const KeyLogBot = ({ userInput, userInputHistory, setUserInputHistory, enterPressed }) => {
  const [rickRollTriggered, setRickRollTriggered] = useState(false);

  useEffect(() => {
    if (!rickRollTriggered) {
      if (userInputHistory.some((input) => input.toLowerCase().includes("rick"))) {
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
        setRickRollTriggered(true);
      }
    }
  }, [userInputHistory, rickRollTriggered]);

  return (
    <>
      <h2>
        <p>
          <b>
            <u><center>Rick Bot</center></u>
          </b>
        </p>
      </h2>
      <div style={{ marginLeft: "20px" }}>
        
          <>
            <p><center>I hear you saying {userInput}, like the DOM, I'm always watching you</center></p>
            {/* Display history */}
            <div>
            <center>╭━─━─━─━─━─━─━─━─━─≪✠≫━─━─━─━─━─━──━─━─━╮
                    ╰━─━─━─━─━─━─━─━─━─≪✠≫━─━─━─━─━─━──━─━─━╯</center>
              <h3>History:</h3>
              <ul>
                {userInputHistory.map((input, index) => (
                  <li key={index}>{input}</li>
                ))}
              </ul>
            </div>
          </>
        
      </div>
    </>
  );
};

export default KeyLogBot;