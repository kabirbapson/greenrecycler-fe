import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Modal from "react-modal";

import store from "./store";
import { Provider } from "react-redux";

Modal.setAppElement("#root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
