import React from "react";
import { Component } from "react";

class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: ''
    };
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  submitHandler = (event) => {
    event.preventDefault();
    this.props.onLogin(this.state);
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input type="text" placeholder="name" name="username" onChange={this.changeHandler} value={this.state.username} />
        <input type="text" placeholder="email" name="email" onChange={this.changeHandler} value={this.state.email} />
        <button>OK</button>
      </form>
    );
  }
};

export default LoginForm;
