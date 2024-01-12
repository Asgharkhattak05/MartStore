import React from "react";
import FilterSection from "../components/FilterSection";
import Sort from "../components/Sort";
import MainProductList from "../components/MainProductList";
import { motion } from "framer-motion";
const conainerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 2.5,
    },
  },
  exit: {
    y: "100vw",
    transition: { ease: "easeInOut" },
  },
};

const Products = () => {
  return (
    <>
      <motion.div
      variants={conainerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="main-section flex justify-center items-center">
          <div className="products_section w-[90%] grid grid-cols-12   ">
            <div className="filter-section   md:w-[90%] md:col-span-3 col-span-12 ">
              <FilterSection />
            </div>
            <div className="product-view-sort  w-[100%] md:col-span-9 col-span-12 ">
              <div className="sort_filter">
                <Sort />
              </div>
              <div className="main_product_list">
                <MainProductList />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Products;
