import React, { Component } from 'react';
import Item from './Item';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.addItemToList = this.addItemToList.bind(this)
    this.maintainValue = this.maintainValue.bind(this)
    this.state = { description: '', todo_list: [] }
  }

  addItemToList() {
    let list = this.state.todo_list

    list.push(this.state.description);
    this.setState({
      todo_list: list
    });
  }

  maintainValue(e) {
    this.setState({
      description: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <h1>To Do List</h1>
        <p>(Add new ToDo items to the list using the input box)</p>
        <input type="text" onChange={ this.maintainValue } />
        <button type="submit" onClick={ this.addItemToList }>Add</button>
        <ol className="Todo">
          {
            this.state.todo_list.map((item, index) =>
              <Item key={ index } description= { item } />
            )
          }
        </ol>
      </div>
    );
  }
}

export default App;
