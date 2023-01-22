
import { motion } from 'framer-motion';
// import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

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
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[30px] text-[16px] text-center text-secondary-white"
      >
        {/* <span className="font-extrabold text-white ">Mission Statement</span><br></br> */}
        <span className="font-extrabold">Mission Statement:</span> Roommie aims to provide a renewed sense of excitement to people searching for new apartments and roommates by gathering information, sorting it in the most efficient way, and simplifying time consuming processes.
      </motion.p>
      <motion.img
        variants={fadeIn('up' , 'tween' , 0.3 , 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"/>

    </motion.div>
  </section>
);

export default About;
