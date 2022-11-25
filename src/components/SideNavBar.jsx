import React from "react";
import "../SideNavBar.css";
import { navigationInfo } from "./navigationInfo";
import { Link, animateScroll as scroll } from "react-scroll";
import Stickybox from "react-sticky-box";

function SideNavBar() {
  return (
    <nav>
      <div className="SideNavBar">
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
                    offset={-100}
                    duration={1000}
                  >
                    <div className="test">
                      <p id="title">{info.title}</p>
                      <p id="icon">{info.bild}</p>
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
