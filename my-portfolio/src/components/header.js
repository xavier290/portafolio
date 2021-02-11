import '../static/components/header.css';
import {
    Link
} from 'react-router-dom';


function Header() {
    return (
        <header>
            <div className="logo"><Link to="/">J</Link></div>
            <nav className="menu">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;