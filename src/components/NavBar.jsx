import React, { useState, useEffect, useRef } from "react";
import { navigationInfo } from "./navigationInfo";
import { Link, animateScroll as scroll } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/NavBar.css";

// This component is used for rendering the navigation bar on top of the screen for desktop users, for the mobile navigation go to "MobileNavBar.jsx"
function NavBar() {
  const [showNavigationBar, setShowNavigationBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navbarToggle = useRef(null);

  //Just adds a event for scrolling that calls controlNavBarOnscroll function
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavBarOnScroll);
      return () => {
        window.removeEventListener("scroll", controlNavBarOnScroll);
      };
    }
  }, [lastScrollY]);

  //This function gets called everytime the user scrolls the page and just checks if the user scrolled up or down, and then shows or hides the navigation bar 
  const controlNavBarOnScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY < lastScrollY) {
        setShowNavigationBar(true);
      } else {
        setShowNavigationBar(false);
      }
      setLastScrollY(window.scrollY);
    }
  };

  return (
    <>
      {/*This <nav> item is only for toggling the navigation bar when moving the mouse over it, it is always visible but has a transparent color  */}
      <nav
        className="toggle-navbar"
        ref={navbarToggle}
        onMouseOver={() => setShowNavigationBar(true)}
      >
        {/*The navigation bar itself, used framer motion for transitioning instead of 2 separate css classes for show and hidden  */}
        <AnimatePresence>
          {showNavigationBar && (
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="navigation-bar"
            >
              <ul>
                {navigationInfo.map((info, key) => {
                  return (
                    <li key={key}>
                      <Link
                        activeClass="active"
                        spy={true}
                        to={info.title}
                        smooth={true}
                        offset={123}
                        duration={1000}
                      >
                        <p id="title">{info.title}</p>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}

export default NavBar;
