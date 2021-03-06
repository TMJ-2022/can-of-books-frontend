import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Header from './Header';
import Footer from './Footer';
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';
import Profile from './Profile'
import 'bootstrap/dist/css/bootstrap.min.css';
import BestBooks from './BestBooks';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import axios from 'axios';

const SERVER = process.env.REACT_APP_SERVER;

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
    }
  }

  loginHandler = (user) => {
    this.setState({
      user,
    })
  }

  logoutHandler = () => {
    this.setState({
      user: null,
    })
  }

  handleUpdateBook = async bookToBeUpdated => {
    try {
      await axios.put(`${SERVER}/books/${bookToBeUpdated._id}`, bookToBeUpdated);

      const updatedBooks = this.state.books.map(existingBook => {
        if (existingBook._id === bookToBeUpdated._id) {
          return bookToBeUpdated;
        } else {
          return existingBook;
        }
      });

      this.setState({
        books: updatedBooks
      })
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <>
        <Router>
          <Header user={this.props.auth0.isAuthenticated} onLogout={this.logoutHandler} />
          <Switch>
            {/* <Route exact path="/">
              {this.state.user ? <BestBooks user={this.state.user} /> : <Login onLogin={this.loginHandler} />}
            </Route> */}
            <Route exact path='/'>
              <LoginButton />
              <LogoutButton />
              {this.props.auth0.isAuthenticated &&
                <>
                  <Profile />
                  <BestBooks />
                  {/* <Login onLogin={this.loginHandler} /> */}
                </>
              }
            </Route>
            <Route exact path="/profile">
              <Profile user={this.state.user} />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default withAuth0(App);
