import React, {useState} from 'react';
import axios from 'axios';

export default function AppFunctional(props) {
  const [coord, setCoord] = useState({x: 2, y: 2})
  const [steps, setSteps]= useState(0);
  const [email, setEmail]= useState('');
  const [message, setMessage] = useState('')

  //movement
  function moveLeft(){
    if (coord.x > 1){
      stepCounter();
      setCoord({ ...coord, x: coord.x - 1});
      setMessage('');
    }
    else {
      setMessage("You can't go left")
    }
  }

  function moveRight(){
    if (coord.x < 3){
      stepCounter();
      setCoord({ ...coord, x: coord.x + 1});
      setMessage('');
    }
    else {
      setMessage("You can't go right")
    }
  }

  function moveUp (){
    if (coord.y > 1){
      stepCounter();
      setCoord({ ...coord, y: coord.y - 1});
      setMessage('');
    }
    else {
      setMessage("You can't go up")
    }
  }

  function moveDown (){
    if (coord.y < 3){
      stepCounter();
      setCoord({ ...coord, y: coord.y + 1});
      setMessage('');
    }
    else {
      setMessage("You can't go down")
    }
  }
  
  //steps
  function stepCounter(){ 
    setSteps(steps + 1 ) 
  }
 
  //reset x,y,steps
  function handleReset(){
    setCoord({x: 2, y: 2});
    setSteps('0');
    setEmail('');
    setMessage('');
  };

  //submit, message, email error, post
  const onSubmit = (e) =>{
    e.preventDefault();
    const payload = {x: coord.x , y: coord.y, steps, email};
    axios.post('http://localhost:9000/api/result', payload)
      .then(res => {
        setEmail('');
        setMessage(res.data.message);
      })
      .catch(err => {
        setMessage(err.response.data.message);
      })
  }

  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">{`Coordinates (${coord.x},${coord.y})`}</h3>
        <h3 id="steps">You moved {steps} times</h3>
      </div>
      <div id="grid">
        <div className={`${coord.x == 1 && coord.y == 1 ? "square active" : "square"}`} >{coord.x === 1 && coord.y === 1 ? "B" : ""}</div>
        <div className={`${coord.x == 2 && coord.y == 1 ? "square active" : "square"}`} >{coord.x === 2 && coord.y === 1 ? "B" : ""}</div>
        <div className={`${coord.x == 3 && coord.y == 1 ? "square active" : "square"}`} >{coord.x === 3 && coord.y === 1 ? "B" : ""}</div>
        <div className={`${coord.x == 1 && coord.y == 2 ? "square active" : "square"}`} >{coord.x === 1 && coord.y === 2 ? "B" : ""}</div>
        <div className={`${coord.x == 2 && coord.y == 2 ? "square active" : "square"}`} >{coord.x === 2 && coord.y === 2 ? "B" : ""}</div>
        <div className={`${coord.x == 3 && coord.y == 2 ? "square active" : "square"}`} >{coord.x === 3 && coord.y === 2 ? "B" : ""}</div>
        <div className={`${coord.x == 1 && coord.y == 3 ? "square active" : "square"}`} >{coord.x === 1 && coord.y === 3 ? "B" : ""}</div>
        <div className={`${coord.x == 2 && coord.y == 3 ? "square active" : "square"}`} >{coord.x === 2 && coord.y === 3 ? "B" : ""}</div>
        <div className={`${coord.x == 3 && coord.y == 3 ? "square active" : "square"}`} >{coord.x === 3 && coord.y === 3 ? "B" : ""}</div>
      </div>
      <div className="info">
        <h3 id="message">{message}</h3>
      </div>
      <div id="keypad">
        <button id="left"  onClick={moveLeft}>LEFT</button>
        <button id="up"    onClick={moveUp}>UP</button>
        <button id="right" onClick={moveRight}>RIGHT</button>
        <button id="down"  onClick={moveDown}>DOWN</button>
        <button id="reset" onClick={handleReset}>reset</button>
      </div>
      <form onSubmit={onSubmit}>
        <input id="email" type="email" placeholder="type email" value={email} onChange={e => setEmail(e.target.value)}></input>
        <input id="submit" type="submit"></input>
      </form>
    </div>
  )
}
