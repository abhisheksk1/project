import React from 'react'
import Footer from '../components/footer';
import { Icon } from '../icons/icons';


function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>

                    <Footer.Column>
                        <Footer.Title>About Us</Footer.Title>
                        <Footer.Link href='#'>Story</Footer.Link>
                        <Footer.Link href='#'>Team</Footer.Link>
                        <Footer.Link href='#'>Testimonials</Footer.Link>
                    </Footer.Column>

                    <Footer.Column>
                        <Footer.Title>Services</Footer.Title>
                        <Footer.Link href='#'>Front-End</Footer.Link>
                        <Footer.Link href='#'>Web design</Footer.Link>
                        <Footer.Link href='#'>Python Programming</Footer.Link>
                    </Footer.Column>

                    <Footer.Column>
                        <Footer.Title>Contact Us</Footer.Title>
                        <Footer.Link href='#'><Icon className="fab fa-facebook-f"/>FaceBook</Footer.Link>
                        <Footer.Link href='#'><Icon className="fab fa-instagram"/> Instagram</Footer.Link>
                        <Footer.Link href='#'><Icon className="fab fa-linkedin"/>LinkedIn</Footer.Link>
                        <Footer.Link href='#'><Icon className="fab fa-github"/>Github</Footer.Link>
                    </Footer.Column>

                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    );
};

export default FooterContainer;