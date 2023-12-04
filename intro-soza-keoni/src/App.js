import logo from './logo.svg';
import './App.css';
import React from "react"
import Header from "./components/Header"
import Profile from "./components/Profile"
import Favorites from './components/Favorites'
import Footer from './components/Footer';


function App() {
  return (
    <>
    {/* className="App"> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <Header>
        </Header> 
        <Profile>
        </Profile> 
        <Favorites>
        </Favorites>
        <Footer>
        </Footer>

        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header>
    </>
  );
}
export default App;



// import React from "react"

// const App = () => {
//   return (
//     <>
//       <h1>Hello World!</h1>
//     </>
//   )
// }

// export default App