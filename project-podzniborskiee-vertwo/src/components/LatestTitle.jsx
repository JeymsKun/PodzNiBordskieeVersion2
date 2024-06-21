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
              margin-top: 20rem;
          }        
          .top-message {
              font-family: 'Poppins', sans-serif;
              font-size: 2rem; 
              font-weight: 600;
              margin-bottom: 20px;
              line-height: 1.8;
              color: #258d2a;
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
