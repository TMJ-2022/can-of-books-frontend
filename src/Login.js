import React from 'react';
import LoginButton from './LoginButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import './Login.css';

class Login extends React.Component {
  render() {
    return (
      <Card style={{ width: '20rem' }}>
        <Card.Body>
          <Card.Title>Log In</Card.Title>
          <Card.Text>
            Log in below
          </Card.Text>
          <LoginButton style={{color: "purple"}} onLogin={this.props.onLogin} />
        </Card.Body>
      </Card>
    )
  }
}

export default Login;
