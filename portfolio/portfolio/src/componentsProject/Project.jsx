import React from 'react';
import "./Project.css";
import Footer from "../Image/Footer.png";
import Dropdown from "../Image/Dropdown.png";
import Tictac from "../Image/Tictac.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Project = () => {
    return (
        <div>
        <div className="container-fluid justify-content-center d-flex">
            <div className="container row col-md-2 d-flex">
                <h1 className="page-header text-center">Portfolio</h1>
            </div>
            <div className="row col-md-12">
                <div className="img col-md-6">
                    <img className="img-thumbnail img-responsive" src={Footer} alt="footer-project"/>
                </div>
                <div className="info justify-content-center col-md-6">
                    <h1 className="text-center">Footer</h1>     
                    <p className="textInfo">A React Footer 
                    using styled components and compound components. 
                    It will be mobile responsive and able to fully 
                    customize the components. Having all social 
                    media icons.
                    </p>          
                </div>
            </div>    
        </div>


        <div className="container-fluid justify-content-center d-flex">
            <div className="container row col-md-2 d-flex">
                <h1 className="page-header text-center"></h1>
            </div>
            <div className="row mt-2 col-md-12">
                <div className="img col-md-6">
                    <img className="img-thumbnail img-responsive" 
                        src={Tictac} alt="footer-project"/>
                </div>
                <div className="info mt-0.3 justify-content-center col-md-6">
                    <h1 className="text-center">Tic Tac Toe</h1>     
                    <p className="textInfo">A Tic Tac Toe game using 
                    React JS, functional components and hooks.
                    i'll use useState and react-icons also.
                    </p>          
                </div>
            </div>    
        </div>

        <div className="container-fluid justify-content-center d-flex">
            <div className="container row col-md-2 d-flex">
                <h1 className="page-header text-center"></h1>
            </div>
            <div className="row mb-1 col-md-12">
                <div className="img col-md-6">
                    <img className="img-thumbnail img-responsive" 
                        src={Dropdown} alt="footer-project"/>
                </div>
                <div className="info justify-content-center col-md-6">
                    <h1 className="text-center">Dropdown Navbar</h1>     
                    <p className="textInfo">just a Navbar menu that 
                    slides out into a sidebar and utilities
                     a menu icon that you can toggle on and off
                    to open the menu. The Navbar contain a component 
                    and will includes all the props and function.
                    </p>          
                </div>
            </div>    
        </div>
        </div>
    )
}

export default Project
