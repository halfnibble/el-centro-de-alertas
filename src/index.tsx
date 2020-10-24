import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const headerContainer = document.getElementById("masthead");
const alertPopupEl = document.createElement("div");
alertPopupEl.id = "alert-popup-modal";
headerContainer?.appendChild(alertPopupEl);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  alertPopupEl
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
