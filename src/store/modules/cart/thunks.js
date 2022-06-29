import { addToCart, removeFromCart } from "./actions";
import { toast } from "react-toastify";

export const addToCartThunk = (product) => (dispatch, getState) => {
  const { cart } = getState();
  const newProduct = { ...product, id: cart.length + 1 };
  product.id = cart.length + 1;
  localStorage.setItem("@shop:cart", JSON.stringify([...cart, newProduct]));
  toast.success("Adicionado ao Carrinho");
  dispatch(addToCart(newProduct));
};

export const removeFromCartThunk = (product) => (dispatch, getState) => {
  const { cart } = getState();
  const newCart = cart.filter((item) => item.id !== product.id);
  localStorage.setItem("@shop:cart", JSON.stringify(newCart));
  toast.success("Removido do carrinho");
  dispatch(removeFromCart(newCart));
};
