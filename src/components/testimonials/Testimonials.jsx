import React from "react";
import { staggerContainer } from "../../utils/motion";
import { motion } from "framer-motion";
import { TitleText, TypingText } from "../CustomTexts";
import styles from "../../styles";
import './testimonials.css';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from 'swiper';

const data = [
    {
      avatar: '/roy.jpg',
      name: "Shoval Soli",
      review:
        "Ohad has an excellent ability in solving complex code problems, even in many different types of code.A guy with a particularly high academic ability, an excellent partner for the development team",
    },
    {
      avatar: '/shay.jpeg',
      name: "Roy Elshtein",
      review:
        "Ohad is at first, a wonderful, kind and fun person to work with.Ohad has a high work ethic, committed to learning and improving his level of expertise within the organization. I felt calm and had complete trust while we worked together.",
    },
    {
      avatar: '/shay.jpeg',
      name: "Shay Gali",
      review:
        "From my acquaintance with Ohad, he is a serious and responsible person, he loves to help others and he is not afraid of challenges even from the most difficult.",
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
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="bg-indigo-900	text-center p-8 rounded-3xl select-none">
              <div className="friend__avatar">
                <img src={avatar} alt=""/>
              </div>
              <h5 className="font-bold text-white">{name}</h5>
              <small className="text-neutral-200 font-thin block w-100 m-2">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>

    </motion.div>
  );
}

export default Testimonials;
