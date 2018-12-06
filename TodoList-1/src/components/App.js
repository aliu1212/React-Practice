import React from 'react';
import TodoList from './TodoList';
import CreateTodo from './CreateTodo';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: ['first todo', 'example of a second', 'whoa, a third!']
    };
    this.deleteTodo = this.deleteTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo = (todo) => {
    let todos = [...this.state.todos];
    todos.push(todo);
    this.setState({todos});
  }

  deleteTodo = (i) => {
    let todos = [...this.state.todos];
    todos.splice(i, 1);
    this.setState({todos});
  }

  render () {
    return (
      <div>
        <CreateTodo addTodo={this.addTodo}/>
        <br/>
        <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      </div>
    )
  }
}

export default App;
