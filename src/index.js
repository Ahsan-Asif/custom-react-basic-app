import React from "react";
import { render } from "react-dom";
import Routes from "./container/Routes.js";
import store from "./store.js";
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
