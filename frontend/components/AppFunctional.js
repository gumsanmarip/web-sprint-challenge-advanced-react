import React, {useState} from 'react'

const initialState = {
  x: '2',
  y: '2',
  steps: 0,
  email: '',
};
const URL = 'http://localhost:9000/api/result';

export default function AppFunctional(props) {
  // const [{x, y, steps, email}, setState] = useState(initialState);

  const handleChanges = (e) => {
    set
  }
  //position
  const posArray = [
    [0,0,0],
    [0,1,0],
    [0,0,0],
  ]
  posArray[1][1];

  //coordinates
  
  const [steps, setStep] = useState(0);

  //reset x,y,steps
  // const handleReset = () => {
  //   setState({ ...initialState})

  // }


  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">Coordinates (2, 2)</h3>
        <h3 id="steps">You moved {steps} times</h3>
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
        <button id="left" onClick={() => useStep(steps + 1)}>LEFT</button>
        <button id="up" onClick={() => setStep(steps + 1)}>UP</button>
        <button id="right" onClick={() => setStep(steps + 1)}>RIGHT</button>
        <button id="down" onClick={() => setStep(steps + 1)}>DOWN</button>
        <button id="reset" >reset</button>
      </div>
      <form>
        <input id="email" type="email" placeholder="type email"></input>
        <input id="submit" type="submit"></input>
      </form>
    </div>
  )
}
