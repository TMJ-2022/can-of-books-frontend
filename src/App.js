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

  render() {
    return (
      <>
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />
          <Switch>
            <Route exact path="/">
            {this.state.user ? <BestBooks user={this.state.user} /> : <Login onLogin={this.loginHandler} />}
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

export default App;
