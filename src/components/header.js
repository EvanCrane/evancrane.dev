import LandingComponent from './landing';
import './header.css';

function HeaderComponent(props) {
    return (
        <header className="bg-content-parallax">
            <nav>
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
            </nav>
            <LandingComponent />
        </header>
    );
}

export default HeaderComponent;