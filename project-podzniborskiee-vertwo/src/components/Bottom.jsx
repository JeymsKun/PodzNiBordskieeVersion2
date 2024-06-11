import '../css/style.css';
import '../css/responsive.css';
import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Bottom() {
  return (
   
    <div className="bottom-area-adjust area-adjust-bottom">
      <section className="bottom">
        <div className="more-information">
          <ul className="important">
            <li>
              <Link to="/legal">Legal Notice</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy Notice</Link>
            </li>
            <li>
              <Link to="/cookie">Cookie Notice</Link>
            </li>
          </ul>
        </div>
      </section>

      <footer className="copyright-PodzNiBordskiee">
        <div className="copyright-footer">
          <p className="copyright-name">
            © 2024 Podz Ni Bordskiee
            <br />
            Follow us on Facebook <i className="fa-brands fa-facebook"></i>
            <a
              href="https://www.facebook.com/bordzkie.bedz"
              style={{ textDecoration: "none", color: "white" }}
            >
              @PodzNiBordskiee
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Bottom;
