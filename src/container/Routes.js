import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App.js";
import UserDetail from "./UserDetail";

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
        <Route exact path="/" component={App} />
        <Route path="/:name" component={UserDetail} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
