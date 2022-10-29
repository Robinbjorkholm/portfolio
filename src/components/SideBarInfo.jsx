import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import BuildIcon from "@mui/icons-material/Build";
import InfoIcon from "@mui/icons-material/Info";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import "../SideNavBar.css";


export const SideBarInfo = [
  {
    title: "Home",
    bild: <HomeIcon />,
  },
  {
    title: "About",
    bild: <InfoIcon />,
  },
  {
    title: "Stats",
    bild: <LeaderboardIcon />,
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
