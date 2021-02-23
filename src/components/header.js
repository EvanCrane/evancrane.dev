import { Link } from 'react-router-dom';
import './header.css';

function HeaderComponent(props) {
    return (
        <header className="bg-content-parallax">
            <nav>
                <nav id="mainNav" class="mainNav">
                    <div class="navbar-brand">
                        <h2>Evan Crane</h2>
                    </div>
                    <div id="navLinks" class="nav-links">
                        <Link to="/about" class="nav-link" id="nav-about">About</Link>
                        <Link to="/skills" class="nav-link" id="nav-skills">Skills</Link>
                        <Link to="/contact" class="nav-link" id="nav-contact">Contact</Link>
                    </div>
                </nav>
            </nav>
        </header>);
}



export default HeaderComponent;