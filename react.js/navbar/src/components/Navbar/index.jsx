import React from 'react';
import {
    Nav,
    NavLink, 
    Bars, 
    NavMenu, 
    NavBtn, 
    NavBtnLink
} from "./NavbarElements";



const Navbar = () => {
    return (
        <div>
            <Nav>
                <NavLink to="/">
                    <h1>HELLO</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/about" activeStyle>About</NavLink>
                    <NavLink to="/services" activeStyle>Services</NavLink>
                    <NavLink to="/contact-us" activeStyle>Contact Us</NavLink>
                    <NavLink to="/sign-up" activeStyle>Sign up</NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
        </div>
    )
}
 
export default Navbar
