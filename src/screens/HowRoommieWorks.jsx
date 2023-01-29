import { motion } from 'framer-motion';
import { TypingText, StartSteps } from '../components';

import styles from '../styles';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import '../components/contact/contact.css';
import { useTranslation } from 'react-i18next';

const HowRoommieWorks = () => {
  const { t } = useTranslation();

  function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    // const reveals = this.myRef.current;

    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);
return(
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants('left')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/4fc2ba69-2011-4876-8178-28731ed094e7.png"
          alt="get-started"
          className="w-[70%] h-[70%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title={t("How")} />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px] reveal">
            <StartSteps/>
              
        </div>
      </motion.div>
    </motion.div>
  </section>
)};

export default HowRoommieWorks;
