import React from 'react';
import { Helmet } from 'react-helmet';
import projectLogo from '../img/logo.webp';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <Helmet>
        <style>
          {`
          .header{position:fixed;top:0;left:0;width:100%;padding:1.5rem 10%;display:flex;justify-content:space-between;align-items:center;z-index:100;box-shadow:0 .5rem 1rem rgba(0,0,0,.2)}
          .header::before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background-color:#fff;z-index:-1}
          .logo{display:flex;align-items:center}
          .logo img{width:50px;height:auto}
          .navbar a{font-family:'Poppins',sans-serif;font-size:1rem;text-decoration:none;font-weight:800;margin-left:2.5rem;transition:color .3s ease;}
          .home-btn{color:#0d6d0d}
          .recipes-btn{color:#258d2a}
          .about-us-btn{color:#1f9e13}
          .contact-btn{color:#3cb400}
          .navbar a:hover{color:#89fc0e}
          #check{display:none}
          .icons{position:absolute;left:80%;font-size:2.8rem;cursor:pointer;display:none}
          @media screen and (max-width: 1680px) {

          }
          @media screen and (max-width: 1440px) {
          .header{padding:1rem 2%}
          .navbar{margin-right:5%}
          .logo{margin-left:1%}
          }
          @media screen and (max-width: 1200px) {

          }
          @media screen and (max-width: 1024px) {

          }
          @media (max-width: 992px) {
          .header{padding:.8rem 5%}
          .slideshow{position:absolute;padding:0 auto}
          }
          @media (max-width: 768px) {
          .icons{display:inline-flex}
          #check:checked~.icons #menu-icon{display:none}
          .icons #close-icon{display:none}
          #check:checked~.icons #close-icon{display:block}
          .navbar{position:absolute;top:100%;left:0;width:100%;height:0;background-color:rgba(0,250,33,0.212);-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px);box-shadow:0 .5rem 1rem rgba(0,0,0,.1);overflow:hidden;transition:.3s ease}
          .navbar a{font-family:'Poppins',sans-serif;font-size:700px}
          .navbar a:hover{color:#89fc0e}
          .home-btn{color:#0d6d0d}
          .recipes-btn{color:#258d2a}
          .about-us-btn{color:#1f9e13}
          .contact-btn{color:#3cb400}
          #menu-icon{color:#0e750e}
          #close-icon{color:#0e750e}
          #check:checked~.navbar{height:17.7rem}
          .navbar a{display:block;font-size:1.1rem;margin:1.5rem 0;text-align:center;transform:translateY(-50px);opacity:0;transition:.3s ease}
          #check:checked~.navbar a{transform:translateY(0);opacity:1;transition-delay:calc(.15s * var(--i))}
          }
          @media (max-width: 320px) {
          .icons{position:absolute;left:40%;font-size:2.8rem}
          #check:checked~.icons #menu-icon{display:none}
          .icons #close-icon{display:none}
          #check:checked~.icons #close-icon{display:block}
          .navbar{position:absolute;top:100%;left:0;width:100%;height:0;background-color:rgba(0,250,33,0.212);-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px);box-shadow:0 .5rem 1rem rgba(0,0,0,.1);overflow:hidden;transition:.3s ease}
          .navbar a{font-family:'Poppins',sans-serif;font-size:700px}
          .navbar a:hover{color:#89fc0e}
          .home-btn{color:#0d6d0d}
          .recipes-btn{color:#258d2a}
          .about-us-btn{color:#1f9e13}
          .contact-btn{color:#3cb400}
          #menu-icon{color:#0e750e}
          #close-icon{color:#0e750e}
          #check:checked~.navbar{height:17.7rem}
          .navbar a{display:block;font-size:1.1rem;margin:1.5rem 0;text-align:center;transform:translateY(-50px);opacity:0;transition:.3s ease}
          #check:checked~.navbar a{transform:translateY(0);opacity:1;transition-delay:calc(.15s * var(--i))}
          }          
          `}
        </style>
      </Helmet>

      <header className="header">
        <Link to="/home/" className="logo">
        <img src={projectLogo} alt="logo" width="50" height="50" />
        </Link>

        <input type="checkbox" id="check" />
        <label htmlFor="check" className="icons">
          <i className="bx bx-menu" id="menu-icon"></i>
          <i className="bx bx-x" id="close-icon"></i>
        </label>

        <nav className="navbar">
          <Link to="/home/" style={{ "--i": "0" }} className="home-btn">Home</Link>
          <Link to="/home/recipes" style={{ "--i": "1" }} className="recipes-btn">Recipes</Link>
          <Link to="/home/aboutus" style={{ "--i": "2" }} className="about-us-btn">About Us</Link>
          <Link to="/home/contactus" style={{ "--i": "3" }} className="contact-btn">Contact Us</Link>
        </nav>
      </header>
    </>
  );
}

export default Header;
