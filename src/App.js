import React, { Component } from "react";
import SiteBar from "./home/Navbar";
import Auth from "./auth/Auth";
import Splash from "./home/Splash";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import ShoppingCart from "./pages/ShoppingCart";
import AboutPage from "./ez-rent/AboutPage";
import ContactPage from "./ez-rent/ContactPage";

class App extends Component {
  constructor() {
    super();
    this.state = {
      sessionToken: ""
    };
  }

  logout = () => {
    this.setState({
      sessionToken: ""
    });
    localStorage.clear();
  };

  cart = () => {
    this.setState({
      sessionToken: ""
    });
  };

  componentWillMount() {
    const token = localStorage.getItem("token");
    if (token && !this.state.sessionToken) {
      this.setState({ sessionToken: token });
    }
  }

  setSessionState = token => {
    localStorage.setItem("token", token);
    this.setState({ sessionToken: token });
  };

  protectedViews = () => {
    if (this.state.sessionToken === localStorage.getItem("token")) {
      return (
        <Switch>
          <Route path="/" exact>
            <Splash sessionToken={this.state.sessionToken} />
          </Route>
          <Route path="/shoppingcart" exact>
            <ShoppingCart sessionToken={this.state.sessionToken} />
          </Route>
          <Route path="/aboutpage" exact>
            <AboutPage sessionToken={this.state.sessionToken} />
          </Route>
          <Route path="/contactpage" exact>
            <ContactPage sessionToken={this.state.sessionToken} />
          </Route>
        </Switch>
      );
    } else {
      return (
        <Route path="/auth">
          <Auth setToken={this.setSessionState} />
        </Route>
      );
    }
  };

  render() {
    return (
      <Router>
        <div>
          <SiteBar clickLogout={this.logout} />
          {/* <Auth setToken={this.setSessionState} /> */}
          {this.protectedViews()}
        </div>
      </Router>
    );
  }
}

export default App;
