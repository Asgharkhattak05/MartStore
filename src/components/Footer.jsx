import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faTiktok,
  faWhatsapp,
  faSquareWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Footer = () => {
  const [subscribe, setSubscribe] = useState();
  const [email, setEmail] = useState();
  const handleSubscribe = (e) => {
    e.preventDefault();
    // if (email === "") {
    //   alert("Plz Enter Email");
    // } else {
    //   setSubscribe("Subscribed");
    //   alert(`Congratulations! Successfully Subscribed with Email: ${email}`);
    //   setEmail('');
    // }
    // setSubscribe("Subscribe");
    setSubscribe(email);

    setEmail("");
    setTimeout(() => {
      setSubscribe("");
    }, 2000);
  };

  return (
    <>
      <div className="main-section  relative top-28">
        <div className="w-[70%] flex justify-between rounded-md md:px-16 px-5 bg-[#f4f4f5]  py-6 flex-col md:flex-row ">
          <h1 className="text-xl">
            Ready to get Started?
            <br /> Talk to Us Today
          </h1>
          <button className="text-white  md:py-2 mt-3 md:mt-0 rounded-lg md:px-5  py-2  text-lg font-semibold bg-[#6454f5] hover:bg-[#4f488c]">
            Get Started
          </button>
        </div>
      </div>

      <div className=" md:pt-28 md:h-[50vh] h-[170vh] main-section bg-[#081432] text-lay1 text-white">
        <div className=" inner-div  md:grid-cols-4 sm:grid-cols-1 grid-cols-1">
          <div>
            <h2 className="text-xl pb-2">OmMart Store</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
              labore.
            </p>
          </div>

          <div>
            <h2 className="text-xl pb-1">Subscribe to get Important Updates</h2>

            <form onSubmit={handleSubscribe}>
              <input
                className="bg-gray-200  appearance-none border-2 border-gray-200 rounded w-full py-2 my-3  px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-password"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
                required
              />
              <button className=" mx-auto flex  text-white py-2 rounded-sm px-5  font-bold bg-[#6454f5] hover:bg-[#4f488c]">
                SubsCribe Us
              </button>
            </form>
            <p>{subscribe ? "Congratulations! Successfully Subscribed" : ""}</p>
          </div>

          <div>
            <h2 className="text-xl pb-2">Follow Us</h2>
            <div className="flex gap-6">
              <span className="socialIcon">
                <FontAwesomeIcon icon={faTiktok} />
              </span>
              <span className="socialIcon">
                <FontAwesomeIcon icon={faTwitter} />
              </span>
              <span className="socialIcon">
                <FontAwesomeIcon icon={faInstagram} />
              </span>
              <span className="socialIcon">
                <FontAwesomeIcon icon={faFacebook} />
              </span>
              <span className="socialIcon">
                <FontAwesomeIcon icon={faLinkedin} />
              </span>
            </div>
          </div>

          <div>
            <h2 className="text-xl pb-2">
              {" "}
              <FontAwesomeIcon
                icon={faPhoneVolume}
                className="pr-3 text-[#11B517]"
              />{" "}
              Call Us
            </h2>
            <p className=" pb-2 hover:underline cursor-pointer">
              +92 3181964151
            </p>
            <p className=" pb-2 hover:underline cursor-pointer">
              +92 3181964151
            </p>
            <h2 className="text-xl pb-2 pt-4">
              {" "}
              <FontAwesomeIcon
                icon={faSquareWhatsapp}
                className="text-[#11B517] bg-white"
              />{" "}
              Whatsapp
            </h2>
            <p className=" pb-2 hover:underline cursor-pointer">
              +92 3181964151
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
