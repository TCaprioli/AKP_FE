import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { App } from "./app/App";
import { store } from "./store";
import "./index.scss";

export const API_URL = process.env.REACT_APP_API_URL;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
