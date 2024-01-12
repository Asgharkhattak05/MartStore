import React from "react";

const CartReducer = (state , action) => {

   
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, products } = action.payload;
   

    let existingProduct = state.cart.find(
      (curElem) => curElem.id == id + color
    );

    if (existingProduct) {
      let updateProduct = state.cart.map((curElem) => {
        if (curElem.id == id + color) {

          let newAmount = curElem.amount + amount;
          if(newAmount >= curElem.max){
            newAmount=curElem.max
          }
          return {
            ...curElem,
            amount: newAmount,
          };
        } else {
          return curElem;
        }
      });
      return {
        ...state,
        cart: updateProduct,
      };
    } else {
      let cartProduct = {
        id: id + color,
        name: products.name,
        color: color,
        amount: amount,
        image: products.image[0].url,
        price: products.price,
        max: products.stock,
      };
      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }


  if (action.type === "SET_DECREASE") {
    let decreaseProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        // Decrement the amount by 1
        let updatedAmount = curElem.amount - 1;
  
        // Ensure the amount doesn't go below 1
        updatedAmount = Math.max(updatedAmount, 1);
  
        return {
          ...curElem,
          amount: updatedAmount,
        };
      } else {
        return {
          ...curElem,
        };
      }
    });
  
    return {
      ...state,
      cart: decreaseProduct,
    };
  }

  if (action.type === "SET_INCREASE") {
    let increaseProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        // Increment the amount by 1
        let updateAmount =  curElem.amount + 1 ;
        if(updateAmount >= curElem.max){
               updateAmount=curElem.max
        }
  
        return {
          ...curElem,
          amount: updateAmount,
        };
      } else {
        // Return the original element without modification
        return curElem;
      }
    });
  
    return {
      ...state,
      cart: increaseProduct,
    };
  }
  
  if(action.type==="CART_TOTAL_ITEM"){
    const updateCartItem=state.cart.reduce((initValue,curItem)=>{
      let{amount}=curItem;
      initValue=initValue+ amount
      return initValue;
    },0);
    return{
        ...state,
        total_item:updateCartItem
        
    }
  }

  if (action.type === "SUBTOTAL_ITEMS") {
    let total_price = state.cart.reduce((initValue, curElem) => {
        let {price , amount} = curElem;
        initValue= initValue + price * amount;
      return initValue 
    }, 0);
  
    return {
      ...state,
      total_price: total_price,
    };
  }
  


  if (action.type === "REMOVE_ITEM") {
    let updatedData = state.cart.filter(
      (curItem) => curItem.id !== action.payload
    );

    return {
      ...state,
      cart: updatedData,
    };
  }

  //  to Empty the Cart
  if (action.type == "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }



  return state;
};

export default CartReducer;
