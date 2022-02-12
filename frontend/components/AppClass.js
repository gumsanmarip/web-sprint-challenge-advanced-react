import React from 'react';
import axios from 'axios';

const initialState = {
  x: '2',
  y: '2',
  steps: 0,
  email: '',
}
const posArray = [
  [0,0,0],
  [0,1,0],
  [0,0,0],
];

export default class AppClass extends React.Component {
  state = initialState;

  //coordinates
  updateCoord = () => {
    this.setState({
      ...this.state, 
    })
    for(var i = 0; i < posArray.length; i++) {
      var cube = cubes[i];
      for(var j = 0; j < posArray.length; j++) {
          display("cube[" + i + "][" + j + "] = " + cube[j]);
      }
    }

    
  }

  moveLeft = () => {
    this.setState({ x: this.state.x -1})
  }
  moveRight = () => {
    this.setState({ x: this.state.x +1})
  }
  moveUp = () => {
    this.setState({ y: this.state.y +1})
  }
  moveDown = () => {
    this.setState({ y: this.state.y -1})
  }

  //steps-
  stepCounter = () => { 
    this.setState({ steps: this.state.steps + 1 })
  }

  //reset x, y, steps-
  handleReset = () => {
    this.setState({ ...initialState});
  }

  //submit, message, email error, post
  onChange = (e) => { 
    const { value } = e.target;
    this.setState({ ...this.state, email: value})
  }

  onSubmit = (e) => {
    e.preventDefault();
    const payload = {x: this.state.x, y: this.state.y, steps: this.state.steps, email: this.state.email};
    axios.post('http://localhost:9000/api/result', payload)
      .then(res => {
        this.setState({ ...this.state, message: res.data.message})
      })
      .catch(err => {
        const errorFromAPI = err.response.data.message
        this.setState({ ...this.state, message: errorFromAPI });
      })
  }
  


  render() {
    const { className } = this.props
    return (
      <div id="wrapper" className={className}>
        <div className="info">
          <h3 id="coordinates">Coordinates ({this.state.x},{this.state.y}) </h3>
          <h3 id="steps">You moved {this.state.steps} times</h3>
        </div>
        <div id="grid">
          <div className="square" id='1'></div>
          <div className="square" id='2'></div>
          <div className="square" id='3'></div>
          <div className="square" id='4'></div>
          <div className="square active" id='5'>B</div>
          <div className="square" id='6'></div>
          <div className="square" id='7'></div>
          <div className="square" id='8'></div>
          <div className="square" id='9'></div>
        </div>
        <div className="info">
          <h3 id="message">{this.state.message}</h3>
        </div>
        <div id="keypad">
          <button id="left" value={this.state.x} onClick={this.stepCounter}>LEFT</button>
          <button id="up" value={this.state.y} onClick={this.stepCounter}>UP</button>
          <button id="right" value={this.state.x} onClick={this.stepCounter}>RIGHT</button>
          <button id="down" value={this.state.y} onClick={this.stepCounter}>DOWN</button>
          <button id="reset" onClick={this.handleReset}>reset</button>
        </div>
        <form onSubmit={this.onSubmit}>
          <input onChange={this.onChange} value={this.state.email} id="email" type="email" placeholder="type email"></input>
          <input id="submit" type="submit"></input>
        </form>
      </div>
    )
  }
}
