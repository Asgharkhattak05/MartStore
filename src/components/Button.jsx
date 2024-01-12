import React from "react";
import { motion } from "framer-motion";

const Button = () => {
  return (
    <motion.button
      whileHover={{
        scale: 1.2,
        textShadow:"0px 0px 8px rgb(255,255,255)",
        boxShadow:"0px 0px 8px rgb(255,255,255)",
        transition: { duration: 1 },
      }}
      
      className="text-white py-2 rounded-sm px-5 text-lg font-semibold bg-[#6454f5]  hover:bg-[#2f20ba]"
    >
      Shop Now
    </motion.button>
  );
};

export default Button;
