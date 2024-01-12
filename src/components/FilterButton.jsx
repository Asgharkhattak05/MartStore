import React from 'react'

const FilterButton = ({btnStyle, text, handleOnlcick}) => {
  return (
    <>
        <button className={`${btnStyle}`} onClick={handleOnlcick}>Clear Filters</button>
    </>
  )
}

export default FilterButton