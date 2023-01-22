/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import AliceCarousel from "react-alice-carousel";
import { motion } from "framer-motion";
import { TypingText } from "../CustomTexts";
import { staggerContainer } from "../../utils/motion";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img
    src="/1.jpg"
    onDragStart={handleDragStart}
    role="presentation"
    width="300px"
    height="300px"
  />,
  <img
    src="/2.jpg"
    onDragStart={handleDragStart}
    role="presentation"
    height="200px"
    width="300px"
  />,
  <img
    src="/3.jpg"
    onDragStart={handleDragStart}
    role="presentation"
    height="200px"
    width="300px"
  />,
  <img
    src="/4.jpg"
    onDragStart={handleDragStart}
    role="presentation"
    height="200px"
    width="300px"
  />,
  <img
    src="/5.jpg"
    onDragStart={handleDragStart}
    role="presentation"
    height="200px"
    width="300px"
  />,
  <img
    src="/6.jpg"
    onDragStart={handleDragStart}
    role="presentation"
    height="200px"
    width="300px"
  />,
  <img
    src="/7.jpg"
    onDragStart={handleDragStart}
    role="presentation"
    height="200px"
    width="300px"
  />,
  <img
    src="/8.jpg"
    onDragStart={handleDragStart}
    role="presentation"
    height="200px"
    width="300px"
  />,
];

const Carousel = () => {
  const responsive = {
    0: {
      items: 1,
    },
    512: {
      items: 1,
    },
  };
  return (
    <div id="Why" className="h-2/4 flex items-center">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`flex-col`}
      >
        <TypingText title="Why Roommie" textStyles="text-center" />

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
        />
      </motion.div>
    </div>
  );
};

export default Carousel;
