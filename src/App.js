// import logo from './logo.svg';
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route,} from "react-router-dom";
import Navbar from "./componants/Navbar";
import Landing from "./componants/Landing";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar/>
        <Route exact path="/" component={Landing} />{" "}
      </Router>
    </Fragment>
  );
}

export default App;
