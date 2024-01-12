import React, { useState } from "react";
import FormatPrice from "../Helper/FormatPrice";
import CardAmountToggle from "./CardAmountToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/CartContext";

import { motion, AnimatePresence } from "framer-motion";

const CartItem = ({ id, name, image, color, price, amount }) => {
  const { handleRemove, setDecrease, setIncrease } = useCartContext();
  const [showItems, setShowItems] = useState(true);

  const handleExit = () => {
    setShowItems(false);
  
  };

  return (
    <>
      <AnimatePresence>
        {showItems && (
          <motion.div
          exit={{y:-100}}
          transition={{
            delay:2.5,
            ease:"linear",
            duration:2.5,

            }}
           className="flex justify-center items-center">
            <div className="container md:w-[80%] w-[100%]">
              <div className="cart_heading grid md:grid-cols-5 grid-cols-3 items-center">
                <div className="cart-image--name  lg:grid-cols-2 sm:grid-cols-1 ">
                  <div>
                    <figure>
                      <img src={image} />
                    </figure>
                  </div>
                  <div>
                    <p className="text-sm md:text-base">{name}</p>
                    <div className="color-div">
                      <p className="text-sm md:text-base">color:</p>
                      <div
                        className="color-style"
                        style={{ backgroundColor: color }}
                      ></div>
                    </div>
                  </div>
                </div>
                {/* Price  */}
                <div className="cart-hide hidden md:block">
                  <p>
                    <FormatPrice price={price} />
                  </p>
                </div>
                {/* Quantity  */}
                <CardAmountToggle
                  amount={amount}
                  setDecrease={() => setDecrease(id)}
                  setIncrease={() => setIncrease(id)}
                />
                {/* Sub total  */}
                <div className="cart-hide hidden md:block">
                  {<FormatPrice price={price * amount} />}
                </div>

                {/* Delete Icon  */}
                <div onClick={handleExit}  className="mx-auto">
                  <FaTrash
                    onClick={() => handleRemove(id)}
                    className="text-red-600 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CartItem;
