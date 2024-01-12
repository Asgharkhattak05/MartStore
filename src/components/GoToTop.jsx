import React from 'react'
import { FaArrowAltCircleUp } from "react-icons/fa";

const GoToTop = () => {

    const HandleGoToTop =()=>{
        window.scrollTo({top:0, left:0, behavior:"smooth"})
    }

  return (
    <>
        <button className='fixed  bottom-5 right-5' onClick={HandleGoToTop}>
            <FaArrowAltCircleUp className='text-3xl bg-red-600 rounded-full ' />
        </button>
    </>
  )
}

export default GoToTop