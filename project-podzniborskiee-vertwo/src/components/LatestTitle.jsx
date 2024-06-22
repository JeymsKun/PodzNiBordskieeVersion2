import React from 'react';
import { Helmet } from 'react-helmet';

function LatestTitle() {
  return (
    <div>
      <Helmet>
        <style>{`
          .welcome-homepage {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center; 
          }
          .welcome-the-most-message {
              position: absolute;
              margin-top: 30rem;
          }        
          .top-message {
              font-family: 'Poppins', sans-serif;
              font-size: 2rem; 
              font-weight: 600;
              margin-bottom: 20px;
              line-height: 1.8;
              color: #258d2a;
          }
         @media only screen and (max-width: 480px) {
            .welcome-the-most-message {
              position: absolute;
              margin-top: 25rem; 
              margin-right: -28rem;
              width: 150%;
            }
            .top-message {
              font-size: 1.8rem; 
              margin-bottom: 10px; 
              line-height: 1.9; 
            }
          }
         @media only screen and (max-width: 380px) {
            .welcome-the-most-message {
              position: absolute;
              margin-top: 25rem; 
              margin-right: -28rem;
            }
            .top-message {
              font-size: 1.7rem; 
              margin-bottom: 10px; 
              line-height: 1.9; 
              font-weight: 800;
              width: 150%;
            }
          }
          @media only screen and (max-width: 360px) {
            .welcome-the-most-message {
              position: absolute;
              margin-top: 25rem; 
              margin-right: -28rem;
            }
            .top-message {
              font-size: 1.7rem; 
              margin-bottom: 10px; 
              line-height: 1.9; 
              font-weight: 800;
              width: 150%;
            }
          }
        `}</style>
      </Helmet>
      <section className="welcome-homepage">
        <div className="welcome-the-most-message">
          <p className="top-message">
            Here's our Top 8 Adobo Dishes for this Year.
          </p>
        </div>
      </section>
    </div>
  );
}

export default LatestTitle;
