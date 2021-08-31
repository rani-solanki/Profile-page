// import logo from './logo.svg';
import { Provider } from "react-redux";
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import "./App.css";

function App() {
  return (
    <Router>
      <Router>
        <Navbar />
        <Route exact path="/" component={Landing} />{" "}
      </Router>
    </Router>
  );
}

export default App;
