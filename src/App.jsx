import React, { Component } from 'react';
import Item from './Item.jsx';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.addItemToList = this.addItemToList.bind(this)
    this.inputField  = React.createRef();
    this.state = { todo_list: [] }
  }

  addItemToList(e) {
    e.preventDefault();
    let list = [...this.state.todo_list]
    if(this.inputField.current.value !== '') {
      list.push(this.inputField.current.value);
      list.sort();
      this.setState({
        todo_list: list
      });
      this.inputField.current.value = ''
    }
  }

  render() {
    return (
      <div className="App">
        <h1>To Do List</h1>
        <p>(Add new ToDo items to the list using the input box)</p>
        <form onSubmit={this.addItemToList}>
          <input type="text" ref={ this.inputField }/>
          <button type="submit" >Add</button>
        </form>
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
