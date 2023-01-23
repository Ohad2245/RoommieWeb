import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import "./why2.css";

const Why2 = () => {
  return (
      <div class="container experience__container reveal">
          <div class="experience__content">
            <article className="experience__details ">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="text-white">
                <p>Reduce frustration</p>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="text-white">
                <p>Reduce time and energy exerted in searching</p>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="text-white">
                <p>Reduce gap between what people want vs. what they settle for</p>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="text-white">
                <p>Ease the competition</p>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="text-white">
                <p>Standardize transfer of information between landlord and tennant	</p>
              </div>
            </article>
            <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
              <div className="text-white">
              <p>Reintroduce excitement to the search process</p>
              </div>
            </article>
          </div>
        </div>
  );
};

export default Why2;
