import React from 'react';
import Footer from '../Footer/index';
import {Icon} from '../icons/icon';
import "./footer.css"

function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                        
                        <span className="email">abhishekkumar9304843750@gmail.com</span>
                        <footer className="social-item">
                            <a className="social-icon" href='#'><Icon className="fab fa-facebook-f"/></a>
                            <a className="social-icon" href="https://www.instagram.com/_im_abhi_pandey"><Icon className="fab fa-instagram"/></a>
                            <a className="social-icon" href='https://www.linkedin.com/in/abhishek-kumar-pandey-baa2041b8/'><Icon className="fab fa-linkedin"/></a>
                            <a className="social-icon" href='https://github.com/abhisheksk1/project'><Icon className="fab fa-github"/></a>
                        </footer>
                        <span className="dil">Made with ❤️ by Abhishek Pandey</span>
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    );
};

export default FooterContainer;