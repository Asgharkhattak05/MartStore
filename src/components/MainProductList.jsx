import React from 'react'
import { useFilterContext } from '../context/FilterContext'
import Product from './Product'
import GridView from './GridView'
import ListView from './ListView'

const MainProductList = () => {
  const {filter_products, grid_view}=useFilterContext()

  if(grid_view===true){
    return<GridView products={filter_products} />
  }
  if(grid_view===false){
    return<ListView products={filter_products} />
  }

  return (
    <>
    </>
  )
}

export default MainProductList