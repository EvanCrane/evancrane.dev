import React, { useRef } from "react";
function LandingComponent(props) {
    const landingRef = useRef(null);
    return (
        <div ref={landingRef}>
            <Greeting />
            <div className="viewMore">
                <h3>View More</h3>
                <a href="#about"> <i className="fas fa-angle-double-down fa-3x"></i></a>
            </div>
        </div>
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

export default LandingComponent;