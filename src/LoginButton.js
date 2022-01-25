import { Component } from 'react'
import LoginForm from './LoginForm'

export default class LoginButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }

  clickHandler = () => {
    this.setState({ show: !this.state.show });
  };

  render() {

    if (this.state.show) {
      return <LoginForm onLogin={this.props.onLogin} />
    } else {
      return (
        <button onClick={this.clickHandler}>
          Log In
        </button>
      )
    }
  }
}