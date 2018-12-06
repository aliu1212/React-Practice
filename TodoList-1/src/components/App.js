import React from 'react';
import TodoList from './TodoList';
import CreateTodo from './CreateTodo';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: ['first todo', 'example of a second', 'whoa, a third!']
    };

    this.addTodo = this.addTodo.bind(this);
  }

  addTodo = (todo) => {

  }

  render () {
    return (
      <div>
        <CreateTodo />
        <br/>
        <ToDoList todos={this.state.todos}/>
      </div>
    )
  }
}

export default App;
