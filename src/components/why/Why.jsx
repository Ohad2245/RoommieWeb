/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import AliceCarousel from "react-alice-carousel";
import { motion } from "framer-motion";
import { TypingText } from "../CustomTexts";
import { fadeIn, staggerContainer } from "../../utils/motion";
import Why2 from "./Why2";
import "./why2.css";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img
    src="/6.jpg"
    onDragStart={handleDragStart}
    role="presentation"
    width="300px"
    height="300px"
    className="img"
  />,
  <img
    src="/15.jpg"
    onDragStart={handleDragStart}
    role="presentation"
    height="200px"
    width="300px"
    className="img"

  />,
  <img
    src="/8.jpg"
    onDragStart={handleDragStart}
    role="presentation"
    height="200px"
    width="300px"
    className="img"

  />,
  <img
    src="/10.jpg"
    onDragStart={handleDragStart}
    role="presentation"
    height="200px"
    width="300px"
    className="img"


  />,
  <img
    src="/team2.jpg"
    onDragStart={handleDragStart}
    role="presentation"
    height="200px"
    width="300px"
    className="img"

  />,
  <img
    src="/9.jpg"
    onDragStart={handleDragStart}
    role="presentation"
    height="200px"
    width="300px"
    className="img"

  />,
  <img
    src="/team.jpg"
    onDragStart={handleDragStart}
    role="presentation"
    height="200px"
    width="300px"
    className="img"
  />,
];

const Why = () => {
  const responsive = {
    600: {
      items: 2,
    },
    1024: {
      items: 4,
    },
    0: {
      items: 2,
    },
  };
  return (
    <div id="Why">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`flex-col`}
      >
        <TypingText title="Why Roommie" textStyles="text-center" />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text-[30px] text-[16px] text-center text-secondary-white"
        >
          <small>Why We Exist ?</small>
        </motion.p>
        <Why2 />
        <br></br>
        <div>
          <AliceCarousel
            mouseTracking
            infinite
            autoPlayInterval={1000}
            animationDuration={1500}
            disableDotsControls
            disableButtonsControls
            responsive={responsive}
            items={items}
            autoPlay
            paddingLeft={50}
            paddingRight={50}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Why;
