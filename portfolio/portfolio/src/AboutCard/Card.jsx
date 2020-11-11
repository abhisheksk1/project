import React from 'react';
import "./card-style.css";
import Abhi3 from '../Image/Abhi3.jpg';
import Skill from "../Image/Skill.jpg"
import "bootstrap/dist/css/bootstrap.min.css";


const Card = props => {
    return(
        
        <div className="container-fluid d-flex justify-content-center">
            <div className="row">
                <div className="col-md-6 col-xs-9 col-sm-6">
                    <div className="card text-center shadow">
                        <div className="overflow">
                            <img src={Abhi3} alt="Abhi image" className="card-img-top rounded-circle"/>
                        </div>
                        <div className="card-body text-dark">
                            <h4 className="card-title">About</h4>
                            <p className="card-text text-secondary">
                                <h1 className="header">Hi, I'm Abhi</h1>
                                <h3 className="workheader">2nd year B.Tech student</h3>
                                <h3 className="workheader">Front End Developer</h3>
                                <p></p>
                                <p className="about-para">Interested in Full Stack 
                                    Developer. I'm largely a Framework Lover
                                    but the Technologies i love right 
                                    now are React, Bootstrap and
                                    Styled-components.
                                </p>
                            </p>
                        </div>
                    </div>    
                </div>

                <div className="col-md-6 col-xs-9 col-sm-6">
                    <div className="card text-center shadow">
                        <div className="overflow">
                            <img src={Skill} alt="Abhi image" className="card-img-top"/>
                        </div>
                        <div className="card-body text-dark">
                            <h4 className="card-title">Skills</h4>
                            <p className="card-text text-secondary">
                                <div className="skills-test-item">HTML</div>
                                <div className="skills-test-item">CSS</div>
                                <div className="skills-test-item">REACT JS</div>
                                <div className="skills-test-item">BOOTSTRAP</div>
                                <div className="skills-test-item">PYTHON</div>
                                <div className="skills-test-item">JAVASCRIPT</div>
                            </p>
                        </div>
                    </div>    
                </div>

            </div>
        </div>
    );
};

export default Card;