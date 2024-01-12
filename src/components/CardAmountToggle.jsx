import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const CardAmountToggle = ({ setIncrease, setDecrease, amount }) => {
  return (
    <div className="flex sm:mx-auto lg:mx-0 md:gap-9 gap-3">
      <div>
        <button
          className="scale-75 transition-transform hover:scale-100 hover:text-red-600 hover:text-xl"
          onClick={setDecrease}
        >
          <FaMinus />
        </button>
      </div>
      <div>
        <div>
          <p>{amount}</p>
        </div>
      </div>
      <div>
        <button
          className="scale-75 transition-transform hover:scale-100 hover:text-green-600 hover:text-xl"
          onClick={setIncrease}
        >
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default CardAmountToggle;
