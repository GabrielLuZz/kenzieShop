import { ADD_CART, REMOVE_CART } from "./actionTypes";

const initialState = JSON.parse(localStorage.getItem("@shop:cart")) || [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      return [...state, action.product];
    case REMOVE_CART:
      return action.productList;
    default:
      return state;
  }
};

export default cartReducer;
