import React, { useState } from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import CardAmountToggle from "./CardAmountToggle";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

const AddToCart = ({ products }) => {
  const {HandleaddToCart} = useCartContext()

  const { colors, id, stock } = products;
  const [color, setColor] = useState("");
  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };

  return (
    <>
      <Wrapper>
        <div className="colors pb-5 ">
          <p>
            Colors:
            {colors.map((curElem, index) => (
              <button
                key={index}
                style={{ backgroundColor: curElem }}
                className={`btnStyle ${color === curElem ? "active" : ""} `}
                onClick={() => setColor(curElem)}
              >
                {color === curElem ? (
                  <span>
                    <FaCheck
                      className={`mx-auto ${
                        curElem === "#000000" || curElem === "#000"
                          ? "text-white"
                          : "black"
                      }`}
                    />
                  </span>
                ) : null}
              </button>
            ))}
          </p>
        </div>
        {/* add to cart  */}

       <div>
       <CardAmountToggle
          amount={amount}
          setDecrease={setDecrease}
          setIncrease={setIncrease}
        />
       </div>

        <NavLink to="/cart" onClick={()=> HandleaddToCart(id, color,amount, products)}>
        <button className=" hover:bg-[#bf2a20] mt-5 text-white py-2 rounded-sm px-5 text-lg font-semibold bg-[#ee493c]   ">Add To Card</button>
        </NavLink>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .btnStyle {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }
`;

export default AddToCart;
