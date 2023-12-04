import React from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Favorite from "./components/Favorite"
import Profile from "./components/Profile"

const App = () => {
  return (
    <>
      <Header />
      <Profile />
      <Favorite />
      <Footer />
    </>
  )
}

export default App
