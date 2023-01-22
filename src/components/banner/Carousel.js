/* eslint-disable jsx-a11y/alt-text */
import { makeStyles } from "@mui/styles";
import React from "react";
import AliceCarousel from "react-alice-carousel";

const useStyles = makeStyles((theme) => ({
  carousel: {
    height: "50%",
    display: "flex",
    alignItems: "center",
  },
}));

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img
    src='/1.jpg'
    onDragStart={handleDragStart}
    role="presentation"
    width="300px"
    height='300px'
  />,
  <img
    src="/2.jpg"
    onDragStart={handleDragStart}
    role="presentation"
    height='300px'
    width="300px"
  />,
  <img
    src="/3.jpg"
    onDragStart={handleDragStart}
    role="presentation"
    height='300px'
    width="300px"
  />,
];


const Carousel = () => {
  const classes = useStyles();
  const responsive ={
    0:{
        items:2,
    },
    512:{
        items:4,
    },
  }
  return (
    <div className={classes.carousel}>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        responsive={responsive}
        items={items}
        autoPlay
      />
    </div>
  );
};

export default Carousel;
