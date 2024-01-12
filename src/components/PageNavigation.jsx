import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const PageNavigation = ({ title }) => {
  return (

    <div className="pt-8 pl-10 text-2xl bg-[#f7f8fb]">
    <NavLink to="/" className="hover:underline"> Home </NavLink> <span className="text-[#5D3610]">/{title}</span>

    <h1 className="hover:underline"><NavLink to="/Main_Products">Go To Products</NavLink></h1> 

    </div>
  )
};

export default PageNavigation;