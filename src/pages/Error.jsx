import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../components/Button";

const Error = () => {
  return (
    <>
      <div className="main-section">
        <div className="text-center space-y-6 text-lay1">
          <h1 className="text-9xl">404</h1>
          <h2 className="text-3xl capitalize text-slate-400">
            UH OH! You're Lost.
          </h2>
          <p className="capitalize">
            the website you were trying to reach couldn't be found on the
            server.
          </p>

          <button className="text-white py-2 rounded-sm px-5 text-lg font-semibold bg-[#6454f5] hover:bg-[#4f488c]">
            <NavLink to="/">Go To Home</NavLink>
          </button>
         

        </div>
      </div>
    </>
  );
};

export default Error;
