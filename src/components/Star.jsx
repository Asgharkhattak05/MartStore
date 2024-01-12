import React from 'react'
import { FaStar ,FaStarHalfAlt } from "react-icons/fa";
import { IoIosStarOutline } from "react-icons/io";
import styled from 'styled-components';
const Star = ({stars, reviews}) => {

  const ratingStar=Array.from({length:5}, (curElem, index)=>{
    const number=index + 0.5
    return(
      <span key={index}>
        {
          stars >= index + 1 ? (<FaStar  className='icon' />) :
          stars >=  number ? (<FaStarHalfAlt className='icon' />) :
          (<IoIosStarOutline  className='icon empty-icon'/>)
          
        }
      </span>
    )
  })
 


  return (
    <>
    <Wrapper>
      <div className='flex  '>
        {ratingStar}
        <p> ({reviews} Customer Reviews) </p>
      </div>
      </Wrapper>
    </>
  )
}
const Wrapper= styled.section`

.icon {
  font-size: 1.2rem;
  color: orange;
}

p{
  margin: 0;
  padding-left :1rem;
}
`
export default Star