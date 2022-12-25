import React from "react";
import { useState } from "react";
import { navigationInfo } from "./navigationInfo";
import hamburgericon from "../pictures/hamburgericon.jpg";
import { Link, animateScroll as scroll } from "react-scroll";
import "../mobileNavigation.css";
import { motion } from "framer-motion";

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
          })}{" "}
        </ul>
      ) : null}
      <h1>
        <img
          src={hamburgericon}
          alt="hamburger icon"
          className="hamburgerIcon"
          onClick={() => setMobileNav(!toggleMobileNav)}
        />
      </h1>
    </div>
  );
}

export default MobileNavBar;
