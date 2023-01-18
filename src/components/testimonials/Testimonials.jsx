/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { staggerContainer } from "../../utils/motion";
import { motion } from "framer-motion";
import { TypingText } from "../CustomTexts";
import styles from "../../styles";
import "./testimonials.css";

// import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import { Pagination } from "swiper";

// const data = [
//   {
//     avatar1: "/Eliyahu.jpeg",
//     name: "Eliyahu Yifrach",
//     title: "Founder | CEO of Roommie",
//     review: "",
//   },
//   {
//     avatar2: "/Ohad.jpeg",
//     name: "Ohad Cohen",
//     title: "CTO | Fullstack Developer",
//     review: "",
//   },
//   {
//     avatar3: "/Yonatan.jpeg",
//     name: "Yonatan Yavin",
//     title: "Backend Developer",
//     review:
//       "Computer Engineering graduate with strong skills in C, C++, Java, Python. Specializing in embedded systems and software engineering",
//   },
//   {
//     avatar4: "/Liat.jpeg",
//     name: "Liat Shear",
//     title: "Frontend Developer",
//     review: "Computer Science Student",
//   },
//   {
//     avatar5: "/Omer.jpeg",
//     name: "Omer Dayan",
//     title: "Backend Developer",
//     review: `Over the past few years, I've learned a lot about programming in C++ and Python.
//         I carried out interesting projects, I gave programming lessons to students and friends.`,
//   },
//   {
//     avatar6: "/Omer.jpeg",
//     name: "Yael Gargir",
//     title: "CMO",
//     review: `Over the past few years, I've learned a lot about programming in C++ and Python.
//         I carried out interesting projects, I gave programming lessons to students and friends.`,
//   },
// ];

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
      <div class="tree">
	<ul>
		<li>
			<a href="#"><img src="/Eliyahu.jpeg"/></a>
			<ul>
				<li>
        <a href="#">Yael</a>
				</li>
        <li><a href="#">Kosta</a>
        </li>
        <li>
        <a href="#"><img src="/ohad.jpeg"/></a>
					<ul>
          <li>
        <a href="#"><img src="/Yonatan.jpeg"/></a>
					<ul>
						<li><a href="#"><img src="/Omer.jpeg"></img></a></li>
						<li>
							<a href="#">Grand Child</a>
						</li>
						<li><a href="#">Grand Child</a></li>
					</ul>
			</li>
						<li><a href="#"><img src="/Liat.jpeg" /></a></li>
						<li>
							<a href="#"><img src="/Rashi.jpeg" /></a>
						</li>
						<li><a href="#">Sacha</a></li>
						<li><a href="#">Asra</a></li>
					</ul>
			</li>
			</ul>
		</li>
	</ul>
</div>

          {/* <h2 className="font-bold text-white">{name}</h2> */}
          {/* <h4 className="text-stone-300	 font-thin block w-100 m-2">
                {title}
              </h4> */}
          {/* <small className="text-neutral-100 font-thin block w-100 m-2">
                {review}
              </small> */}
      </div>
    </motion.div>
  );
}

export default Testimonials;
