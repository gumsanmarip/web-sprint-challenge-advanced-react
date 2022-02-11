import React, {useState} from 'react'

export default function AppFunctional(props) {

  //coordinates
  // const [coord, setCoord] = useState(x,y);
  //step movement
  const [step, setStep] = useState(0);



  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">Coordinates (2, 2)</h3>
        <h3 id="steps">You moved {step} times</h3>
      </div>
      <div id="grid">
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square active">B</div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
      </div>
      <div className="info">
        <h3 id="message"></h3>
      </div>
      <div id="keypad">
        <button id="left" onClick={() => setStep(step + 1)}>LEFT</button>
        <button id="up" onClick={() => setStep(step + 1)}>UP</button>
        <button id="right" onClick={() => setStep(step + 1)}>RIGHT</button>
        <button id="down" onClick={() => setStep(step + 1)}>DOWN</button>
        <button id="reset">reset</button>
      </div>
      <form>
        <input id="email" type="email" placeholder="type email"></input>
        <input id="submit" type="submit"></input>
      </form>
    </div>
  )
}
