import React from 'react';
import axios from 'axios';

const initialState = {
  x: '2',
  y: '2',
  steps: 0,
  email: '',
}
const URL = 'http://localhost:9000/api/result';

export default class AppClass extends React.Component {
  state = initialState;

  activeSquare = { x: 2, y: 2}
  

  componentDidMount(){
    this.state.x.y;
  }

  //coordinates 
  moveCoord = () => {
    this.set
  
    up.y--;
    down.y++;
    left.x--;
    right.x++;
 
  }

  //submit, email error, post URL
  onSubmit = e => {
    e.preventDefault();
    const payloadToSend = { email: this.state.email}
    axios.post(URL, payloadToSend)
      .then(res => {
        this.setState({ 
          ...this.state, 
          message: res.data.message })
      })
      .catch(err => {
        const errorFromAPI = err.response.data.message
        this.setState({ ...this.state, error: errorFromAPI })
      })

  }

  onError = err => {
    const errorFromAPI = err.response.data.message
    this.setState({ ...this.state, error: errorFromAPI })
  }

  //reset x, y, steps-
  handleReset = () => {
    this.setState({ ...initialState});
  }
  //steps-
  stepCounter = () => { 
    this.setState({ steps: this.state.steps + 1 })
  }

  render() {
    const { className } = this.props
    return (
      <div id="wrapper" className={className}>
        <div className="info">
          <h3 id="coordinates">Coordinates (2, 2)</h3>
          <h3 id="steps">You moved {this.state.steps} times</h3>
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
          <h3 id="message">{this.state.error}</h3>
        </div>
        <div id="keypad">
          <button id="left" value={this.state.x} onClick={this.stepCounter}>LEFT</button>
          <button id="up" value={this.state.y} onClick={this.stepCounter}>UP</button>
          <button id="right" value={this.state.x} onClick={this.stepCounter}>RIGHT</button>
          <button id="down" value={this.state.y} onClick={this.stepCounter}>DOWN</button>
          <button id="reset" onClick={this.handleReset}>reset</button>
        </div>
        <form>
          <input id="email" type="email" placeholder="type email" onSubmit={this.props.onSubmit} value={this.props.email}></input>
          <input id="submit" type="submit" ></input>
        </form>
      </div>
    )
  }
}
