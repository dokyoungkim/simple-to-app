import React from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

class TodoContainer extends React.Component {

  // state management.
  state = {
    todos: [],
    show: false
  };  

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(response => this.setState({ todos: response.data }));
  }
    // componentDidMount() {
    //   axios.get("https://jsonplaceholder.typicode.com/todos", {
    //       params: {
    //         _limit: 10
    //       }
    //     })
    //     .then(response => console.log(response.data));
    // }    

    render() {
        return (
            <div className="container">
                <Header headerSpan={this.state.show} />
                <InputTodo addTodoProps={this.addTodoItem}/>
                <TodosList todos={this.state.todos} handleChangeProps={this.handleChange} deleteTodoProps={this.delTodo}/>
            </div>
        )
    };

    handleChange = id => {
      this.setState({
        todos: this.state.todos.map(todo => {
          if (todo.id === id) {
            todo.completed = !todo.completed
          }
          return todo
        }),
        show: !this.state.show,
      })
    }

      // delTodo = id => {
      //   this.setState({
      //     todos: [
      //       ...this.state.todos.filter(todo => {
      //         return todo.id !== id;
      //       })
      //     ]
      //   });
      // };
      delTodo = id => {
        axios
          .delete('https://jsonplaceholder.typicode.com/todos/${id}')
          .then(reponse =>
            this.setState({
              todos: [
                ...this.state.todos.filter(todo => {
                  return todo.id !== id
                }),
              ],
            })
          )
      }
      // addTodoItem = title => {
      //   var newTodo = {
      //     id: uuidv4(),
      //     title: title,
      //     completed: false
      //   };
      //   this.setState({
      //     todos: [...this.state.todos, newTodo]
      //   });
      // };
      addTodoItem = title => {
        axios
          .post("https://jsonplaceholder.typicode.com/todos", {
            title: title,
            completed: false,
          })
          .then(response =>
            this.setState({
              todos: [...this.state.todos, response.data],
            })
          )
      }

   
}
export default TodoContainer