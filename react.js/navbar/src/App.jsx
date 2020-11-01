import React from "react";
import Navbar from "./components/Navbar/index"
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";


function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/contact-us" component={ContactUs} />

      </Switch>
    </Router>
  );
}

export default App;
