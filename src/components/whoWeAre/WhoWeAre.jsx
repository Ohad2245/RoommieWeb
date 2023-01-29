/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { staggerContainer } from "../../utils/motion";
import { motion } from "framer-motion";
import { TypingText } from "../CustomTexts";
import styles from "../../styles";
import "./whoWeAre.css";
import "swiper/css";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";

function WhoWeAre() {
  const {t} = useTranslation();

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col whoWeAre`}
      id="Testimonials"
    >
      <TypingText title={t("Who We Are")} textStyles="text-center" />
      <div className="testimonial">
        <div className="team">
        <div className="team2">
            <div>
              <img src="Eliyahu.jpg" className="client__avatar" />
            </div>
            <div>
              <p className="client__name">Eliyahu Yifrach</p>
              <small className="client__title">Founder | CEO of Roommie</small>
            </div>
          </div>
          <div className="team2">
            <div>
              <img src="Yael.jpeg" className="client__avatar" />
            </div>
            <div>
              <p className="client__name">Yael Gargir</p>
              <small className="client__title">CMO of Roommie</small>
            </div>
          </div>
          <div className="team2">
            <div>
              <img src="Ohad.jpeg" className="client__avatar" />
            </div>
            <div>
              <p className="client__name">Ohad Cohen</p>
              <small className="client__title">CTO | Fullstack Developer</small>
            </div>
          </div>
          <div className="team2">
            <div>
              <img src="Yonatan.jpeg" className="client__avatar" />
            </div>
            <div>
              <p className="client__name">Yonatan Yavin</p>
              <small className="client__title">Backend Developer</small>
            </div>
          </div>
          <div className="team2">
            <div>
              <img src="Liat.jpeg" className="client__avatar" />
            </div>
            <div>
              <p className="client__name">Liat Shear</p>
              <small className="client__title">Frontend Developer</small>
            </div>
          </div>
          <div className="team2">
            <div>
              <img src="Omer.jpeg" className="client__avatar" />
            </div>
            <div>
              <p className="client__name">Omer Dayan</p>
              <small className="client__title">Backend Developer</small>
            </div>
          </div>
          <div className="team2">
            <div>
              <img src="Rashi.jpeg" className="client__avatar" />
            </div>
            <div>
              <p className="client__name">Rashi Pachino</p>
              <small className="client__title">Frontend Developer</small>
            </div>
          </div>
        </div>
      </div>
      {/* ); */}
      {/* })} */}
    </motion.div>
  );
}

export default WhoWeAre;
