import React from "react";
import Button from "./Button";
import heroImg from "../images/hero.jpg";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";


const Hero = ({ title, className, image }) => {
  // console.log(className);
  return (
    <>
      <div className="main-section text-lay1">
        <div className="inner-div flex md:flex-row flex-col  ">
          <div>
            <p className="text-slate-400">WELCOME TO</p>
            <h1 className="text-3xl  font-bold">{title}</h1>
            <p className="py-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
              tempora quasi recusandae ipsa velit commodi est minima non quos
              temporibus?
            </p>

            

            <NavLink to="/Main_Products">
              <Button />
            </NavLink>
          </div>
          <motion.div
            initial={{ x: 750 }}
            animate={{ x: 0 }}
            transition={{
              delay: 0.5,
              type: "spring",
              stiffness: 120,
              duration: 0,
            }}
          >
            <div
              className={`${className} bg-[#b8b0f7] sm:hidden md:block  
              md:w-[24%] 
              md:h-[30%]  md:right-28 lg:right-56  
              md:top-36
              absolute -z-50 `}
            ></div>
            <img
              src={heroImg}
              alt=""
              className="md:w-[90%] w-[100%] z-50 mt-9"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;
