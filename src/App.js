import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Profile from './Profile'
import 'bootstrap/dist/css/bootstrap.min.css';
import BestBooks from './BestBooks';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './Login'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
    }
  }

  loginHandler = (user, event) => {
    event.preventDefault();
    this.setState({
      user,
    })
  }

  logoutHandler = () => {
    this.setState({
      user: null,
    })
  }

  render() {
    return (
      <>
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />
          <Switch>
            <Route exact path="/">
              {this.state.user ? (
                <BestBooks />
                ) : (
                <Login loginHandler={this.loginHandler} />
              )}
              
            </Route>
            {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
            <Route exact path="/profile">
              {this.state.user ? <Profile user={this.state.user}/> : <h3>Please Login to View Profile</h3> }
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
