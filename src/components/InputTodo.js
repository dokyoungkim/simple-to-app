import React, { Component } from "react"

class InputTodo extends Component {
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input type="text" placeholder="Add Todo..." name="title" className="input-text" value={this.state.title} onChange={this.onChange}/>
        <input type="submit" value="Submit"  className="input-submit"/>
      </form>
    )
  };

  onChange = e => {
    this.setState({[e.target.name]: e.target.value});
    //console.log(e.target.name);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodoProps(this.state.title);
    this.setState({title: ""});
  };

  state = {
    title: ""
  }; 


}
export default InputTodo