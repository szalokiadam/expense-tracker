import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { HashRouter as Router } from "react-router-dom";
require("dotenv").config();

console.log(`PUBLIC URL: ${process.env.PUBLIC_URL}`);

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
