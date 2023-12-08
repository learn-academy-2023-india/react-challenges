import React from "react"

const Reset = () => {
    const resetBut = () => {
      window.location.reload();
    }
  
    return (
      <button onClick={resetBut}>
        Refresh
      </button>
    )
  }







export default Reset