import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./Productcontext";
import reducer from "../reducer/FilterReducer";

const filterContext = createContext();
const initialState = {
  is_filter_loading: false,
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: "",
  filters: {
    text: "",
    category: "all",
    company: "all",
    color: "all",
    maxPrice: 0,
    price: 0,
    minPrice: 0,
  },
};

const FilterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { products } = useProductContext();

  //   to set grid view

  const SetGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };
  // to set List view

  const SetListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };


  // Sorting

  const Sorting = (event) => {
    let sort_value = event.target.value;
    dispatch({ type: "GET_SORT_VALUE", payload: sort_value });
  };

  // update the filter values
  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    return dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
  };

  // to sort the product
  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [state.sorting_value, state.filters]);

  // Claer All Filters 

  const clearFilters=()=>{
    console.log("clear filter");
    dispatch({type:"CLEAR_FILTERS"})
  }

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER-PRODUCT", payload: products });
  }, [products]);

  return (
    <filterContext.Provider
      value={{ ...state, SetGridView, SetListView, Sorting, updateFilterValue, clearFilters }}
    >
      {children}
    </filterContext.Provider>
  );
};

const useFilterContext = () => {
  return useContext(filterContext);
};

export { FilterContextProvider, useFilterContext };
