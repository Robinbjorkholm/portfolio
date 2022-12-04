import React, { useState, useEffect } from "react";
import "../../HomeSection.css";
import getAge from "../utility/ageCalculator";
import "../../SideNavBar.css";
import { motion } from "framer-motion";

function HomeSection() {
  const [myAge, setAge] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      setAge(getAge("1998/07/08"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="Section" id="Home">
      <motion.h1
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, type: "tween" }}
        initial={{ x: -1000, opacity: 0 }}
        className="helloworld"
      >
        Hello World
      </motion.h1>
      <p className="myAge"> {myAge}</p>
    </div>
  );
}

export default HomeSection;
