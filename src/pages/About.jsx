import React from "react";
import Hero from "../components/Hero";
import image from "../images/about.jpg";
import { motion } from "framer-motion";

const conainerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 1.5, duration: 1.5 },
  },
  exit: {
    y: "100vw",
    transition: { ease: "easeInOut" },
  },
};

const About = () => {
  return (
    <>
      <motion.div
        variants={conainerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Hero
          image={image}
          AboutStyle="AboutStyle"
          className="top-[74%]"
          title="OmMart Ecommerce"
        />
      </motion.div>
    </>
  );
};

export default About;
