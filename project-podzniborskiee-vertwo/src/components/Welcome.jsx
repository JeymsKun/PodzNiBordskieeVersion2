import React from 'react';
import { Helmet } from 'react-helmet';

function Welcome() {
  return (
    <div>
      <Helmet>
        <style>{`
          .welcome-text-container {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .welcome-text {
              position: absolute;
              margin-top: 49rem;
              right: 0;
              margin-right: 40rem;
          }
          .welcome-text {
              transform: translate(-50%, -50%);
              color: #fff;
              font-size: 1.5rem;
              line-height: 1.5;
              text-shadow: 5px 5px 5px rgba(0, 0, 0, 1);
          }
          .welcome-text p{
              font-family: 'Poppins', sans-serif;
              font-size: 1.1rem;
              color: #fff;
              font-weight: 600;
          }
          .welcome-text h1 {
              font-family: 'Poppins', sans-serif;
          }
          @media only screen and (max-width: 480px) {
            .welcome-text {
              font-size: 1.8rem;
            }
            .welcome-text p {
              font-size: 1.1rem; 
            }
            .welcome-text {
              position: absolute;
              margin-top: 65rem;
              margin-right: -4rem;
            }
            .welcome-text h1 {
              display: flex;
              flex-direction: column;
            }
            .welcome-text p {
              display: flex;
              flex-direction: column;
            }
          }
          @media only screen and (max-width: 380px) {
            .welcome-text {
              font-size: 1.9rem;
            }
            .welcome-text p {
              font-size: 1.4rem; 
            }
            .welcome-text {
              position: absolute;
              margin-top: 75rem;
              margin-right: -14rem;
            }
            .welcome-text h1 {
              display: flex;
              flex-direction: column;
            }
            .welcome-text p {
              display: flex;
              flex-direction: column;
            }
          }
          @media only screen and (max-width: 360px) {
            .welcome-text {
              font-size: 1.9rem;
            }
            .welcome-text p {
              font-size: 1.3rem; 
            }
            .welcome-text {
              position: absolute;
              margin-top: 75rem;
              margin-right: -14rem;
            }
            .welcome-text h1 {
              display: flex;
              flex-direction: column;
            }
            .welcome-text p {
              display: flex;
              flex-direction: column;
            }
          }
        `}</style>
      </Helmet>
      <div className="welcome-text-container">
        <div className="welcome-text">
          <h1>
            Welcome to
            <br /> Podz Ni <span>Bordskiee</span>
          </h1>
          <p>
            The underrated food website. <br /> Food brings people together <span>on
            many different levels.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
