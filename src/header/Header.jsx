import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logos.jpg";
import { useCartContext } from "../context/CartContext";
import { useAuth0 } from "@auth0/auth0-react";
import { motion } from "framer-motion";
import close from "../images/close.svg"
import menu from "../images/menu .svg"


const Header = () => {
  const [open, setOpen] = useState(false);
  const { total_item } = useCartContext();
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  const menus = [
    { name: "HOME", link: "/" },
    { name: "ABOUT US", link: "/about" },
    { name: "PRODUCTS", link: "/products" },
    { name: "CONTACT", link: "/contact" },
  ];

  return (
    <div className="header_section  bg-[#F7F8FB] sticky top-0  ">
      <nav className="flex items-center justify-between sm:h-16 md:h-24 lg:h-16  md:pt-0">
        <img src={logo} alt="logo" className="w-32  ml-7" />
        <img
          src={open ? close :menu }
          className="md:hidden fixed right-5 cursor-pointer z-20 md:top-2 w-10"
          onClick={() => setOpen(!open)}
          alt="menu-icon"
        />
        <div>
          <ul
            className={`w-full fill-available text-center bg-[#ffffff14] backdrop-blur-sm lg:pl-10 md:pr-20 md:static fixed duration-500 ease-linear top-0 md:h-auto h-screen z-10 ${
              !open ? "right-[-100%]" : "right-0 top-16"
            } `}
          >
            {menus?.map((menu, index) => (
              <motion.li
                key={index}
                
                whileHover={{
                  scale:1.1 
                }}
                className={`md:inline-block md:ml-10  md:my-0 my-6 border-b-2 border-transparent hover:border-white duration-300`}
              >
                <NavLink
                  to={menu.link}
                  onClick={() => {
                    setOpen(false);
                  }}
                  className={`black hover:underline hover:text-blue-500 hover:scale-105 cursor-pointer font-Barlow font-bold text-sm inline-block md:py-5 py-3 transition-all duration-300 ease-in-out`}
                >
                  <span className="font-bold mr-1.5">0{index}</span>
                  {menu.name}
                </NavLink>
              </motion.li>
            ))}
            <motion.button
             whileHover={{scale:1.1}}
             transition={{duration:0.2}}
              className="text-white py-1 mx-5 rounded-sm px-5 text-lg font-semibold bg-[#6454f5]  hover:bg-[#2f20ba]"
              onClick={() =>
                isAuthenticated
                  ? logout({ returnTo: window.location.origin })
                  : loginWithRedirect()
              }
            >
              {isAuthenticated ? "Log Out" : "Log In"}
            </motion.button>
          </ul>
          <NavLink to="/cart">
          <img
            src="./src/images/cart.svg"
            className="absolute md:h-7 h-8 md:top-5 z-50 top-4 md:right-10 right-24"
            alt="cart-icon"
          />
          <span className="absolute text-center md:h-3 text-[50%] bg-green-400 rounded-lg w-3 md:top-4 z-50 top-3 md:right-8 right-[26%]">
            {total_item}
          </span>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Header;
