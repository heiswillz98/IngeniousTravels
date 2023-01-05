import React from "react";
import "./ContactFormStyle.css";

const ContactForm = () => {
  return (
    <div className="form-container">
      <h1>Send a message to us</h1>
      <form>
        <input placeholder="Name"></input> <br />
        <input placeholder="Email"></input> <br />
        <input placeholder="Subject"></input> <br />
        <textarea placeholder="Message" rows="4"></textarea>
        <button>Send Message </button>
      </form>
    </div>
  );
};

export default ContactForm;
