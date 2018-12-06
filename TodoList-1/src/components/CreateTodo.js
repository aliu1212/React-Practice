import React from 'react';

class CreateTodo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      newTodo: ''
    }
  }
  
  addTodo = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.newTodo);
  }

  updateItem = (e) => {
    let newTodo = e.target.value;
    this.setState({newTodo});
  }

  render() {
    return (
      <div>
        <form action="" onSubmit={this.addTodo}>
          <input type="text" onChange={this.updateItem}/>
          <button type="submit">add</button>
        </form>
      </div>
    )
  }
}

export default CreateTodo;