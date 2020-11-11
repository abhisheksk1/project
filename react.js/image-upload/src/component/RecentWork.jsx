import React from 'react';
import Footer from "../Footer.png";
import "./Element.css"
import {
    Nav,
    NavLink,
    NavMenu,
    Img,
    NavText,
    Navh1,
    Navp, 
    Text, 
    NavHead
} from "./Element"


const RecentWork = () => {
    return(
        <div>
            <NavHead>
                <h1>MOST RECENT WORK</h1>
            </NavHead>
            <Nav>
                <NavLink>
                    <h1></h1>
                </NavLink>
                <NavMenu>
                    <Img src={Footer} alt="some recent work"/>
                    <NavText>
                        <Navh1>Footer</Navh1>
                        <Text>
                            <Navp className="para">Lorem ipsum dolor sit 
                                amet consectetur, adipisicing elit. 
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, dolores?
                            </Navp>
                        </Text>
                    </NavText>
                </NavMenu>   
            </Nav>
            <Nav>
                <NavLink>
                    
                </NavLink>
                <NavMenu>
                    <Img src={Footer} alt="some recent work"/>
                    <NavText>
                        <Navh1>Footer</Navh1>
                        <Text>
                            <Navp className="para">Lorem ipsum dolor sit 
                                amet consectetur, adipisicing elit. 
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, dolores?
                            </Navp>
                        </Text>
                    </NavText>
                </NavMenu>   
            </Nav>
        </div>
    )
}


export default RecentWork;