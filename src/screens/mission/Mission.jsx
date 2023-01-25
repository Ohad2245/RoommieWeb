import { motion } from "framer-motion";
import { TypingText } from "../../components/CustomTexts";
// import { TypingText } from '../components';
import styles from "../../styles";
import { fadeIn, staggerContainer } from "../../utils/motion";
import './mission.css';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      id="Mission"
    >
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[30px] text-[16px] text-center text-secondary-white"
      >
        <TypingText title="Mission Statement" textStyles="text-center" />
        <br></br>Roommie aims to provide a renewed sense of excitement to people
        searching for new apartments and roommates by gathering information,
        sorting it in the most efficient way, and simplifying time consuming
        processes.
      </motion.p>
      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
      <br></br>
      <div className="container2">
        <div className="box2">
          <span></span>
          <div className="content2">
            <img
              src="Hackaton.jpg"
              alt="Hackaton"
              width="300px"
              className="testing"
            />
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

export default About;
