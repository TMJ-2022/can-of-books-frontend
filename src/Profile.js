import { Component } from "react";
import { Redirect } from "react-router-dom";

class Profile extends Component {

  render() {

    if (this.props.user) {

      return (
        <div>
          <h2>{this.props.user.username}</h2>
          <p>{this.props.user.email}</p>
        </div>
      );

    } else {

      return <Redirect to="/" />
    }
  }
};

export default Profile;
