import React, {useState} from 'react'

const initialState = {
  x: '2',
  y: '2',
  steps: 0,
  email: '',
};


export default function AppFunctional(props) {
  // const [{x, y, steps, email}, setState] = useState(initialState);

  //form submit


  //position
  const posArray = [
    [0,0,0],
    [0,1,0],
    [0,0,0],
  ];

  console.log(posArray[1][1]);

  //steps
  const [steps, setStep] = useState(0);
 

  //reset x,y,steps
  // const handleReset = () => {
  //   setState({ ...initialState})

  // }

  const[values, setValues] = useForm(initialState);

  handleChanges = (e) => { 
    setValues({ ...values, [e.target.id]: e.target.value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {x: this.state.x, y: this.state.y, steps: this.state.steps, email: this.state.email};
    axios.post('http://localhost:9000/api/result', payload)
      .then(res => {
        this.setState({ ...this.state, message: res.data.message})
        this.handleReset();
      })
      .catch(err => {
        const errorFromAPI = err.response.data.message
        this.setState({ ...this.state, message: errorFromAPI });
      })
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
        <button id="up" onClick={() => setStep(steps + 1)}>UP</button>
        <button id="right" onClick={() => setStep(steps + 1)}>RIGHT</button>
        <button id="down" onClick={() => setStep(steps + 1)}>DOWN</button>
        <button id="reset" >reset</button>
      </div>
      <form onSubmit={handleSubmit}>
        <input id="email" type="email" placeholder="type email" value={values.email} onChange={handleChanges}></input>
        <input id="submit" type="submit"></input>
      </form>
    </div>
  )
}
