import './App.css';
import "./contactComponent/app.css";
import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch ,Route} from "react-router-dom";
import FooterContainer from './componentFooter/container/footer';
import "./contactComponent/app.css";
import Contact from './contactComponent/Contact';
import Card from './AboutCard/Card';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Project from "./componentsProject/Project";

function App() {
    return (
        <Router>
            <Navbar/>
            <Card/>
            <Project/>
            <div className="app"><Contact/></div>
            <FooterContainer/>
        </Router>
    );
}

export default App;