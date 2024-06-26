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
          .area-adjust-bottom{position:absolute;top:0;left:0;margin-top:240rem;margin-left:22rem}
          .more-information{position:absolute;top:2%;right:0;margin-right:33rem}
          .important{list-style-type:none}
          .important a{font-weight:500;font-family:'Poppins',sans-serif;line-height:3;color:#fff}
          .copyright-footer{position:absolute;top:0;right:28%;margin-top:15rem}
          .copyright-name{text-align:center;color:#fff}
          .fa-facebook{color:#fff;font-size:20px}

          @media only screen and (max-width: 480px) {
          .bottom-area-adjust{width:100%;height:50%}
          .area-adjust-bottom{margin-top:450rem;margin-left:11rem}
          .more-information{top:5%;margin-right:20rem;font-size:1.2rem}
          .copyright-footer{right:16%}
          } 
          @media only screen and (max-width: 400px) {
          .bottom-area-adjust{width:100%;height:60%}
          .area-adjust-bottom{margin-top:430rem;margin-left:11rem}
          .more-information{top:5%;margin-right:15rem;font-size:1.2rem}
          .copyright-footer{right:16%;margin-top:65%}
          } 
          @media only screen and (max-width: 380px) {
          .bottom-area-adjust{margin:50px;width:120%;height:40%}
          .area-adjust-bottom{margin-top:430rem;margin-left:17rem}
          .more-information{top:5%;margin-right:19rem;font-size:1.3rem}
          .copyright-footer{right:16%;margin-top:67%}
          }
          @media only screen and (max-width: 360px) {
          .bottom-area-adjust{margin:50px;swidth:120%;height:40%}
          .area-adjust-bottom{margin-top:430rem;margin-left:16rem}
          .more-information{top:5%;margin-right:17rem;font-size:1.3rem}
          .copyright-footer{right:15%;margin-top:66%}
          }
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
