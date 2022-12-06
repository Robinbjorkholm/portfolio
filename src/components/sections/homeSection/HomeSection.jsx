import React from "react";
import "./HomeSection.css";

import { motion } from "framer-motion";

function HomeSection() {
  return (
    <div className="Section" id="Home">
      <motion.h1
        initial={{ x: "-100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, type: "tween", bounce: 1 }}
        className="helloWorld"
      >
        "HelloWorld"
      </motion.h1>
    </div>
  );
}

export default HomeSection;
