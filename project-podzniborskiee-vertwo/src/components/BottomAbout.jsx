import React from 'react';
import '../css/about-us-style.css';
import '../App.css';
import { Link } from 'react-router-dom';

function BottomAbout() {
    return (
        <div className="bottom-about about-bottom">
            <section className="bottom-area">
                <div className="about-info">
                    <ul className="info">
                        <li><Link to="/legal">Legal Notice</Link></li>
                        <li><Link to="/privacy">Privacy Notice</Link></li>
                        <li><Link to="/cookie">Cookie Notice</Link></li>
                    </ul>
                </div>
            </section>

            <footer className="copyright-podz-ni-bordskiee">
                <div className="footer">
                    <p className="copyright-about">
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

export default BottomAbout;
