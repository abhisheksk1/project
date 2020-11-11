import React, { Component } from 'react';
import Card from "./CardUI";
import Abhi from "../image/Abhi.jpg";
import Abhi2 from "../image/Abhi2.jpg";
import Abhi1 from "../image/Abhi1.jpg";


class Cards extends Component {
    render() { 
        return ( 
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4 col-xs-9 col-sm-6">
                        <Card imgsrc={Abhi} title="About"/>
                    </div>
                    <div className="col-md-4 col-xs-9 col-sm-6">
                        <Card imgsrc={Abhi} title="Skills"/>
                    </div>
                    <div className="col-md-4 col-xs-9 col-sm-6">
                        <Card imgsrc={Abhi} title="Photos"/>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Cards;
