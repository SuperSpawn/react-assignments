import './styles/reset.css'
import "./App.css";

import { Component } from 'react';

class Button extends Component {
  
  
  render() {
    return (
      <button onClick={this.props.clickHandler} className='Button'>{this.props.name}</button>
    )
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = { counter: 0, moshe:"shalom"}
  }
  getCounterClass() {
    if(this.state.counter > 0) return "App-counter-positive"
    else if(this.state.counter < 0) return "App-counter-negative"
    else return "App-counter-neutral"
  }
  incrementCounter() {
    if(this.state.counter < 10) {
      this.setState({counter: this.state.counter+1});
    }
  }
  decrementCounter() {
    if(this.state.counter > -10) {
      this.setState({counter: this.state.counter-1});
    }
  }
  render() {
    console.log(this.state); 
    return (
      <div className='App'>
        <Button clickHandler={this.decrementCounter.bind(this)} name="-"/>
        <p className={this.getCounterClass()}>{this.state.counter}</p>
        <Button clickHandler={this.incrementCounter.bind(this)} name="+"/>
      </div>
    )
  }
}



export default App;