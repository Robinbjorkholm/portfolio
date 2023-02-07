import React, { useState, useEffect } from "react";
import "../SideNavBar.css";
import { navigationInfo } from "./navigationInfo";
import { Link, animateScroll as scroll } from "react-scroll";
import Stickybox from "react-sticky-box";

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
                <li key={key} className="rad">
                  <Link
                    activeClass="Active"
                    spy={true}
                    to={info.title}
                    smooth={true}
                    offset={123}
                    duration={1000}
                  >
                    <p id="title">{info.title}</p>
                    <p id="icon">{info.bild} </p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Stickybox>
      </div>
    </nav>
  );
}

export default SideNavBar;
