import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/FilterContext";
import { FaCheck } from "react-icons/fa";
import FormatPrice from "../Helper/FormatPrice";
import FilterButton from "./FilterButton";
import { motion } from "framer-motion";

const FilterSection = () => {
  const {
    filters: { text, category, color, price, maxPrice, minPrice },
    updateFilterValue,
    all_products,
    clearFilters
    
  } = useFilterContext();

  // get Unique Values Of Each Property

  const getUniqueData = (data, attr) => {
    let newVal = data.map((curElem) => {
      return curElem[attr];
    });
    if (attr === "colors") {
      // return (newVal=["all", ...new Set([].concat(...newVal))]) ;
      newVal = newVal.flat();
    }
    return (newVal = ["all", ...new Set(newVal)]);
  };

  const categoryData = getUniqueData(all_products, "category");
  const CompnayData = getUniqueData(all_products, "company");
  const ColorsData = getUniqueData(all_products, "colors");
  // console.log(ColorsOnlyData);

  return (
    <>
      <Wrapper className="
      md:justify-start justify-center md:text-start md:items-start"
      >
        {/* ---------------Filter Search Section----------------  */}
        <div className="filter-search">
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              placeholder="Search"
              className="shadow appearance-none border rounded py-2 px-3  text-gray-700 "
              name="text"
              type="text"
              value={text}
              onChange={updateFilterValue}
            />
          </form>
        </div>
        {/* ---------------Filter Category Section----------------  */}
        <div className="filter-category">
          <h3>Category</h3>
          <div>
            {categoryData.map((curElem, index) => {
              return (
                <motion.button
                whileHover={{scale:1.3, color:"#6454f5", originX:0}}
                transition={{type:"spring", stiffness:"300"}}
                  type="button"
                  name="category"
                  key={index}
                  value={curElem}
                  onClick={updateFilterValue}
                  className={curElem === category ? "active" : ""}
                >
                  {curElem}
                </motion.button>
              );
            })}
          </div>
        </div>
        {/* ---------------Filter Color Section----------------  */}
        <div className="">
          <h3 >Colors</h3>

          <div className="filter-color-style">
            {ColorsData.map((curColor, index) => {
              if (curColor === "all") {
                return (
                  <button
                   
                    type="button"
                    name="color"
                    value={curColor}
                    className="color-all--st"
                    onClick={updateFilterValue}
                    key={index}
                  >
                    All
                  </button>
                );
              }
              return (
                <button
                  type="button"
                  name="color"
                  value={curColor}
                  className={color == curColor ? "btnStyle active" : "btnStyle"}
                  onClick={updateFilterValue}
                  style={{ backgroundColor: curColor }}
                  key={index}
                >
                  {color == curColor ? (
                    <span
                      className={`  ${
                        curColor === "#000000" || curColor === "#000"
                          ? "text-white"
                          : ""
                      }`}
                    >
                      <FaCheck className="mx-auto" />
                    </span>
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>
        {/* ---------------Filter Company Section----------------  */}
        <h3>Company</h3>
        <form>
          <select
            name="company"
            id="company"
            className="filter-company--select"
            onClick={updateFilterValue}
          >
            {CompnayData.map((curComp, index) => {
              return (
                <option key={index} value={curComp} name="company">
                  {curComp}
                </option>
              );
            })}
          </select>
        </form>

        <div className="filter_price">
    <h3>Price</h3>
    <p>
      <FormatPrice price={price} />
    </p>
    <input 
    style={
      {backgroundColor:"blue"}
    }
     type="range"
     name="price"
     min={minPrice}
     max={maxPrice}
     onChange={updateFilterValue} 

    />
  </div>

  {/* Filter Reset Section  */}

  <div className="clear_filters">
      <FilterButton btnStyle="btn-style " text="Clear Filters" handleOnlcick={clearFilters} />
        
      </div>
      </Wrapper>
    </>

    
  );

  
};

const Wrapper = styled.section`
  padding: 0rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  

  h3 {
    padding-bottom: 0.5rem;
    font-weight: 600;
    font-size: large;
  }

  .filter-search {
    input {
      border: 1px solid black;
      padding: 0.6rem 1rem;
      width: 75%;
      background-color: #f7f8fb;
    }
  }

  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;

      button {
        border: none;

        text-transform: capitalize;
        cursor: pointer;

        &:hover {
        }
      }

      .active {
        border-bottom: 1px solid #000;
      }
    }
  }

  .filter-company--select {
    padding: 0.2rem 2.8rem;
    font-size: 1rem;
    border: 1px solid black;
    border-radius: 2px;
    text-transform: capitalize;
  }

  .filter-color-style {
    display: flex;
    justify-items: center;
  }

  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 1.5rem;
    height: 1.5rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
    .active {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }

  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
`;

export default FilterSection;
