import React, { useRef } from "react";
function ContactComponent(props) {
    const contactRef = useRef(null);
    return (
        <section ref={contactRef} id="contact" className="contact">
            <h1> Contact me</h1>
            <div className="line"></div>
            <h4>Say hello, give me feedback, or check out my work!</h4>
            <div className="contact-icons">
                <a className="link-email" href="mailto:evanf.crane@gmail.com">
                    <i className="fas fa-envelope fa-3x"></i>
                </a>
                <a className="link-linkedin" href="https://www.linkedin.com/in/evan-crane/">
                    <i className="fab fa-linkedin fa-3x"></i>
                </a>
                <a className="link-github" href="https://github.com/EvanCrane/">
                    <i className="fab fa-github fa-3x"></i>
                </a>
            </div>
        </section>
    );
}

export default ContactComponent;