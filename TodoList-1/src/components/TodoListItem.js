import React from 'react';

const TodoListItem = (props) => {
  return (
    <li>
      <button onClick={() => props.deleteTodo(props.index)}>delete</button>
      {props.todo}
    </li>
  ) 
}
export default TodoListItem;
