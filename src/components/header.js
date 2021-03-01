import React, { useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import { Link as ScrollLink } from "react-scroll";
import './header.css';

const HeaderComponent = () => {
    return (
        <div className="bg-content-parallax">
            <header>
                <nav id="mainNav" className="mainNav">
                    <div className="navbar-brand">
                        <h2>Evan Crane</h2>
                    </div>
                    <div id="navLinks" className="nav-links">
                        <ScrollLink to="about" smooth={true} offset={50} duration={500} className="nav-link" id="nav-about">About</ScrollLink>
                        <ScrollLink to="skills" smooth={true} offset={50} duration={500} className="nav-link" id="nav-skills">Skills</ScrollLink>
                        <ScrollLink to="contact" smooth={true} offset={50} duration={500} className="nav-link" id="nav-contact">Contact</ScrollLink>
                    </div>
                </nav>
                <LandingComponent />
            </header>
        </div>
    );
}

function LandingComponent(props) {
    const landingRef = useRef(null);
    return (
        <section ref={landingRef}>
            <Greeting />
            <div className="viewMore">
                <h3>View More</h3>
                <ScrollLink to="about" smooth={true} offset={50} duration={500}> <FontAwesomeIcon icon={faAngleDoubleDown} size="3x"></FontAwesomeIcon></ScrollLink>
            </div>
        </section>
    );
}

function Greeting(props) {
    return (
        <div className="greeting">
            <div className="greeting-content">
                <h1>Hello, I'm <b>Evan Crane</b></h1>
                <h2>Full Stack Developer</h2>
                <h2>I build... <span id="build-text">amazing things</span><span id="console-icon" className="console-icon">|</span></h2>
            </div>
        </div>
    );
}

export default HeaderComponent;