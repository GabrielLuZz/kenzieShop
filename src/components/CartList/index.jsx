import CartCard from "../CartCard";
import InfoCart from "../InfoCart";
import { StyledCartList } from "./styles";
import { useSelector } from "react-redux";

const CartList = () => {
  const cart = useSelector((store) => store.cart);

  return (
    <StyledCartList>
      <section className="vitrine">
        <div className="head">
          <h2>Produto</h2>
          <h2>Preço</h2>
        </div>
        {cart.map((product) => (
          <CartCard
            key={product.id}
            id={product.id}
            name={product.name}
            img={product.img}
            price={product.price}
          />
        ))}
      </section>
      <InfoCart />
    </StyledCartList>
  );
};

export default CartList;
