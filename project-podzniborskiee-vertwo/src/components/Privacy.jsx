import React from "react";
import { Helmet } from 'react-helmet';

function Privacy() {
  return (
    <div>

      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Podz Ni Bordskiee | Privacy Notice</title>

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
          .container-privacy span {
            font-size: 1.1rem;
            font-weight: 600;
            text-decoration: underline;
          }
          .container-privacy {
            padding-left: 100px;
            padding-right: 100px;     
          }
        `}</style>
      </Helmet>

      <section>
        <div className="container-privacy">
          <p>
            <span>Privacy Notice:</span>
            <br />
            <br />
            At Podz Ni Bordskiee, we are committed to protecting your privacy and
            safeguarding your personal information. <br />
            This privacy notice outlines how we collect, use, disclose, and
            protect the information you provide when using our website.
            <br />
            <br />
            <span>Information We Collect:</span>
            <br /> When you visit Podz Ni Bordskiee, we may collect personal
            information such as your name, email address, and <br />
            any other information you voluntarily provide through contact forms or
            newsletter subscriptions.
            <br />
            <span>How We Use Your Information:</span>
            <br /> We may use the information we collect to communicate with you,
            provide personalized content, improve our website, and send you
            promotional materials related to our services. We will not sell, rent,
            or lease your personal information to third parties.
            <br />
            <span>Cookies:</span>
            <br /> We use cookies and similar technologies to enhance your
            browsing experience, analyze website traffic, <br />
            and personalize content. By using our website, you consent to the use
            of cookies in accordance with our cookie policy.
            <br />
            <span>Data Security:</span>
            <br /> We implement appropriate technical and organizational measures
            to protect your <br />
            personal information from unauthorized access, disclosure, alteration,
            or destruction.
            <br />
            <span>Your Rights:</span>
            <br /> You have the right to access, correct, or delete your personal
            information held by Podz Ni Bordskiee. <br />
            If you have any questions or concerns about our privacy practices,
            please contact us using the information provided below.
            <br />
            <span>Changes to Privacy Policy:</span>
            <br /> We reserve the right to update or change this privacy notice at
            any time. Any changes will be effective immediately <br />
            upon posting on this page.
            <br />
            <br />
            If you have any questions or concerns about our privacy practices,
            please contact us at:
            <br />
            <span>Email:</span>{" "}
            <a href="mailto:info@podznibordskiee.com">info@podznibordskiee.com</a>
            <br />
            <span>Phone:</span> +63363932522
            <br />
            <span>Address:</span> Cagayan de Oro City, Misamis Oriental, Northern
            Mindanao, Philippines, Planet Earth, Solar System, Milky Way.
            <br />
            <br />
            Thank you for visiting Podz Ni Bordskiee!
            <br />
          </p>
        </div>
      </section>
    </div>
  );
}

export default Privacy;
