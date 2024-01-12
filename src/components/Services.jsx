import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faShieldHalved,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { GiCash } from "react-icons/gi";


const Services = () => {
  return (
    <>
      <div className="main-section">
        <div className="inner-div md:grid-cols-3 grid-cols-1">
          <div className=" flex md:flex-col service1 bg-gray-300 p-4  md:pb-14 rounded-md  text-center"
         >
            <div className="bg-white rounded-full md:w-24 w-16 md:h-24 h-12 flex items-center justify-center mx-auto mb-4">
              <FontAwesomeIcon
                icon={faTruckFast}
                className="md:text-4xl text-2xl text-blue-600"
              />
            </div>
            <div>
              <h1>Super Fast and Free Delivery</h1>
               <div className="  text-sm pt-2 description">
               <ul >
                <li>Swift and efficient .
                </li>
                <li>Free and speedy .</li>
                <li>Timely to your doorstep .</li>
                
               </ul>
               </div>
            </div>
          </div>

          <div className="header_section  text-center ">
            <div className="mb-4 flex bg-gray-300 rounded-md py-5 px-5 justify-center items-center">
              <div className="bg-white rounded-full sm:w-[64px] w-[50px] h-12 sm:h-16 flex items-center justify-center mx-auto">
                <FontAwesomeIcon
                  icon={faShieldHalved}
                  className="text-2xl text-blue-600"
                />
              </div>
              <h1 className="mt-2">Non-Contact Shiping</h1>
            </div>
            <div className="md:mb-4 flex bg-gray-300 rounded-md py-6 px-5 justify-center items-center">
              <div className="bg-white rounded-full sm:w-[64px] w-[60px] h-12 sm:h-16 flex items-center justify-center mx-auto">
                <GiCash className="text-2xl text-blue-600" />
              </div>
              <h1 className="mt-2">Money-back Guarenteed</h1>
            </div>
          </div>

          <div className=" flex md:flex-col service1 bg-gray-300 p-4 md:mb-0 mb-24 md:pb-14 rounded-md  text-center" >
            <div className="bg-white rounded-full md:w-24 w-[40%] md:h-24 h-12 flex items-center justify-center mx-auto mb-4">
              <FontAwesomeIcon
                icon={faAward}
                className="text-4xl text-blue-600"
              />
            </div>
            <h1>Super Secure Payment System</h1>
            <div className="  text-sm pt-2 description">
               <ul >
                <li>Advanced encryption technology .
                </li>
                <li>Secure SSL/TLS connections .</li>
                <li>Multi-layered security protocols .</li>
                
               </ul>
               </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
