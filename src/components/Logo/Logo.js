import React from "react";
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brain from './brain.png'

const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt className="Tilt br2 shadow-2">
        <div>
          <img className="pa3" alt="brain logo" src={brain} />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
