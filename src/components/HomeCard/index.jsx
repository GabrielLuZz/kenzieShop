import { StyledHomeCard } from "./styles";
import { useDispatch } from "react-redux";
import { addToCartThunk } from "../../store/modules/cart/thunks";
import formatValue from "../../utils/formatValue";

const HomeCard = ({ name, img, price }) => {
  const product = {
    name,
    img,
    price,
  };

  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(addToCartThunk(product));
  };

  return (
    <StyledHomeCard>
      <section className="image">
        <img src={img} alt={name} />
      </section>

      <section className="info">
        <p>{name}</p>
        <span>{formatValue(price)}</span>
        <button onClick={handleAdd}>Adicionar ao carrinho</button>
      </section>
    </StyledHomeCard>
  );
};

export default HomeCard;
