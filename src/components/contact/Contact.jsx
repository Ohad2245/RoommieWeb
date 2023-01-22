import React from "react";
import {TypingText } from "../CustomTexts";
import { motion } from "framer-motion";
import { staggerContainer } from "../../utils/motion";
import styles from "../../styles";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import "./contact.css";
// import emailjs from "emailjs-com";
// import { useRef } from "react";

function Contact() {
  // const form = useRef();
  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm(
  //     "service_rsz4p62",
  //     "template_kf8z3kc",
  //     form.current,
  //     "KQZ1FUigy-wCZY0js"
  //   );

  //   e.target.reset();
  // };
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      id="Contact"
    >
      <TypingText title="Contact Us" textStyles="text-center" />
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__options-icon" />
            <h4 className="font-bold">Email</h4>
            <h5 className="text-neutral-700 email" data-hover="test">Roommie@gmail.com</h5>
            <a
              href="mailto:Roommie@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="text-white font-extrabold"

            >
              Send Email
            </a>
          </article>

          {/* <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Eliyahu Yifrach</h5>
            <a
              href="https://m.me/100000848391807"
              target="_blank"
              rel="noreferrer"
            >
              Send a Massage
            </a>
          </article> */}

          <article className="contact__option">
          <RiMessengerLine className="contact__options-icon" />
          <h4 className="font-bold">Whatsapp</h4>
            <h5 className="text-neutral-700">050-909-8812</h5>
            <a
              href="https://api.whatsapp.com/send?phone=0509098812"
              target="_blank"
              rel="noreferrer"
              className="text-white font-extrabold"
            >
              Send a Massage
            </a>
          </article>
        </div>
        {/* <form ref={form} onSubmit={sendEmail} className="form reveal">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            className="text-white"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="text-white"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            className="text-white"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form> */}
      </div>
    </motion.div>
  );
}

export default Contact;
