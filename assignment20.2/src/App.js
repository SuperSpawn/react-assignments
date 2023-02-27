import './styles/reset.css'
import "./App.css";

import { Component } from 'react';


class Todo extends Component {
  render() {
    return (
      <div onClick={this.props.clickHandler} className='Todo'>
        <p className={'Todo-name ' + (this.props.todo.completed ? "Todo-name-check" : "Todo-name-uncheck")}>{this.props.todo.name}</p>
        <p className={'Todo-status ' + (this.props.todo.completed ? "Todo-status-done" : "Todo-status-wip")}>{this.props.todo.completed ? 'true' : "false"}</p>
      </div>
    )
  }
}

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: [
        { name: "CSS", completed: true },
        { name: "JavaScript", completed: true },
        { name: "Learn React", completed: false },
        { name: "Learn mongoDB", completed: false },
        { name: "Learn Node JS", completed: false },
      ]}
  }

  toggleTask(index) {
    const data = this.state.data; 
    data[index].completed = !(data[index].completed);
    this.setState({data: data})
  }

  render() {
    return (
      <div className='App'>
        {
          this.state.data.map((todo, index) => {
            return (
              <Todo clickHandler={() => this.toggleTask(index).bind(this)} todo={todo} key={index}/>
            )
          })
        }
      </div>
    )
  }

}


export default App;