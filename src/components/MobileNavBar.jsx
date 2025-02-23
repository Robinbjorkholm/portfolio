import React from "react";
import { useState } from "react";
import { navigationInfo } from "./navigationInfo";
import { Link, animateScroll as scroll } from "react-scroll";
import "../styles/mobileNavigation.css";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { TfiClose } from "react-icons/tfi";


// This component is used for rendering the mobile navigation for mobile users, for the desktop navigation go to "NavigationBar.jsx"
function MobileNavBar() {
  const [toggleMobileNav, setMobileNav] = useState(false);

  return (
    <div className="mobileNavigation">
      {toggleMobileNav ? (
        <ul className="navigation">
          {navigationInfo.map((info, key) => {
            return (
              <motion.li
                initial={{ y: "-100vw", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, type: "tween", bounce: 1 }}
                key={key}
                className="row"
              >
                <Link
                  onClick={() => {
                    setMobileNav(!toggleMobileNav);
                  }}
                  activeClass="Active"
                  to={info.title}
                  spy={true}
                  smooth={true}
                  offset={-10}
                  duration={500}
                >
                  <div id="title">{info.title}</div>
                </Link>
              </motion.li>
            );
          })}
        </ul>
      ) : null}
      {!toggleMobileNav ? (
        <GiHamburgerMenu
          alt="hamburger icon"
          className="hamburgerIcon"
          onClick={() => setMobileNav(!toggleMobileNav)}
        />
      ) : (
        <TfiClose
          alt="hamburger icon"
          className="closeMobileNav"
          onClick={() => setMobileNav(!toggleMobileNav)}
        />
      )}
    </div>
  );
}

export default MobileNavBar;
