import React, { useState } from 'react'
import './App.css';
import './index.css'

export default function App() {

  // const switchCircle = [switchCircle, setSwitchCircle] = setState('-5px');

  let num = .01;
  
  const renderSwitchCircle = () => {
    num = num + .01;
  //  return setSwitchCircle(num + 'px')
  }

  return (
    <div className="container font-face-in" id="drum-machine">
      <div id="display">
        <div className='row-1'>
          <button className='drum-pad' id='q'>Q</button>
          <button className='drum-pad' id='w'>W</button>
          <button className='drum-pad' id='e'>E</button>
        </div>
        <div className='row-2'>
          <button className='drum-pad' id='a'>A</button>
          <button className='drum-pad' id='s'>S</button>
          <button className='drum-pad' id='d'>D</button>
        </div>
        <div className='row-3'>
          <button className='drum-pad' id='z'>Z</button>
          <button className='drum-pad' id='x'>X</button>
          <button className='drum-pad' id='c'>C</button>
        </div>
        <button id="switch">
          <div id="switch-circle"></div>
        </button>
      </div>
    </div>
  );
}
