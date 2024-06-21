import React from "react";
import { Helmet } from "react-helmet";

function About() {
    return (
        <div>
            <Helmet>
                <style>{`
                    .about-us-container {
                        position:  relative;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    .container-about-us {
                        position: absolute;
                        max-width: 800px;
                        top: 25%;
                        margin-left: 13rem;
                        padding: 5rem;
                        
                    }
                    .container-about-us {
                        background-color: #fff;
                        border-radius: 8px;
                        box-shadow: 0 0 10px rgb(12, 155, 19);
                    }
                    .container-about-us h1 {
                        color: #0e750e;
                        text-align: center;
                        border-top: 1px solid #ddd;
                        border-bottom: 1px solid #ddd;
                    }
                    .container-about-us p {
                        line-height: 1.6;
                        font-weight: 400;
                        color: #1f9e13;
                    }
                    .team-member h2 {
                        color: #0e750e;
                        border-top: 1px solid #ddd;
                        border-bottom: 1px solid #ddd;
                    }
                    .team-member p {
                        color: #1f9e13;
                        font-weight: 400;
                    }
                    .team-member {
                        font-family: 'Poppins', sans-serif;
                        font-size: 16px;
                    }
                    .team-member li {
                        list-style: none;
                        font-weight: 400;
                        color: #1f9e13;
                        text-decoration: underline;
                    }
                `}</style>
            </Helmet>
            <div className="container-about-us about-us-container">
                <div className="team-member">
                    <h1>About Us - Podz Ni Bordskiee</h1>
                    <br/>
                    <p>Welcome to Podz Ni Bordskiee, your ultimate destination for exploring culinary delights and food-related
                        content.<br/> At Podz Ni Bordskiee, we are passionate about food and sharing our love for delicious cuisines
                        from around the world.</p>
                    <p>Our mission is to inspire and empower food enthusiasts of all levels to discover new recipes, cooking
                        techniques, and food cultures. Whether you're a seasoned chef or a novice in the kitchen, we have
                        something for everyone.</p>
                    <p>Join us on a gastronomic journey as we explore mouthwatering dishes, share cooking tips and tricks, and
                        celebrate the joy of cooking and eating together. From traditional family recipes to innovative culinary
                        creations,<br /> there's always something exciting to discover at Podz Ni Bordskiee.</p>
                    <p>Thank you for being part of our community. We look forward to sharing our love for food with you!</p>

                    <br/>
                    <h2>Meet Our Team</h2>
                    <br/>
                    <p>Podz Ni Bordskiee was created by a team of passionate food enthusiasts who share a love for culinary
                        exploration and creativity.</p>
                    <p>Our team members are:</p>
                    <ul>
                        <li>James David R. Maserin - Co-founder & Web Developer</li>
                        <li>Christian Paul P. Amantiad- Co-founder & Web Developer</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default About;
