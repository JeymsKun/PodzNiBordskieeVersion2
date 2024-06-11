import React from "react";
import "../css/contact-us-style.css";
import "../css/contact-us-responsive.css";
import "../App.css";

function Bottom() {
  return (
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
    );
}

export default Bottom;
