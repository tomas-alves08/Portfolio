import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Img from "./Img";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_1kfuljp",
        "template_71tzx59",
        form.current,
        "fXXy-179AfhSnPyMu"
      )
      .then(
        (result) => {
          console.log(result.message);
          alert("Message sent successfully");
        },
        (err) => {
          console.log(err.text);
        }
      );
  };

  return (
    <>
      <div className="title-container" id="contact">
        <Img img="contact-title" src="./icons/contact-icon.png" />
        <p className="section-title">Want to have a chat?</p>
      </div>
      <div className="form-container">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input
            type="text"
            className="form-item"
            id="name"
            name="from_name"
            // value=""
            placeholder="Your name..."
          />
          <input
            type="email"
            className="form-item"
            id="email"
            name="from_email"
            // value=""
            placeholder="Your e-mail address..."
          />
          <textarea
            className="form-item"
            id="message"
            name="message"
            // value=""
            placeholder="Your message..."
            rows="7"
            cols="50"
          />
          <div className="btn-form-container">
            <button type="submit" value="Send" className="project-btn">
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
