import React from 'react';
import Card from 'react-bootstrap/Card';
import './Login.css';
import LoginForm from './LoginForm';
import LoginButton from './LoginButton';

class Login extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        displayLogin: false,
      }
    }

    displayFormHandler = () => {
      this.setState({
        displayLogin: true
      })
    }

  render() {
    return (

      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Log In</Card.Title>
          <Card.Text>
            Click Below to Log In
          </Card.Text>
          {this.state.displayLogin ? <LoginForm loginHandler={this.props.loginHandler}/> : <LoginButton displayFormHandler={this.displayFormHandler} />}
        </Card.Body>
      </Card>
    )
  }
}

export default Login;
