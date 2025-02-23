import React from "react";
import { AiFillHome } from "react-icons/ai";
import { SlInfo } from "react-icons/sl";
import { AiFillTool } from "react-icons/ai";
import { MdOutlineContactPage } from "react-icons/md";
import "../styles/NavBar.css";


// Decided to make the navigation information a separate component since its used in both "NavigationBar.jsx" and "MobileNavBar.jsx"
//"Bild" is a icon that i used to have next to the text but its not used anymore  
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
