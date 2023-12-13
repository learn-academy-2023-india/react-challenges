import React, { useState } from 'react'
import UpperCased from './component/UpperCased'
import UpperCasedTwo from './component/UpperCasedTwo'
import UpperCasedThree from './component/UpperCasedThree'

const App = () => {
  const [name, setName] = useState("")

  const handleChange = (e) => {
    setName(e.target.value)
  }

  return (
    <>
      <h1>Robo Active Listening</h1>
      <input
        type="text"
        onChange={handleChange}
        value={name}
      />

      <UpperCased name={name} />
      <UpperCasedTwo name={name} />
      <UpperCasedThree name={name} />
    </>
  )
}

export default App


















//import React, { useState } from 'react'
//import UpperCased from './component/UpperCased'
//import UpperCasedTwo from './component/UpperCasedTwo'
//import UpperCasedThree from './component/UpperCasedThree'

//const App = () => {
  //const [name, setName] = useState ("")

  //const handleChange = (e) => {

    //setName(e.target.value)

  //}
  //return (
    //<>
      //<h1>Robo Active Listening</h1>
      //<input type = "text" 
      //onChange = {handleChange}
      //value = {name}
    //>
    
    //<UpperCased name = {name} />
    //<UpperCasedTwo name = {name} />
    //<UpperCasedThree name = {name} />
    //</>
  //)
//}

//export default App




//import React, { useState } from 'react';
//import './App.css';



//const Robot = ({ name, modifier }) => {
  //const [input, setInput] = useState('');

  //const handleInputChange = (event) => {
    //const userInput = event.target.value;
    //const modifiedInput = modifier(userInput);
    //setInput(modifiedInput);
  //};

  //const generateResponse = () => {
    //switch (name) {
      //case 'Good Robot':
        //return `I hear you saying ${input}. Is that correct?`;
      //case 'Bad Robot':
        //return `I hear you saying ${input}. Is that correct?`;
      //case 'Kanyebot 5000':
        //return `I'm gonna let you finish but Beyonce is ${input}.`;
      //default:
        //return '';
    //}
  //};

  //return (
    //<div>
      //<h2>{name} Robot</h2>
      //<textarea
      //input type= "text" 
        //placeholder={`Type something for ${name}...`}
        //value={input}
        //onChange={handleInputChange}
      ///>
      //<p>{generateResponse()}</p>
    //</div>
  //);
//};

//const App = () => {
  //const commonModifier = (text) => text; // No modification for common input

  //return (
    //<div className="App">
      //<Robot name="Good" modifier={commonModifier} />
      //<Robot name="Bad" modifier={commonModifier} />
      //<Robot name="Kanyebot 5000" modifier={commonModifier} />
    //</div>
  //);
//};

//export default App;

