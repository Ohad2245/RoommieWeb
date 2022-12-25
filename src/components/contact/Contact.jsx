import React from "react";
import { TitleText, TypingText } from "../CustomTexts";
import { motion } from "framer-motion";
import { staggerContainer } from "../../utils/motion";
import styles from "../../styles";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import "./contact.css";
import emailjs from "emailjs-com";
import { useRef } from "react";
import { Button } from "@mui/material";


function Contact() {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_uama4xr",
      "template_kf8z3kc",
      form.current,
      "KQZ1FUigy-wCZY0js"
    );

    e.target.reset();
  };
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewpost={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| Get In Touch" textStyles="text-center" />
      <TitleText title="Contact Me" textStyles="text-center" />
      <div className="container contact__container reveal">
        <div className="contact__options reveal">
          <article className="contact__option reveal">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>ohad909881122@gmail.com</h5>
            <a
              href="mailto:ohad909881122@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>OhadCohen</h5>
            <a
              href="https://m.me/100000848391807"
              target="_blank"
              rel="noreferrer"
            >
              Send a Massage
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>050-909-8812</h5>
            <a
              href="https://api.whatsapp.com/send?phone=0509098812"
              target="_blank"
              rel="noreferrer"
            >
              Send a Massage
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} className="form reveal">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <Button type="submit" className="btn btn-primary">
            Send Message
          </Button>
        </form>
      </div>
    </motion.div>
  );
}

export default Contact;
