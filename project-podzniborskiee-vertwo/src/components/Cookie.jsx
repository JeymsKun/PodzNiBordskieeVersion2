import React from "react";
import { Helmet } from 'react-helmet';

function Cookie() {
  return (
    <div>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Podz Ni Bordskiee | Cookie Notice</title>
        <style>{`
          * {
            padding: 0;
            margin: 0;
          }
          body {
            font-family: 'Poppins', sans-serif;
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.5;
            padding: 25px; 
          }
          .container-cookie span {
            font-size: 1.1rem;
            font-weight: 600;
            text-decoration: underline;
          }
          .container-cookie {
            padding-left: 200px;
            padding-right: 200px;     
          }
        `}</style>
      </Helmet>

      <section>
        <div className="container-cookie">
          <p>
            <span>Notice:</span>
            <br />
            <br />
            Podz Ni Bordskiee uses cookies to enhance your browsing experience and
            provide personalized content. <br />
            By continuing to use our website, you consent to the use of cookies in
            accordance with this notice and our privacy policy.
            <br />
            <br />
            <span>What Are Cookies:</span>
            <br />
            Cookies are small text files stored on your device when you visit a
            website. They help us improve <br />
            your user experience by remembering your preferences and settings.
            <br />
            <span>Types of Cookies We Use:</span>
            <br /> We use both session and persistent cookies to analyze website
            traffic, track user behavior, and personalize content.
            <br /> Third-party cookies may also be used to provide social media
            features and targeted advertisements.
            <br />
            <span>Managing Cookies:</span>
            <br /> You can control and delete cookies through your browser
            settings. However, please note that disabling cookies may <br />
            limit the functionality of certain parts of our website.
            <br />
            <br /> We reserve the right to update or change this cookie notice at
            any time. Any changes will be effective <br />
            immediately upon posting on this page.
            <br />
            <br />
            If you have any questions or concerns about our cookie policy, please
            contact us at:
            <br />
            <span>Email:</span>
            <a href="mailto:info@podznibordskiee.com">info@podznibordskiee.com</a>
            <br />
            <span>Phone:</span> +63363932522
            <br />
            <span>Address:</span> Cagayan de Oro City, Misamis Oriental, Northern
            Mindanao, Philippines, Planet Earth, Solar System, Milky Way.
            <br />
            <br />
            Thank you for your understanding and continued support of Podz Ni
            Bordskiee!
            <br />
          </p>
        </div>
      </section>
    </div>
  );
}

export default Cookie;
