/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { staggerContainer } from "../../utils/motion";
import { motion } from "framer-motion";
import { TypingText } from "../CustomTexts";
import styles from "../../styles";
import "./whoWeAre.css";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: "/Eliyahu.jpeg",
    name: "Eliyahu Yifrach",
    title: "Founder | CEO of Roommie",
    review: "",
  },
  {
    avatar: "/Yael.jpeg",
    name: "Yael Gargir",
    title: "CMO",
    review: ``,
  },
  {
    avatar: "/Ohad.jpeg",
    name: "Ohad Cohen",
    title: "CTO | Fullstack Developer",
    review: "",
  },
  {
    avatar: "/Yonatan.jpeg",
    name: "Yonatan Yavin",
    title: "Backend Developer",
    review:
      "Computer Engineering graduate with strong skills in C, C++, Java, Python. Specializing in embedded systems and software engineering",
  },
  {
    avatar: "/Liat.jpeg",
    name: "Liat Shear",
    title: "Frontend Developer",
    review: "Computer Science Student",
  },
  {
    avatar: "/Omer.jpeg",
    name: "Omer Dayan",
    title: "Backend Developer",
    review: `Over the past few years, I've learned a lot about programming in C++ and Python.
        I carried out interesting projects, I gave programming lessons to students and friends.`,
  },
  {
    avatar: "/Rashi.jpeg",
    name: "Rashi Pachino",
    title: "Frontend Developer",
    review: '',
  },
  
];

function WhoWeAre() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      id="Testimonials"
    >
      <TypingText title="Who we are" textStyles="text-center" />
      <Swiper
        className="container testimonials__container reveal"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review ,title}, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div class="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__title">{title}</small>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
}

export default WhoWeAre;
