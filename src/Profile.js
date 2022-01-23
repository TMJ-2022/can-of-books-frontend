import { Component } from "react";

class Profile extends Component {

  render() {
    /* TODO: render information about logged in user */
    /* STRETCH TODO: if no logged in user then redirect home */
    return (
      <div className="Profile" >
      <h3>{this.props.user}</h3>
      </div>
    )
  }
};

export default Profile;
