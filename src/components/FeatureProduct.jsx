import React from "react";
import Product from "./Product";
import { useProductContext } from "../context/Productcontext";
import styled from "styled-components";
import Loader from "./Loader";


const FeatureProduct = () => {
  const { isLoading, featureProducts } = useProductContext();
//   console.log(featureProducts);

  if(isLoading){
    return <Loader />
  }


  const handleScroll=()=>{
    if(window.scrollY >100){
     
    }
  }
  window.addEventListener("scroll", handleScroll)

  return (
    <>
    <Wrapper>
      <div className="bg-[#F7F8FB] flex items-center justify-center sm:py-1 lg:py-9" >
        <div className="w-[70%] ">
          <h2 className="text-slate-300 text-xl pt-7">Check Now!</h2>
          <h3 className="text-2xl font-bold pb-5">Our Feature Services</h3>
          <div className="grid md:grid-cols-3 grid-cols-1 ">
            {featureProducts.map((curElem, index) => {
              return (<div key={index}>
              <Product  {...curElem} />
              </div> );
            })}
          </div>
        </div>
      </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`


  .container {
    max-width: 120rem;
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 12rem;
      transition: all 0.2s linear;
    }

    .caption {
      position: absolute;
      top: 15%;
      right: 10%;
      text-transform: uppercase;
      background-color: white;
      color:gray ;
      padding: 0.8rem 2rem;
      font-size: 0.7rem;
      border-radius: 2rem;
    }
  }

  .card {
    background-color: #fff;
    border-radius: 1rem;

    .card-data {
      padding: 0 2rem;
    }

    .card-data-flex {
      margin: 2rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    h3 {
      color: gray;
      text-transform: capitalize;
      padding-bottom: 5px;
    }

    .card-data--price {
    color: gray;
    padding-bottom: 5px;
    }

    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background-color: rgb(98 84 243);
      }

      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }
  }
`;
export default FeatureProduct;
