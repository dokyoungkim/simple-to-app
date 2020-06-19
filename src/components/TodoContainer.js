import React from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";

class TodoContainer extends React.Component {
    render() {
        return (
            <div className="container">
                <Header/>
                <InputTodo addTodoProps={this.addTodoItem}/>
                <TodosList todos={this.state.todos} handleChangeProps={this.handleChange} deleteTodoProps={this.delTodo}/>
            </div>
        )
    };

    handleChange = id => {
        this.setState({
          todos: this.state.todos.map(todo => {
            if (todo.id === id) {
              todo.completed = !todo.completed;
            }
            return todo;
          })
        });
      };

      delTodo = id => {
        this.setState({
          todos: [
            ...this.state.todos.filter(todo => {
              return todo.id !== id;
            })
          ]
        });
      };

      addTodoItem = title => {
        var newTodo = {
          id: uuidv4(),
          title: title,
          completed: false
        };
        this.setState({
          todos: [...this.state.todos, newTodo]
        });
      };

  // state management.
    state = {
        todos: [
        {
            id: 1,
            title: "Step one",
            completed: true
        },
        {
            id: 2,
            title: "Step two",
            completed: false
        },
        {
            id: 3,
            title: "Step three",
            completed: false
        }
        ]
    };  
   
}
export default TodoContainer