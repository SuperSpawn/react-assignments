import './styles/reset.css'
import "./App.css";

import { Component } from 'react';


class App extends Component {
  constructor() {
    super()
    this.state = {seconds: 0, minutes: 0, hours: 0} 
  }

  handleSeconds(value) {
    this.setState({seconds: value, minutes:value/60, hours:value/3600})
  }
  handleMinutes(value) {
    this.setState({seconds: value*60, minutes:value, hours:value/60})
  }
  handleHours(value) {
    this.setState({seconds: value*3600, minutes:value*60, hours:value})
  }

  render() {

    console.log("render")

    const secondsHandler = this.handleSeconds.bind(this);
    const minutesHandler = this.handleMinutes.bind(this);
    const hoursHandler = this.handleHours.bind(this);

    return (
      <div className='App'>
        <input onChange={(e) => hoursHandler(Number.parseInt(e.target.value))} type="text" value={this.state.hours}/>
        <input onChange={(e) => minutesHandler(Number.parseInt(e.target.value))} type="text" value={this.state.minutes}/>
        <input onChange={(e) => secondsHandler(Number.parseInt(e.target.value))} type="text" value={this.state.seconds}/>
      </div>
    )
  }
}

export default App;