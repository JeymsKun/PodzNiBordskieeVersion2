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
        `}</style>
      </Helmet>
      <div className="welcome-text-container">
        <div className="welcome-text">
          <h1>
            Welcome to
            <br /> Podz Ni Bordskiee
          </h1>
          <p>
            The underrated food website. <br /> Food brings people together on
            many different levels.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
