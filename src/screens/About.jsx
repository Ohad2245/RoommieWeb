
import { motion } from 'framer-motion';
import { TypingText } from '../components';

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
    >
      <TypingText title="| About Roommie" textStyles="text-center" />
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Roommie </span>
        "If today in 2022 you can find a relationship and love through an app, why can't you likewise find an apartment or roommates through an app?"- Eliyahu Yifrach
        Hi,
        We've all heard stories from our friends and family about finding roommates and or apartments here in Israel. Some of us have even experienced the struggle ourselves on numerous occasions; the feeling of endless scrolling on WhatsApp, Yad2, and the plethora of Facebook groups. 
        Roomie is here to change that- to transform the real estate industry into an app and website that helps its users in whatever housing related search they have, and provide them with a stellar platform as they go hunting. We all face so many challenges living in Israel sadly on so many levels, finding a place to live shouldn't be one of our struggles.
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
