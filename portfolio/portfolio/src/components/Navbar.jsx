import React, {useState} from 'react';
import {Link} from "react-router-dom";
import "./Navbar.css";
import {} from "react-icons";
import Dropdown from "./Dropdown";


const Navbar = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);
    const [dropdown, setDropdown] =useState(false);

    const onMouseEnter = () => {
        if(window.innerWidth < 960){
            setDropdown(false);
        }
        else{
            setDropdown(true);
        }
    }
    const onMouseLeave = () => {
        if(window.innerWidth < 960){
            setDropdown(false);
        }
        else{
            setDropdown(false);
        }
    }


    return(
        <nav className="navbar">
            <Link to="/" className="navbar-logo">ABHISHEK PANDEY</Link>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? "fas fa-times" : "fas fa-bars"}/>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item">
                    <Link to="/" className="nav-links"
                        onClick={closeMobileMenu}>
                            PORTFOLIO
                    </Link>
                </li>
                
                <li className="nav-item">
                    <Link to="/about" className="nav-links"
                        onClick={closeMobileMenu}>
                            ABOUT
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-links"
                        onClick={closeMobileMenu}>
                            CONTACT
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;