import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

function Bottom() {
  return (
    <>
      <Helmet>
        <style>
          {`
          .bottom-area-adjust{position:relative;display:flex;justify-content:center;align-items:center;background-image:linear-gradient(to right,#0d6d0d,#258d2a,#1f9e13,#3cb400,#5eb600);width:50%;height:40%}
          .area-adjust-bottom{position:absolute;top:0;left:0;margin-top:250rem;margin-left:20rem}
          .more-information{position:absolute;top:2%;right:0;margin-right:33rem}
          .important{list-style-type:none}
          .important a{font-weight:500;font-family:'Poppins',sans-serif;line-height:3;color:#fff}
          .copyright-footer{position:absolute;top:0;right:28%;margin-top:15rem}
          .copyright-name{text-align:center;color:#fff}
          .fa-facebook{color:#fff;font-size:20px}
          `}
        </style>
      </Helmet>

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

        <footer className="copyright-footer">
          <div className="copyright-name">
            <p>
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
    </>
  );
}

export default Bottom;
