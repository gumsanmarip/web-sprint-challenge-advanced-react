import React, {useState} from 'react';
import axios from 'axios';

const initialState = {
  x: '2',
  y: '2',
  steps: 0,
  email: '',
};


export default function AppFunctional(props) {
  const [x, setX]= useState('2');
  const [y, setY]= useState('2');
  const [steps, setSteps]= useState(0);
  const [email, setEmail]= useState('');
  const [message, setMessage] = useState('')

  //position
  const posArray = [
    [0,0,0],
    [0,1,0],
    [0,0,0],
  ];

  console.log(posArray[1],[1]);

  //steps
  function stepCounter(){ 
    setSteps(steps + 1 ) 
  }
 
  //reset x,y,steps
  function handleReset(){
    
  };

  //submit, message, email error, post

  const handleSubmit = (e) =>{
    e.preventDefault();
    const payload = {x, y, steps, email};
    axios.post('http://localhost:9000/api/result', payload)
      .then(res => {
        const message = res.data.message;
        setMessage(message);
        handleReset();
      })
      .catch(err => {
        const errorFromAPI = err.response.data.message
        const message = errorFromAPI;
        setMessage(message);
      })
      console.log(setMessage.message);
  }


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
        <h3 id="message">{message}</h3>
      </div>
      <div id="keypad">
        <button id="left" >LEFT</button>
        <button id="up" onClick={stepCounter}>UP</button>
        <button id="right" onClick={stepCounter}>RIGHT</button>
        <button id="down" onClick={stepCounter}>DOWN</button>
        <button id="reset" onClick={handleReset}>reset</button>
      </div>
      <form onSubmit={handleSubmit}>
        <input id="email" type="email" placeholder="type email" value={email} onChange={e => setEmail(e.target.value)}></input>
        <input id="submit" type="submit"></input>
      </form>
    </div>
  )
}
