//App.js
import './App.css';
import Goodrobot from './components/Goodrobot';
import Badrobot from './components/Badrobot';
import React, { useState } from 'react';
import RSinsultBot1337 from './components/RSinsultBot1337';
import Kanyebot5000 from './components/Kanyebot5000';

const App = () => {
  const youtubeVideoId = "your-youtube-video-id"
  const [userInput, setUserInput] = useState ("")
  
  const handleInput = (event) => {
    setUserInput (event.target.value)
  }
    return (
  <div>
  
  <div className='App'>
  <h1> 
Listening Robot
  </h1>
 
  <div className='paragraph'>
  <p>
    Meatbag Text goes here
  </p>
  </div>
  <input type= "text" onChange= {handleInput} />
<Goodrobot userInput = {userInput} />
<Badrobot userInput = {userInput} />
<RSinsultBot1337 userInput = {userInput} />
<Kanyebot5000 videoId= {youtubeVideoId} userInput = {userInput} />
</div>  
  </div>
  );
}

export default App;
