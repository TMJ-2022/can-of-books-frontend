import React from 'react';
import Logout from './LogoutButton';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        {this.props.user && (
          <>
            <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
            <NavItem><Link to="/profile" className="nav-link">Profile</Link></NavItem>
            <Logout onLogout={this.props.onLogout} />
          </>
        )}
      </Navbar>
    )
  }
}

export default Header;
