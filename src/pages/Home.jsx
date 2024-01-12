import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Trusted from "../components/Trusted";
import FeatureProduct from "../components/FeatureProduct";
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

const Home = () => {
  return (
    <>
      <motion.div
        variants={conainerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Hero className="top-[68%]" title="OmMart Store" />
        <FeatureProduct />
        <Services />
        <Trusted />

      </motion.div>
    </>
  );
};

export default Home;
