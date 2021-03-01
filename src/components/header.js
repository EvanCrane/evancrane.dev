import React, { useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import './header.css';

function HeaderComponent(props) {
    return (
        <div className="bg-content-parallax">
            <header>
                <nav id="mainNav" className="mainNav">
                    <div className="navbar-brand">
                        <h2>Evan Crane</h2>
                    </div>
                    <div id="navLinks" className="nav-links">
                        <a className="nav-link" id="nav-about">About</a>
                        <a className="nav-link" id="nav-skills">Skills</a>
                        <a className="nav-link" id="nav-contact">Contact</a>
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
                <a href="#about"> <FontAwesomeIcon icon={faAngleDoubleDown} size="3x"></FontAwesomeIcon></a>
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