import React from 'react'
import styled from 'styled-components';
import { BsList } from "react-icons/bs";
import { CgMenuGridR } from "react-icons/cg";
import { BsFillGridFill } from "react-icons/bs";
import { useFilterContext } from '../context/FilterContext';

const Sort = () => {
  const { grid_view, SetGridView, SetListView ,filter_products, Sorting}=useFilterContext()

  return (
   <>
    <div className='flex flex-col md:flex-row   justify-between items-center'>
     <div className='sort 
     pt-10 md:pt-0 md:space-x-6 space-x-12'>
      <button 
      onClick={SetGridView}
      className={grid_view ? "active" : null}
      >
        <BsFillGridFill />
      </button>
      <button 
      onClick={SetListView}
      className={!grid_view ? "active" : null}
      
      >
        <BsList />
      </button>
     </div>
     <div className='py-3 md:py-0'>
       <p>{`Total Products : ${filter_products.length}`}</p>
     </div>
     <div className=''>
      <form action="">
        <label htmlFor="sort"></label>
        <select name="sort" id="sort" onClick={Sorting} className='py-2 px-2 border-2 border-black text-xl  '>
          <option value="lowest">Price(lowest)</option>
          <option value="#" disabled></option>
          <option value="highest">Price(highest)</option>
          <option value="#" disabled></option>
          <option value="a-z">Price(a-z)</option>
          <option value="#" disabled></option>
          <option value="z-a">Price(z-a)</option>
          
        </select>
      </form>
     </div>
    </div>
   </>
  )
}

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;

  .sorting-list--grid {
    display: flex;
    gap: 2rem;

    .sort-btn {
      padding: 0.8rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .icon {
      font-size: 1.6rem;
    }
    .active {
      background-color: black;
      color: #fff;
    }
  }

  .sort-selection .sort-selection--style {
    padding: 0.5rem;
    cursor: pointer;

    .sort-select--option {
      padding: 0.5rem 0;
      cursor: pointer;
      height: 2rem;
      padding: 10px;
    }
  }
`;
export default Sort