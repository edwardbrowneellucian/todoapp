import React from "react"
import TodoItem from "./TodoItem";

class TodosList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map(todo => (
          <TodoItem  
          key={todo.id} 
          handleChangeProps={this.props.handleChangeProps}
          deleteTodoProps={this.props.deleteTodoProps} 
          todo={todo}
          setUpdate={this.props.setUpdate}   
          />
        ))}
      </ul>
    )
  }
}

export default TodosList