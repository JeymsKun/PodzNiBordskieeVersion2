import '../css/style.css';
import '../css/responsive.css';
import '../App.css';
import projectLogo from '../img/logo.webp';
import { Link } from 'react-router-dom';

function HeaderRecipes() {
 
  return (
    <header className="header">
    <Link to="/home" className="logo">
      <img src={projectLogo} alt="logo" />
    </Link>

    <input type="checkbox" id="check" />
    <label htmlFor="check" className="icons">
      <i className="bx bx-menu" id="menu-icon"></i>
      <i className="bx bx-x" id="close-icon"></i>
    </label>

    <nav className="navbar">
      <Link to="/home" style={{ "--i": "0" }} className="home-btn">Home</Link>
      <Link to="/recipes" style={{ "--i": "1" }} className="recipes-btn">Recipes</Link>
      <Link to="/aboutus" style={{ "--i": "2" }} className="about-us-btn">About Us</Link>
      <Link to="/contactus" style={{ "--i": "3" }} className="contact-btn">Contact Us</Link>
    </nav>
  </header>
  );
}

export default HeaderRecipes;
