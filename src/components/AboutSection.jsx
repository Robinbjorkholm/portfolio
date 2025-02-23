import React, { useState, useEffect } from "react";
import WhoAmI from "./gridItems/WhoAmI";
import TechStack from "./gridItems/TechStack";
import Hobbies from "./gridItems/Hobbies";
import "../styles/AboutSection.css";
import { motion, useAnimation } from "framer-motion";
import getYear from "./utility/yearCalculator";
import { VscGithubInverted } from "react-icons/vsc";
import { useInView } from "react-intersection-observer";

function AboutSection() {
  //calculating the age here instead of calculating it inside the component that gets rendered, so its hopefully done by the time the user scrolls to this
  const [myAge, setAge] = useState();
  useEffect(() => {
    const interval = setInterval(() => {
      setAge(getYear("1998/07/08", 9));
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  const { ref: grid1Ref, inView: grid1View } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const { ref: grid2Ref, inView: grid2View } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const { ref: grid3Ref, inView: grid3View } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const grid1Animation = useAnimation();
  const grid2Animation = useAnimation();
  const grid3Animation = useAnimation();

  useEffect(() => {
    if (grid1View) {
      grid1Animation.start({
        x: 0,
        opacity: 1,
        transition: { duration: 1 },
      });
    }
  }, [grid1View, grid1Animation]);

  useEffect(() => {
    if (grid2View) {
      grid2Animation.start({
        x: 0,
        opacity: 1,
        transition: { duration: 1.3 },
      });
    }
  }, [grid2View, grid2Animation]);

  useEffect(() => {
    if (grid3View) {
      grid3Animation.start({
        x: 0,
        opacity: 1,
        transition: { duration: 1.6 },
      });
    }
  }, [grid3View, grid3Animation]);

  return (
    <div className="about-section" id="About">
      <h2 className="about-header">ABOUT</h2>
      <div className="grid-container">
        <motion.div
          ref={grid1Ref}
          initial={{ x: "-300px", opacity: 0 }}
          animate={grid1Animation}
          className="grid-item"
        >
          <WhoAmI myAge={myAge} />
        </motion.div>
        <motion.div
          ref={grid2Ref}
          initial={{ x: "300px", opacity: 0 }}
          animate={grid2Animation}
          className="grid-item"
        >
          <TechStack />
        </motion.div>
        <motion.div
          ref={grid3Ref}
          initial={{ x: "-300px", opacity: 0 }}
          animate={grid3Animation}
          className="grid-item"
        >
          <Hobbies />
        </motion.div>
      </div>
    </div>
  );
}

export default AboutSection;
