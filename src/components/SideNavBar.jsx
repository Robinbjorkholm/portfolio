import React from "react";
import "../SideNavBar.css";
import { navigationInfo } from "./navigationInfo";
import { Link, animateScroll as scroll } from "react-scroll";
import Stickybox from "react-sticky-box";
import { motion } from "framer-motion";

function SideNavBar() {
  return (
    <nav>
      <div className="SideNavBar">
        <Stickybox>
          <ul className="SideBarList">
            {navigationInfo.map((info, key) => {
              return (
                <motion.li key={key} className="rad">
                  <Link
                    activeClass="Active"
                    spy={true}
                    to={info.title}
                    smooth={true}
                    offset={-100}
                    duration={1000}
                  >
                    <motion.p
                      id="title"
                      initial={{ x: "-100vw", opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 1.4, type: "tween" }}
                    >
                      {info.title}
                    </motion.p>
                    <p id="icon">{info.bild}</p>
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </Stickybox>
      </div>
    </nav>
  );
}

export default SideNavBar;
