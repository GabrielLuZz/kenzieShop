import { ADD_CART, REMOVE_CART } from "./actionTypes";

export const addToCart = (product) => ({
  type: ADD_CART,
  product,
});

export const removeFromCart = (productList) => ({
  type: REMOVE_CART,
  productList,
});
