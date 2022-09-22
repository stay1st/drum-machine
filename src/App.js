import React, { useState, useEffect } from 'react';
import './styles/App.css';
import './styles/index.css';


// Initialize the Amazon Cognito credentials provider

export default function App() {

  const [displayName, setDisplayName] = useState('Developer: Joshua Crawford');

  function handleKeyDown(e) {
        if (e.key == 'q') {
          let audio = document.getElementById('Q');
          audio.currentTime = 0;
          audio.play();
          setTimeout(() => handleKeyDown, 100);
          setDisplayName('Heater-1');
        } else if (e.key === 'w') {
          let audio = document.getElementById('W');
          audio.currentTime = 0;
          audio.play();
          setTimeout(() => handleKeyDown, 100);
          setDisplayName('Heater-2');
        } else if (e.key === 'e') {
          let audio = document.getElementById('E');
          audio.currentTime = 0;
          audio.play();
          setTimeout(() => handleKeyDown, 100);
          setDisplayName('Heater-3');
        } else if (e.key === 'a') {
          let audio = document.getElementById('A');
          audio.currentTime = 0;
          audio.play();
          setTimeout(() => handleKeyDown, 100);
          setDisplayName('Heater-4');
        } else if (e.key === 's') {
          let audio = document.getElementById('S');
          audio.currentTime = 0;
          audio.play();
          setTimeout(() => handleKeyDown, 100);
          setDisplayName('Heater-6');
        } else if (e.key === 'd') {
          let audio = document.getElementById('D');
          audio.currentTime = 0;
          audio.play();
          setTimeout(() => handleKeyDown, 100);
          setDisplayName('Disco-1');
        } else if (e.key === 'z') {
          let audio = document.getElementById('Z');
          audio.currentTime = 0;
          audio.play();
          setTimeout(() => handleKeyDown, 100);
          setDisplayName('Disco-2');
        } else if (e.key === 'x') {
          let audio = document.getElementById('X');
          audio.currentTime = 0;
          audio.play();
          setTimeout(() => handleKeyDown, 100);
          setDisplayName('Kicker-1');
        } else if (e.key === 'c') {
          let audio = document.getElementById('C');
          audio.currentTime = 0;
          audio.play();
          setTimeout(() => handleKeyDown, 100);
          setDisplayName('High-Hat');
        } else {
          clearTimeout();
        }
      };

    useEffect(() => {
      document.addEventListener("click", e => {
        let tar = e.target
        if (tar.name === "toggle")
          tar.removeAttribute("className")
      })
      return () => {
        document.removeEventListener("click", e => {
        let tar = e.target
        if (tar.name === "toggle")
          tar.removeAttribute("className")
      })}
    }, []);

    useEffect(() => {
      document.addEventListener('keydown', handleKeyDown)
      return () => {
        document.removeEventListener('keydown', handleKeyDown)
      }
    }, []);


    return (
      <div className="container font-face-in" id="drum-machine">
        <div className='headers'>
          <h1 className="font-face-inBlack">DRUM MACHINE</h1>
          <div id='instructions'>
            <h2>Welcome to my beat generator. Happy to see you here! Use the switch to turn on the beat machine. Then, press a button.</h2>
          </div>
        </div>
        <div id="display">
          {/* for later date, after backend learning } <input className='file' type="file" ref={ref} onChange={handleFileLoad} /> */}
          <div className='row-1'>
            <div className='screen-text'>
              <h3 id='display-text' className='sampleList'>{displayName}</h3>
            </div>
            <button className='drum-pad' id="Heater-1" type="button" onClick={
              () => {
                let audio = document.getElementById('Q');
                audio.currentTime = 0
                audio.play()
                setTimeout(() => 100)
                setDisplayName('Heater-1');
              }} onKeyDown={handleKeyDown}>Q
              <audio className="clip" type="audio" id="Q" src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'></audio>
            </button>
            <button className='drum-pad' id="Heater-2" type="button" onClick={
              () => {
                let audio = document.getElementById('W');
                audio.currentTime = 0
                audio.play()
                setTimeout(() => 100)
                setDisplayName('Heater-2')
              }} onKeyDown={handleKeyDown}>W
              <audio className="clip" type="audio" id="W" src='https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' />
            </button>
            <button className='drum-pad' id="Heater-3" type="button" onClick={
              () => {
                let audio = document.getElementById('E');
                audio.currentTime = 0
                audio.play()
                setTimeout(() => 100)
                setDisplayName('Heater-3')
              }} onKeyDown={handleKeyDown}>E
              <audio className="clip" type="audio" id="E" src='https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' />
            </button>
          </div>
          <div className='row-2'>
            <button className='drum-pad' id="Heater-4" type="button" onClick={
              () => {
                let audio = document.getElementById('A');
                audio.currentTime = 0
                audio.play()
                setTimeout(() => 100)
                setDisplayName('Heater-4')
              }} onKeyDown={handleKeyDown}>A
              <audio className="clip" id="A" type="audio" src='https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' />
            </button>
            <button className='drum-pad' id="Heater-6" type="button" onClick={
              () => {
                let audio = document.getElementById('S');
                audio.currentTime = 0
                audio.play()
                setTimeout(() => 100)
                setDisplayName('Heater-6')
              }} onKeyDown={handleKeyDown}>S
              <audio className="clip" id="S" type="audio" src='https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' />
            </button>
            <button className='drum-pad' id="Disco-1" type="button" onClick={
              () => {
                let audio = document.getElementById('D');
                audio.currentTime = 0
                audio.play()
                setTimeout(() => 100)
                setDisplayName('Disco-1')
              }} onKeyDown={handleKeyDown}>D
              <audio className="clip" id="D" type="audio" src='https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' />
            </button>
          </div>
          <div className='row-3'>
            <button className='drum-pad' id="Disco-2" type="button" onClick={
              () => {
                let audio = document.getElementById('Z');
                audio.currentTime = 0
                audio.play()
                setTimeout(() => 100)
                setDisplayName('Disco-2')
              }} onKeyDown={handleKeyDown}>Z
              <audio className="clip" id="Z" type="audio" src='https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' />
            </button>
            <button className='drum-pad' id="Kicker-1" type="button" onClick={
              () => {
                let audio = document.getElementById('X');
                audio.currentTime = 0
                audio.play()
                setTimeout(() => 100)
                setDisplayName('Kicker-1')
              }} onKeyDown={handleKeyDown}>X
              <audio className="clip" id="X" src='https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' />
            </button>
            <button className='drum-pad' id="High-Hat" type="button" onClick={
              () => {
                let audio = document.getElementById('C');
                audio.currentTime = 0
                audio.play()
                setTimeout(() => 100)
                setDisplayName('High-Hat')
              }} onKeyDown={handleKeyDown}>C
              <audio className="clip" id="C" src='https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' />
            </button>
            <div className="dials">
              <div type="dial" id="dial1" className='pristine' name="dial" value="on"><hr></hr></div>
              <div type="dial" id="dial2" className='pristine' name="dial" value="on"><hr></hr></div>
              <div type="dial" id="dial3" className='pristine' name="dial" value="on"><hr></hr></div>
            </div>
          </div>
          <div className="switch-circle-div" id="switch-circle-div">
            <input className="pristine" type="checkbox" name="toggle" value="on" />
          </div>
        </div>
      </div>
    )
  };