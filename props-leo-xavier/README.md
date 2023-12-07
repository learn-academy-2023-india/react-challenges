🎲 Challenge: Dice Roller
As a developer, you are tasked with creating a dice application. The application will allow the user to role a standard six-sided dice and see the result of each roll. As the user rolls the dice, each roll gets logged which creates a list of all the previous rolls.

When creating a project it is important to think about organization of your code. It is best practice to separate and compartmentalize all the actions in your code. The dice UI will be in its own component as will the roll log UI. App.js controls of all the data in state, renders the other components, and passes data to the dice and roll component.

Components that you need. Need dice, roll log.
App.js: all state variables, component calls, passing props. 


User Stories
As a user, I can see a square box on the screen with a black border and a white background.
Plan is to add the applicable CSS declarations and import CSS file to App.js; apply to className in App.css. 

As a user, I can click on the box to roll the dice and see the result of my roll in the box.
As a user, I can see my roll logged and see the roll log continue to grow as I roll the dice.

🏔 Stretch Goals
As a user, I can see the image of a dice face when I roll the dice.
As a user, I can click a restart button that clears my roll log.

<!-- Basic functional component -->
```js
// Imports
import React from "react"
import Dice from "./components/Dice"

// Functional component declaration
const App = () => {
  // Variables and functions
  // Return = What you'll see on user interface
  return (
    // JSX = Have to use {} to reference anything outside of return
    <>
      <h1>Greeter Application</h1>
      <Dice />
    </>
  )
}

export default App
```