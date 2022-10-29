import React from "react";
import "../SideNavBar.css";
import { useState } from "react";
import { SideBarInfo } from "./SideBarInfo";
import { Link, animateScroll as scroll } from "react-scroll";
import Stickybox from "react-sticky-box";

function SideNavBar() {
  return (
    <nav>
      <div className="SideNavBar">
        <Stickybox>
          <ul className="SideBarList">
            {SideBarInfo.map((info, key) => {
              return (
                <li key={key} className="rad">
                  <Link
                    activeClass="Active"
                    spy={true}
                    to={info.title}
                    smooth={true}
                    offset={-100}
                    duration={1000}
                  >
                    <div id="title">
                      {info.title}
                      {info.bild}
                    </div>
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
