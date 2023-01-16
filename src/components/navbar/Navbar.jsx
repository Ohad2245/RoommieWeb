import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "../../styles";
import { navVariants } from "../../utils/motion";
import { Box } from "@mui/system";
import { Toolbar } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import NavLinks from "../navLinks/NavLinks";
// import { CryptoState } from "../CryptoContext";
import { MdRestaurantMenu } from "react-icons/md";
import "./navbar.css";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  // backgroundColor: alpha(theme.palette.common, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(-5),
    marginTop: theme.spacing(-3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "transparent",
  color: theme.palette.common.white,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "white",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function Navbar() {
  // const {user} = CryptoState();
  const [active, setActive] = useState(false);

  const humburger = (
    <img
      src="/menu.svg"
      alt="menu"
      className="w-[24px] h-[24px] object-contain"
      onClick={() => setActive(!active)}
    />
  );

  const closeIcon = (
    <MdRestaurantMenu
      size="25px"
      color="white"
      onClick={() => setActive(!active)}
    />
  );

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <Box className="w-[24px] h-[24px] object-contain">
          <Toolbar>
            <Search>
              <SearchIconWrapper>
                <img
                  src="/search.svg"
                  alt="search"
                  className="w-[24px] h-[24px] object-contain "
                />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Toolbar>
        </Box>

        {/* <h2 className="font-thin text-[24px] leading-[30px] text-white text-center">
          R O O M M I
        </h2> */}
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
        </div>

        {active ? closeIcon : humburger}
        {active && <NavLinks />}
        {/* {user ? <UserSideBar/> : <AuthModal/>} */}
      </div>
    </motion.nav>
  );
}

export default Navbar;
