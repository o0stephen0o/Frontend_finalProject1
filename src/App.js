import React, { useState, useEffect } from 'react';
import './bgimages.css';
import './logo.css';
import './font.css';
import './font/D-DIN.otf';
import './mainpg.css';
import './astronaut.css';
import './learnbutton.css';
import './images/fog01.jpg';
import './images/heroshot2_mars.jpg';
import './navbar.css';


import logoImage from './images/Logo-removebg.png';
import astronautImage from './images/astronaut.png';


function App() {
  const [showBg, setShowBg] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBg(false);
    }, 7000);
    return () => clearTimeout(timer);
  }, []);


  return (
    <div>
      <div className="mainpage"> 
      <img src={astronautImage} alt="astronaut" className="astronaut-image" />
      <button className="learnbutton" font-family="D-DIN">Learn More</button>
      </div>

      <div className="App">
      {showBg && <div className="background-image" /> }
      {showBg && <img src={logoImage} alt="logo" className="logo" />}
      </div>
   <div>testing-3</div>
    </div>
  );
}

export default App;