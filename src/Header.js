import React from 'react';
// import LogoutButton from './LogoutButton';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        {console.log(this.props.user)}
        {this.props.user ? (
          <>
            <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
            <NavItem><Link to="/profile" className="nav-link">Profile</Link></NavItem>
            {/* <LogoutButton /> */}
          </>
        ) : <></>}
      </Navbar>
    )
  }
}

export default Header;
