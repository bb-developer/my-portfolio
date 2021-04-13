import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
 import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Contact from "./Contact";
import Error from "./Error";


function App() {
return (
    <Router>
    <Navbar />
    <Switch>
    <Route exact path = "/"> <Home /> </Route>
    <Route  path = "/about"> <About /> </Route>
    <Route  path = "/home"> <About /> </Route>
    <Route  path = "/projects"> <Projects /> </Route>
    <Route  path = "/contact"> <Contact /> </Route>
    <Route  path = "*"> <Error /> </Route>
    </Switch>
    </Router>
);
   
}
export default App;