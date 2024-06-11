import React from 'react';
import '../css/contact-us-style.css';
import '../css/contact-us-responsive.css';
import '../App.css';
import { Link } from 'react-router-dom';

function Bottom() {
    return (
        <div className="bottom-adjust adjust-bottom">
            <section className="bottom-area">
                <div className="more-info">
                    <ul className="all">
                        <li><Link to="/legal">Legal Notice</Link></li>
                        <li><Link to="/privacy">Privacy Notice</Link></li>
                        <li><Link to="/cookie">Cookie Notice</Link></li>
                    </ul>
                </div>
            </section>

            <footer className="copyright-podz-ni-bordskiee">
                <div className="footer-copyright">
                    <p className="copyright">
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

export default Bottom;
