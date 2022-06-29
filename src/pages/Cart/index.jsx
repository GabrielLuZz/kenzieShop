import CartList from "../../components/CartList";
import { StyledCart } from "./styles";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((store) => store.cart);

  if (cart.length < 1) {
    return <Redirect to="/" />;
  }

  return (
    <StyledCart>
      <CartList />
    </StyledCart>
  );
};

export default Cart;
