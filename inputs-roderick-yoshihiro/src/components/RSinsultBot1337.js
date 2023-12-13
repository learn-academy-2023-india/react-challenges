// components/RSinsultBot1337
import React from "react";

const RSinsultBot1337 = (props) => {

  const runeLang = (string) => {
    return string.split("").map((value, index) => {
      if (index % 3 === 0) {
        return "N" 
      } 
      else if (index % 3 === 1){
        return "OO" 
      } 
      else if (index % 3 === 2){
        return "B" 
      } 
     
    }).join("");
  }
    return (
        <>
        <h1>
           Runescape Insultbot
        </h1>
        <p>
            Kekw Bur Lel get pwned {runeLang(props.userInput)}
        </p>
        </>
    )
}

export default RSinsultBot1337