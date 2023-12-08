import React, { useState } from 'react';
// Import the CSS file

const RollLog = ({ rolls }) => {
  return (
    <div>
      <h2>Roll Log</h2>
      <ul>
        {rolls.map((roll, index) => (
          <li key={index}>{`Roll ${{}}]}: ${roll}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default RollLog;