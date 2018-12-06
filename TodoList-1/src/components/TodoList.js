import React from 'react';
import TodoListItem from './TodoListItem'

const TodoList = (props) => {
  return (
    <div>
      <ul>
        {props.todos.map((todo, index) => {
          return <TodoListItem todo={todo} index={index} key={index}/>
        })}
      </ul>
    </div>

  )
}

export default TodoList;