import React, { useRef } from "react";
import "./contactSection.css";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaPhone } from "react-icons/fa";

function ContactSection() {
  const refForm = useRef();

  const sendEmail = e => {
    e.preventDefault();
    emailjs
      .sendForm("service_136bjbl", "template_8ai1ch4", refForm.current, "5kptPeHCffGSde3Gy")
      .then(
        result => {
          emailSuccess();
        },
        error => {
          emailFailure();
        }
      );
    e.target.reset();
    document.getElementById("submitButton").disabled = true;
    setTimeout(function () {
      document.getElementById("submitButton").disabled = false;
    }, 3000);
  };

  function enableEmail() {
    if (document.getElementById("email").value.indexOf("@") !== -1) {
      document.getElementById("submitButton").disabled = false;
    } else {
      document.getElementById("submitButton").disabled = true;
    }
  }

  const emailSuccess = () =>
    toast.success("I will get back to you soon !😎", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const emailFailure = () =>
    toast.error("Error sending Email !😢", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  return (
    <div className="SectionContact" id="Contact">
      <h1 id="contactHeader"> Contact</h1>

      <form className="contactForm" ref={refForm} name="contactForm">
        <input
          placeholder="Your name"
          type="text"
          id="name"
          name="name"
          required
          onChange={enableEmail}
        ></input>

        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="Example@domain.com"
          onChange={enableEmail}
        ></input>

        <textarea
          placeholder="Message"
          type="text"
          id="message"
          name="message"
          required
          onChange={enableEmail}
        ></textarea>

        <button type="Submit" id="submitButton" disabled onKeyUp={sendEmail} title="Email required">
          Send
        </button>
      </form>

      <div id="phoneInfo">
        {" "}
        <FaPhone id="phoneIcon" />
        <a id="phoneNumber" href="tel:+358504210169">
          +358(0)504210169
        </a>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="light"
      />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="light"
      />
    </div>
  );
}

export default ContactSection;
