import React from 'react'

export default class AppClass extends React.Component {
  //steps
  constructor(props){
    super(props);
    this.state = {
      step: 0
    };
  }




  render() {
    const { className } = this.props
    return (
      <div id="wrapper" className={className}>
        <div className="info">
          <h3 id="coordinates">Coordinates (2, 2)</h3>
          <h3 id="steps">You moved {this.state.step} times</h3>
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
          <button id="left" onClick={() => this.setState({ step: this.state.step + 1 })}>LEFT</button>
          <button id="up" onClick={() => this.setState({ step: this.state.step + 1 })}>UP</button>
          <button id="right" onClick={() => this.setState({ step: this.state.step + 1 })}>RIGHT</button>
          <button id="down" onClick={() => this.setState({ step: this.state.step + 1 })}>DOWN</button>
          <button id="reset">reset</button>
        </div>
        <form>
          <input id="email" type="email" placeholder="type email"></input>
          <input id="submit" type="submit"></input>
        </form>
      </div>
    )
  }
}
