import { StyledCartCard } from "./styles";
import { useDispatch } from "react-redux";
import { removeFromCartThunk } from "../../store/modules/cart/thunks";
import formatValue from "../../utils/formatValue";

const CartCard = ({ id, name, img, price }) => {
  const dispatch = useDispatch();
  const product = {
    id,
    name,
    img,
    price,
  };

  const handleRemove = () => {
    dispatch(removeFromCartThunk(product));
  };

  return (
    <StyledCartCard>
      <section className="image">
        <img src={img} alt={name} />
      </section>
      <section className="description">
        <p>{name}</p>
      </section>
      <section className="extreme">
        <span>{formatValue(price)}</span>
        <div className="removeArea">
          <button onClick={handleRemove}>Remover</button>
        </div>
      </section>
    </StyledCartCard>
  );
};

export default CartCard;
