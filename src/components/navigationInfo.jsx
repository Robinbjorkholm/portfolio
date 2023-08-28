import React from "react";
import { AiFillHome } from "react-icons/ai";
import { SlInfo } from "react-icons/sl";
import { AiFillTool } from "react-icons/ai";
import { MdOutlineContactPage } from "react-icons/md";
import "../styles/SideNavBar.css";

export const navigationInfo = [
  {
    title: "Home",
    bild: <AiFillHome />,
  },
  {
    title: "About",
    bild: <SlInfo />,
  },
  {
    title: "Projects",
    bild: <AiFillTool />,
  },

  {
    title: "Contact",
    bild: <MdOutlineContactPage />,
  },
];
