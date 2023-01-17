/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./card.css";

function Card() {
  return (
    <div className="container">
      <div className="box">
        <span></span>
        <div
          className="content"
          data-hover="Our team is composed of individuals whose actions match their words."
        >
          <h2 className="card1">Accountability</h2>
        </div>
      </div>

      <div className="box">
        <span></span>
        <div
          className="content"
          data-hover="We aim to assess scenarios from multiple angles and encourage playing devil's advocate - this makes us more sure of the actions we take."
        >
          <h2 className="card1">Critical thinking</h2>
        </div>
      </div>
      <div className="box">
        <span></span>
        <div
          className="content"
          data-hover="We use open conversation to promote a culture of growth and communication, allowing us to be more intentional about our decisions and actions."
        >
          <h2 className="card1">Transparency</h2>
        </div>
      </div>
    </div>
  );
}

export default Card;
