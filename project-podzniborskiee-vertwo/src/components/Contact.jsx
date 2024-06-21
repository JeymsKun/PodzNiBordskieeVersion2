import React from "react";
import { Helmet } from "react-helmet";

function Contact() {
  return (
        <div>
            <Helmet>
                <style>{`
                    .contact-info {
                        position: relative;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    .container-info {
                        position: absolute;
                        top: 0;
                        margin-top: 10rem;
                    }
                    .container-info {
                        color: #258d2a;
                        font-family: 'Poppins', sans-serif;
                        line-height: 1.6;
                        font-weight: 400;
                    }
                    .container-info h1, h2 {
                        text-align: center;
                        color: #0d6d0d;
                    }
                    .container-info h1 {
                        font-size: 2rem;
                    }
                    .container-info h2 {
                        font-size: 3rem;
                    }
                    .container-info span {
                        font-size: 1.3rem;
                    }
                    .number {
                        text-decoration: underline;
                        color: #3cb400;
                    }
                    .call {
                        font-size: 1rem;
                        font-weight: 450;
                    }
                    .write {
                        font-size: 1rem;
                        font-weight: 450;
                    }
                    .gmail {
                        color: #3cb400;
                        text-decoration: underline;
                    }
                `}</style>
            </Helmet>
            <section className="contact-info">
                <div className="container-info">
                    <h1>Need Some Help?</h1>
                    <h2>Contact Us</h2>

                    <p className="call">
                    <span>You can call us:</span>
                    <br />
                    If you have any questions or comments, please call us on:
                    <br />
                    <br />
                    <span className="number">6666 666 6666</span>
                    <br />
                    Mon-Sun 4am-11pm
                    <br />
                    <br />
                    </p>

                    <p className="write">
                    <span>You can write to us on Gmail:</span>
                    <br />
                    If you're writing us via gmail, you can add this{" "}
                    <span className="gmail">more@podznibordskiee.com</span> and <br />
                    please provide the following information so we can respond to your
                    message:
                    <br />
                    <br />
                    <span>* Title</span>
                    <br />
                    <span>* First Name</span>
                    <br />
                    <span>* Last Name</span>
                    <br />
                    <span>* Address</span>
                    <br />
                    <span>* Postcode</span>
                    <br />
                    <span>* Contact Number</span>
                    <br />
                    <span>* Message</span>
                    <br />
                    </p>
                </div>
            </section>
        </div>
    );
}

export default Contact;
