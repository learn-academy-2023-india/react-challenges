As a user, I can see a square box on the screen with a black border and a white background.
basic functional component, 
```js
import React from "react"

const App = () => {
  return (
    <>
      <h1>Color Application</h1>
      <div>Count</div>
    </>
  )
}

export default App
```
```css
.color-box {
  border: 2px solid black;
  height: 200px;
  width: 200px;
}
```
import App.css

As a user, I can see the default color name "white" inside the box.
As a user, every time I click on the box the name of a different color appears.
Possible color names: red, orange, yellow, green, blue, purple, pink
As a user, every time I click the box instead of the color name, I see the background color in the box change to represent the color.
 As a user, I can see many boxes on the page all acting independently of one another.