import React from "react";
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
    y: "100vw",
    transition: { ease: "easeInOut" },
  },
};

const Contact = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <>
    <motion.div variants={conainerVariants}
        initial="hidden"
        animate="visible"
        exit="exit">
      <div className="py-14">
        <div className=" justify-center items-center text-center">
          <h1 className="text-3xl font-bold pb-10">Contact Us</h1>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d662481.3735570643!2d73.0509623883944!3d33.66665967723852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1703165754073!5m2!1sen!2s"
            width="100%"
            height="400"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="py-10 px-5 flex justify-center">
        <form action="https://formspree.io/f/xnqeagjo" method="POST" className="w-full max-w-sm">
        <div className="md:flex md:items-center mb-6">
      <div className="md:w-2/3">
        <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          id="inline-full-name"
          type="text"
          name="User_Name"
          placeholder="User_Name"
          value={isAuthenticated ? user?.name : ""}
          readOnly 
        />
      </div>
    </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-password"
                type="text"
                name="email"
                placeholder="Email"
                value={ isAuthenticated ? user.email : ""}
                readOnly 
              />
            </div>
          </div>

          <div className="md:flex md:items-center mb-6">
            <div className="md:w-2/3">
              <textarea
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-password"
                type="textArea"
                name="Message"
                placeholder="Some Text ... .."
                readOnly 
                
              />
            </div>
          </div>

          <div className=" flex ">
          <div className="md:ml-14 ml-24">
            <button type="submit" className='text-white py-2 rounded-sm px-5 text-lg font-semibold bg-[#6454f5] hover:bg-[#4f488c]'>Submit</button>
            </div>
          </div>
        </form>
      </div>
      </motion.div>
    </>
  );
};

export default Contact;
