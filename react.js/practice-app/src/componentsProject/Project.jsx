import React from 'react';
import "./Project.css";
import Footer from "../Image/Footer.png";
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
                    <p className="textInfo">Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit.
                         Esse dicta nihil quasi accusamus id est!
                         consectetur adipisicing elit.
                         Esse dicta nihil quasi accusamus id est!
                    </p>          
                </div>
            </div>    
        </div>


        <div className="container-fluid justify-content-center d-flex">
            <div className="container row col-md-2 d-flex">
                <h1 className="page-header text-center"></h1>
            </div>
            <div className="row col-md-12">
                <div className="img col-md-6">
                    <img className="img-thumbnail img-responsive" src={Footer} alt="footer-project"/>
                </div>
                <div className="info justify-content-center col-md-6">
                    <h1 className="text-center">Footer</h1>     
                    <p className="textInfo">Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit.
                         Esse dicta nihil quasi accusamus id est!
                         consectetur adipisicing elit.
                         Esse dicta nihil quasi accusamus id est!
                    </p>          
                </div>
            </div>    
        </div>

        <div className="container-fluid justify-content-center d-flex">
            <div className="container row col-md-2 d-flex">
                <h1 className="page-header text-center"></h1>
            </div>
            <div className="row mb-4 col-md-12">
                <div className="img col-md-6">
                    <img className="img-thumbnail img-responsive" src={Footer} alt="footer-project"/>
                </div>
                <div className="info justify-content-center col-md-6">
                    <h1 className="text-center">Footer</h1>     
                    <p className="textInfo">Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit.
                         Esse dicta nihil quasi accusamus id est!
                         consectetur adipisicing elit.
                         Esse dicta nihil quasi accusamus id est!
                    </p>          
                </div>
            </div>    
        </div>
        </div>
    )
}

export default Project
