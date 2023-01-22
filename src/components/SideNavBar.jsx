import React, { useState, useEffect } from "react";
import "../SideNavBar.css";
import { navigationInfo } from "./navigationInfo";
import { Link, animateScroll as scroll } from "react-scroll";
import Stickybox from "react-sticky-box";
import { motion } from "framer-motion";

function SideNavBar() {
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY < lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };
  console.log(window.scrollY);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <nav>
      <div className={`SideNavBar ${show && "SideNavBarHidden"}`}>
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
                    offset={0}
                    duration={1000}
                  >
                    <motion.p
                      id="title"
                      initial={{ y: "-100vh", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 1.4, type: "tween" }}
                    >
                      {info.title}
                    </motion.p>
                    <p id="icon">{info.bild} </p>
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
