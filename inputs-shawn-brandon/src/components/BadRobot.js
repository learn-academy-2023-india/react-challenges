import React from "react"

const BadRobot = (props) => {
    const generateBlah = (length) => {
      return "BLAH ".repeat(Math.ceil(length / 4)).substring(0, length);
    };
  
    return (
      <>
        <h2>
          <p>
            <b>
              <u>Bad Robot</u>
            </b>
          </p>
        </h2>
        <div style={{ marginLeft: "20px" }}>
          <p>I hear you saying {generateBlah(props.userInput.length)}. Is this corrct?</p>
        </div>
      </>
    );
  };
  
  export default BadRobot;