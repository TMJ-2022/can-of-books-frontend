import { Component } from "react";
import { Redirect } from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';

class Profile extends Component {

  render() {

    if (this.props.auth0.user) {

      return (
        <div>
          <h2>{this.props.auth0.user.name}</h2>
          <p>{this.props.auth0.user.email}</p>
          <p>{this.props.auth0.user.picture}</p>
        </div>
      );

    } else {

      return <Redirect to="/" />
    }
  }
};

export default withAuth0(Profile);
