import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import BuildIcon from "@mui/icons-material/Build";
import InfoIcon from "@mui/icons-material/Info";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import "../SideNavBar.css";

export const navigationInfo = [
  {
    title: "Home",
    bild: <HomeIcon />,
  },
  {
    title: "About",
    bild: <InfoIcon />,
  },
  {
    title: "Projects",
    bild: <BuildIcon />,
  },

  {
    title: "Contact",
    bild: <ContactPageIcon />,
  },
];
