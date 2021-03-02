import React, { useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './sections.css';
function ContactComponent(props) {
    const contactRef = useRef(null);
    return (
        <section ref={contactRef} id="contact" className="contact">
            <h1> Contact me</h1>
            <div className="line"></div>
            <h4>Say hello, give me feedback, or check out my work!</h4>
            <div className="contact-icons">
                <a className="link-email" href="mailto:evanf.crane@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} size="3x"></FontAwesomeIcon>
                </a>
                <a className="link-linkedin" href="https://www.linkedin.com/in/evan-crane/">
                    <FontAwesomeIcon icon={faLinkedin} size="3x"></FontAwesomeIcon>
                </a>
                <a className="link-github" href="https://github.com/EvanCrane/">
                    <FontAwesomeIcon icon={faGithub} size="3x"></FontAwesomeIcon>
                </a>
            </div>
        </section>
    );
}

export default ContactComponent;