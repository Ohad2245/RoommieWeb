import React from "react";
import { staggerContainer } from "../../utils/motion";
import { motion } from "framer-motion";
import { TypingText } from "../CustomTexts";
import styles from "../../styles";
import "./testimonials.css";

import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const data = [
  {
    avatar1: "/Eliyahu.jpeg",
    name: "Eliyahu Yifrach",
    title: "Founder | CEO of Roommie",
    review: "",
  },
  {
    avatar2: "/Ohad.jpeg",
    name: "Ohad Cohen",
    title: "CTO | Fullstack Developer",
    review: "",
  },
  {
    avatar3: "/Yonatan.jpeg",
    name: "Yonatan Yavin",
    title: "Backend Developer",
    review:
      "Computer Engineering graduate with strong skills in C, C++, Java, Python. Specializing in embedded systems and software engineering",
  },
  {
    avatar4: "/Liat.jpeg",
    name: "Liat Shear",
    title: "Frontend Developer",
    review: "Computer Science Student",
  },
  {
    avatar5: "/Omer.jpeg",
    name: "Omer Dayan",
    title: "Backend Developer",
    review: `Over the past few years, I've learned a lot about programming in C++ and Python.
        I carried out interesting projects, I gave programming lessons to students and friends.`,
  },
  {
    avatar6: "/Omer.jpeg",
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
      <TypingText title="Who we are" textStyles="text-center" />
      <div>
              <div className="tree">
                <ul>
                  <li>
                    <img src="/Eliyahu.jpeg" alt="1" />
                    <ul>
                      <li>
                        <img src='ohad.jpeg' alt="2" />
                      </li>
                      <li>
                      <img src="/Eliyahu.jpeg" alt="1" />
                      </li>
                      <li>
                      <img src="/Eliyahu.jpeg" alt="1" />
                      </li>
                      <li>
                      <img src="/Eliyahu.jpeg" alt="1" />
                      </li>
                      <ul className="ohad">
                        <li><img src="/Liat.jpeg" alt="1" /></li>
                        <li><img src="/Rashi.jpeg" alt="1" /></li>
                        <li><img src="/Eliyahu.jpeg" alt="1" /></li>
                      </ul>
                    </ul>
                  </li>
                </ul>

                {/* <h2 className="font-bold text-white">{name}</h2> */}
                {/* <h4 className="text-stone-300	 font-thin block w-100 m-2">
                {title}
              </h4> */}
                {/* <small className="text-neutral-100 font-thin block w-100 m-2">
                {review}
              </small> */}
              </div>
      </div>
    </motion.div>
  );
}

export default Testimonials;
