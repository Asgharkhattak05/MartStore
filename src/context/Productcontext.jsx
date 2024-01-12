import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/ProductReducer";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialValue = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading:false,
  singleProduct:{},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValue);

//  1st API call for all Products 

  const getData = async (url) => {
    dispatch({type :"SET_LOADING" })
 try {
       const resp = await axios.get(url);
       const products = await resp.data;
       dispatch({ type: "MY_API_DATA", payload: products });

 } catch (error) {
    dispatch({type:"API_ERROR"});
 }
 
  };

//   2nd Api Call For SingleProduct 

const getSingleProduct= async(url)=>{
    dispatch({type:"SET_SINGLE-LOADING"})
try {
    const resp=await axios.get(url);
    const singleProduct=await resp.data;
    dispatch({type:"SET_SINGLE_PRODUCT", payload:singleProduct})
} catch (error) {
    dispatch({type:"SET_SINGLE_ERROR"})
}

}

  useEffect(() => {
    getData(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>{children}</AppContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useProductContext };
