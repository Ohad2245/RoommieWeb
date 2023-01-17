import React from "react";
import { staggerContainer } from "../../utils/motion";
import { motion } from "framer-motion";
import { TitleText, TypingText } from "../CustomTexts";
import styles from "../../styles";
import "./testimonials.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const data = [
  {
    avatar: "/Eliyahu.jpeg",
    name: "Eliyahu Yifrach",
    title: "Founder | CEO of Roommie",
    review:""
  },
  {
    avatar: "/Ohad.jpeg",
    name: "Ohad Cohen",
    title: "CTO | Fullstack Developer",
    review:""
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
    avatar: "/Omer.jpeg",
    name: "Yael Gargir",
    title: "CMO",
    review: `Over the past few years, I've learned a lot about programming in C++ and Python.
        I carried out interesting projects, I gave programming lessons to students and friends.`,
  },
];

function Testimonials() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      id="Testimonials"
    >
      <TitleText title="Review a look at the team " textStyles="text-center" />
      <TypingText title="The winning team" textStyles="text-center" />

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review, title }, index) => {
          return (
            <SwiperSlide
              key={index}
              className="bg-indigo-900	text-center p-8 rounded-3xl select-none"
            >
              <div className="friend__avatar">
                <img src={avatar} alt="" />
              </div>
              <h2 className="font-bold text-white">{name}</h2>
              <h4 className="text-stone-300	 font-thin block w-100 m-2">
                {title}
              </h4>
              <small className="text-neutral-100 font-thin block w-100 m-2">
                {review}
              </small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
}

export default Testimonials;
