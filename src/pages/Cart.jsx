import React from "react";
import { useCartContext } from "../context/CartContext";
import styled from "styled-components";
import CartItem from "../components/CartItem";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helper/FormatPrice";
import { useAuth0 } from "@auth0/auth0-react";
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
    y: "-100vw",
    transition: { ease: "easeInOut" },
  },
};


const Cart = () => {
  const { cart, clearCart, total_price, shipping_fee } = useCartContext();
  const { user, isAuthenticated } = useAuth0();
  // console.log(cart);

  if (cart == 0) {
    return (
      <div className="flex justify-center items-center h-[30vh]">
        <h3 className="font-bold text-2xl">No Item In Cart</h3>
      </div>
    );
  }

  return (
    <motion.div
    variants={conainerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
    >
    <Wrapper>
      <div className="flex  pb-10 justify-center items-center">
        <div className="w-[80%]">
          {isAuthenticated && (
            <div className="">
              <img src={user.profile} alt={user.name} />
              <h2 className="">{user.name}</h2>
            </div>
          )}
        </div>
      </div>
      <div className="main-div flex justify-center items-center">
        <div className="container md:w-[80%] w-[100%] font-bold capitalize">
          <div className="cart_heading  grid md:grid-cols-5 grid-cols-3 ">
            <p>Item</p>
            <p className="cart-hide hidden md:block">Price</p>
            <p className="sm:mx-auto lg:mx-0">Quantity</p>
            <p className="cart-hide hidden md:block">Subtotal</p>
            <p className="mx-auto">Remove</p>
          </div>
          <hr />
        </div>
      </div>

      <div className="cart-item">
        {cart.map((curElem) => {
          return <CartItem key={curElem.id} {...curElem} />;
        })}
      </div>
      <hr />
      <div className="flex justify-center items-center py-10">
        <div className="md:w-[79%] sm:w[85%] flex justify-between">
          <NavLink to="/Main_Products">
            <motion.button 
            whileHover={{
              scale: 1.2,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
              transition: { duration: 1 },
            }}
            className="text-white py-2 rounded-sm md:px-10 sm:px-2 text-lg font-semibold bg-[#6454f5]  hover:bg-[#2f20ba]">
              Continue Shoping
            </motion.button>
          </NavLink>
          <motion.button
            whileHover={{
              scale: 1.2,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
              transition: { duration: 1 },
            }}
            onClick={clearCart}
            className="text-white sm:ml-2 py-2 rounded-sm md:px-6 sm:px-1 text-lg font-semibold bg-[#ee493c]  hover:bg-[#bf2a20]"
          >
            Clear Cart
          </motion.button>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="w-[80%] flex justify-end">
          <div className="space-y-5  md:w-[30vw] bg-[#F7F8FB] py-10 px-10">
            <div className="flex  items-center justify-between font-bold">
              <p>SubTotal:</p>
              <span className=" text-green-600 ">
                <FormatPrice price={total_price} />
              </span>
            </div>

            <div className="flex items-center justify-between font-bold">
              <p>Shiping Fee :</p>
              <span className=" text-green-600">
                <FormatPrice price={shipping_fee} />
              </span>
            </div>
            <hr />
            <div className="flex  items-center  justify-between font-bold">
              <p className="text-xl">Order Total:</p>
              <span className=" text-green-600">
                <FormatPrice price={total_price + shipping_fee} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
</motion.div>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;

  .grid-four-column {
    grid-template-columns: repeat(4, 1fr);
  }

  .grid-five-column {
    grid-template-columns: repeat(4, 1fr) 0.3fr;

    align-items: center;
  }
  .cart-heading {
    text-align: center;
    text-transform: uppercase;
  }
  hr {
    margin-top: 1rem;
  }
  .cart-item {
    padding: 0.5rem 0;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }

  .cart-user--profile {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.2rem;
    margin-bottom: 5.4rem;

    img {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
    }
    h2 {
      font-size: 2.4rem;
    }
  }
  .cart-user--name {
    text-transform: capitalize;
  }
  .cart-image--name {
    /* background-color: red; */
    align-items: center;
    display: grid;
    text-transform: capitalize;
    text-align: left;
    img {
      max-width: 4rem;
      height: 4rem;
      object-fit: contain;
      color: transparent;
    }

    .color-div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;

      .color-style {
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
      }
    }
  }

  .cart-two-button {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;

    .btn-clear {
      background-color: #e74c3c;
    }
  }

  .amount-toggle {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
    }
  }

  .remove_icon {
    font-size: 1.6rem;
    color: #e74c3c;
    cursor: pointer;
  }

  .order-total--amount {
    width: 100%;
    margin: 4.8rem 0;
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;

    .order-total--subdata {
      border: 0.1rem solid #f0f0f0;
      display: flex;
      flex-direction: column;
      gap: 1.8rem;
      padding: 3.2rem;
    }
    div {
      display: flex;
      gap: 3.2rem;
      justify-content: space-between;
    }

    div:last-child {
      background-color: #fafafa;
    }

    div p:last-child {
      font-weight: bold;
    }
  }
`;

export default Cart;
