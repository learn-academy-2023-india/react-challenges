// ⭐️ Challenge: Favorites
// As a developer, you are tasked with creating an application to share your favorite things. Decide which favorite things you would like to showcase. When creating a project, it is important to think about organization of your code. It is best practice to separate and compartmentalize all the actions in your code into individual components.

// 📚 User Stories
// As a user, I can see a Header component with the title of your app.
// As a user, I can see a Profile component with information about you and your partner.
// As a user, I can see a Footer component with the name of your cohort.
// As a user, I can see a Favorite component with a list of top five favorites (i.e. top five favorite TV shows, top five favorite songs, top five favorite taco shops).
// 🏔 Stretch Goals
// As a user, I can see a browser tab with a customized name and favicon.

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
