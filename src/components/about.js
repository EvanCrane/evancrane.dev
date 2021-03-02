import React, { useRef } from "react";
import './sections.css';
import profile from '../assets/img/profile.png';

function AboutComponent(props) {
    const aboutRef = useRef(null);
    return (
        <section ref={aboutRef} id="about" className="about">
            <h1>About Me</h1>
            <div className="line"></div>
            <div className="content">
                <img className="img-profile" alt="profile" src={profile}></img>
                <p>Welcome to my site! I’m a full stack software engineer living in Atlanta, Georgia. I am currently open to work and looking for a great company that I can grow with! </p>
                <p>Along with my formal education, and 4+ years past work experience as a software engineer, I created this website to present my skills, interests, and to make connections with developers or other individuals like me. </p>
            </div>
        </section>
    );
}

export default AboutComponent;