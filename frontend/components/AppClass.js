import React from 'react';
import axios from 'axios';

const initialState = {
  coord: {
    x: 2,
    y: 2
  },
  steps: 0,
  email: '',
  message: '',
}

export default class AppClass extends React.Component {
  state = initialState;

  //movements
  moveLeft = () => {
    if (this.state.coord.x > 1){
      this.setState({ ...this.state, 
        coord: {... this.state.coord, x: this.state.coord.x - 1},
        message: '',
        steps: this.state.steps + 1
      })
    }
    else {
      this.setState({ ...this.state, message: "You can't go left"})
    }
  }
  moveRight = () => {
    if (this.state.coord.x < 3){
      this.setState({ ...this.state, 
        coord: {... this.state.coord, x: this.state.coord.x + 1},
        message: '',
        steps: this.state.steps + 1
      })
    }
    else {
      this.setState({ ...this.state, message: "You can't go right"})
    }
  }
  moveUp = () => {
    if (this.state.coord.y > 1){
      this.setState({ ...this.state, 
        coord: {... this.state.coord, y: this.state.coord.y - 1},
        message: '',
        steps: this.state.steps + 1
      })
    }
    else {
      this.setState({ ...this.state, message: "You can't go "})
    }
  }
  moveDown = () => {
    if (this.state.coord.y < 3){
      this.setState({ ...this.state, 
        coord: {... this.state.coord, y: this.state.coord.y + 1},
        message: '',
        steps: this.state.steps + 1
      })
    }
    else {
      this.setState({ ...this.state, message: "You can't go down"})
    }
  }
  
  // stepCounter = () => { 
  //   this.setState({ steps: this.state.steps + 1 })
  // }

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
    const payload = {x: this.state.coord.x, y: this.state.coord.y, steps: this.state.steps, email: this.state.email};
    axios.post('http://localhost:9000/api/result', payload)
      .then(res => {
        this.setState({ ...this.state, message: res.data.message})
        this.setState({ ...this.state, email: ''})
      })
      .catch(err => {
        this.setState({ ...this.state, message: err.response.data.message });
      })  
  }

  render() {
    const { className } = this.props
    return (
      <div id="wrapper" className={className}>
        <div className="info">
          <h3 id="coordinates">{`Coordinates (${this.state.coord.x},${this.state.coord.y})`}) </h3>
          <h3 id="steps">You moved {this.state.steps} times</h3>
        </div>
        <div id="grid">
          <div className={`${this.state.coord.x == 1 && this.state.coord.y == 1 ? "square active" : "square"}`} id='1'>{this.state.coord.x === 1 && this.state.coord.y === 1 ? "B" : ""}</div>
          <div className={`${this.state.coord.x == 2 && this.state.coord.y == 1 ? "square active" : "square"}`} id='2'>{this.state.coord.x === 2 && this.state.coord.y === 1 ? "B" : ""}</div>
          <div className={`${this.state.coord.x == 3 && this.state.coord.y == 1 ? "square active" : "square"}`} id='3'>{this.state.coord.x === 3 && this.state.coord.y === 1 ? "B" : ""}</div>
          <div className={`${this.state.coord.x == 1 && this.state.coord.y == 2 ? "square active" : "square"}`} id='4'>{this.state.coord.x === 1 && this.state.coord.y === 1 ? "B" : ""}</div>
          <div className={`${this.state.coord.x == 2 && this.state.coord.y == 2 ? "square active" : "square"}`} id='5'>{this.state.coord.x === 2 && this.state.coord.y === 2 ? "B" : ""}</div>
          <div className={`${this.state.coord.x == 3 && this.state.coord.y == 2 ? "square active" : "square"}`} id='6'>{this.state.coord.x === 3 && this.state.coord.y === 2 ? "B" : ""}</div>
          <div className={`${this.state.coord.x == 1 && this.state.coord.y == 3 ? "square active" : "square"}`} id='7'>{this.state.coord.x === 1 && this.state.coord.y === 3 ? "B" : ""}</div>
          <div className={`${this.state.coord.x == 2 && this.state.coord.y == 3 ? "square active" : "square"}`} id='8'>{this.state.coord.x === 2 && this.state.coord.y === 3 ? "B" : ""}</div>
          <div className={`${this.state.coord.x == 3 && this.state.coord.y == 3 ? "square active" : "square"}`} id='9'>{this.state.coord.x === 3 && this.state.coord.y === 3 ? "B" : ""}</div>
        </div>
        <div className="info">
          <h3 id="message">{this.state.message}</h3>
        </div>
        <div id="keypad">
          <button id="left"  onClick={this.moveLeft}>LEFT</button>
          <button id="up"    onClick={this.moveUp}>UP</button>
          <button id="right" onClick={this.moveRight}>RIGHT</button>
          <button id="down"  onClick={this.moveDown}>DOWN</button>
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
