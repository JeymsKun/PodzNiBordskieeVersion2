import React from 'react';
import '../css/recipes-style.css';
import '../App.css';
import { Link } from 'react-router-dom';

function BottomRecipes() {
    return (
        <div className="bottom-adjust-recipes recipes-adjust-bottom">
            <section className="bottom-area">
                <div className="more-info-recipes">
                    <ul className="all-recipes">
                        <li><Link to="/legal">Legal Notice</Link></li>
                        <li><Link to="/privacy">Privacy Notice</Link></li>
                        <li><Link to="/cookie">Cookie Notice</Link></li>
                    </ul>
                </div>
            </section>

            <footer className="copyright-podz-ni-bordskiee">
                <div className="footer-copyright-recipes">
                    <p className="copyright-recipes">
                        © 2024 Podz Ni Bordskiee<br />
                        Follow us on Facebook <i className="fa-brands fa-facebook"></i><a
                            href="https://www.facebook.com/bordzkie.bedz" style={{ textDecoration: 'none', color: 'white' }}>
                            @PodzNiBordskiee</a>
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default BottomRecipes;
