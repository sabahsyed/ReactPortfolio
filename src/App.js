import React from "react";
import {
  BrowserRouter as Router,Route
} from "react-router-dom";

import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Resume from "./components/Resume/Resume";
import Projects from "./components/Projects/Projects";
import Links from "./components/Links/Links";
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <Router>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/Resume" component={Resume} />
        <Route exact path="/Projects" component={Projects} />
        <Route path="/Links" component={Links} />
        <Footer />
    </Router>
  );
}

export default App;
