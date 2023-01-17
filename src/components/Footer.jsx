/* eslint-disable jsx-a11y/alt-text */
import { Button } from "@mui/material";
import { motion } from "framer-motion";
// import { CryptoState } from "../CryptoContext";
import styles from "../styles";
import { footerVariants } from "../utils/motion";
import '../../src/components/navbar/navbar.css';

const Footer = () => {
  // const { user } = CryptoState();
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.paddings} py-8 relative`}
    >
      <div className="footer-gradient" />
      <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
        {/* <div className="flex items-center justify-between flex-wrap gap-5">
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

        </div> */}
        <div className="flex flex-col">
          <div className="mb-[50px] h-[2px] bg-white opacity-10" />
          <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="roommie font-thin text-[24px] leading-[30px] text-white text-center ">
          <p>R</p>
          <p>O</p>
          <p>O</p>
          <p>M</p>
          <p>M</p>
          <p>I</p>
        
          <div className="title grid gap-1 md:gap-1">
          <div className="e"></div>
          <div className="e"></div>
          <div className="e"></div>
        </div>
        </div>            <p className="font-normal text-[14px] text-white opacity-50">
              Copyright © 2022 - Roommie. All right reserved
            </p>
            <div>
              {/* <Button className="gap-2">
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                  <img src="/twitter-icon.png" width="27" height="20" />
                </a>
              </Button> */}
              <Button>
                <a
                  href="https://www.linkedin.com/company/roommie/about/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/800px-Linkedin_icon.svg.png"
                    width="27"
                    height="20"
                  />
                </a>
              </Button>

              {/* <Button>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/instagram-icon.png" width="27" height="20" />
                </a>
              </Button>

              <Button>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/2021_Facebook_icon.svg.png"
                    width="27"
                    height="20"
                  />
                </a>
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
