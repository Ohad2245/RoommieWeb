/* eslint-disable jsx-a11y/alt-text */
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import styles from "../styles";
import { footerVariants } from "../utils/motion";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-light md:text-[50px] text-[50px] text-white">
          Download The App
        </h4>
        <button
          type="button"
          className="flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px]"
        >
          <img
            src="/headset.svg"
            alt="headset"
            className="w-[24px] h-[24px] object-contain"
          />
          <span className="font-normal text-[16px] text-white">
            Enter Roommie
          </span>
        </button>
      </div>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">Roommie</h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2022 - Roommie. All right reserved
          </p>
          <div>
          <Button className="gap-2">
            <a
              href="https://www.facebook.com/profile.php?id=100000848391807"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/twitter.svg" />
            </a>
          </Button>
          <Button>
            <a
              href="https://www.linkedin.com/in/ohad-cohen-6b2393211/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/linkedin.svg" />
            </a>
          </Button>
          <Button>
            <img src="/instagram.svg" />
          </Button>
          <Button>
            <a
              href="https://www.facebook.com/profile.php?id=100000848391807"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/facebook.svg" />
            </a>
          </Button>
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
