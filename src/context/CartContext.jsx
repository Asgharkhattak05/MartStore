import { useContext, useReducer, createContext, useEffect } from "react";
import reducer from "../reducer/CartReducer";

const cartContext = createContext();

// get from local storage

const getLocalCartData = () => {
  const localData = localStorage.getItem("cartStore");

//   if (!localData) {
//     return [];
//   } else {
//     try {
//       const parsedData = JSON.parse(localData);
//       return parsedData;
//     } catch (error) {
//       console.error("Error parsing local data:", error);
//       return [];
//     }
//   }

const parsedData= JSON.parse(localData);
if(!Array.isArray(parsedData)) return [];
return parsedData;
 };



const initialState = {
  cart: getLocalCartData(),
  total_item: "",
  total_price: "",
  shipping_fee: 50000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);


  // Amount Increase Decrease 

  const setDecrease=(id)=>{
    dispatch({type:"SET_DECREASE", payload:id})
  }
  const setIncrease=(id)=>{
    dispatch({type:"SET_INCREASE", payload:id})
  }

  const HandleaddToCart = ( id , color, amount, products) => {
    dispatch({ type: "ADD_TO_CART", payload: { id , color, amount, products } });
  };

  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  // Add to Local Storage
  useEffect(() => {

    dispatch({type:"CART_TOTAL_ITEM"})
    dispatch({type:"SUBTOTAL_ITEMS"})

    localStorage.setItem("cartStore", JSON.stringify(state.cart));
  }, [state.cart]);

  // Clear Cart 

  const clearCart=()=>{
    dispatch({type:"CLEAR_CART"})
  }
  return (
    <cartContext.Provider value={{ ...state, HandleaddToCart, handleRemove,clearCart, setDecrease,setIncrease}}>
      {children}
    </cartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(cartContext);
};

export { CartProvider, useCartContext };
