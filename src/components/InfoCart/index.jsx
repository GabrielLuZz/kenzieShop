import { StyledInfoCart } from "./styles";
import { useSelector } from "react-redux";
import formatValue from "../../utils/formatValue";

const InfoCart = () => {
  const cart = useSelector((store) => store.cart);

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <StyledInfoCart>
      <h2>Resumo do Pedido</h2>
      <div className="areaInfo">
        <div className="amount">
          <span>quantidade</span>
          <div className="bar"></div>
          <span>{cart.length}</span>
        </div>
        <div className="total">
          <span>Total</span>
          <div className="bar"></div>
          <span>{formatValue(total)}</span>
        </div>
      </div>
      <div className="areaButton">
        <button>Finalizar o Pedido</button>
      </div>
    </StyledInfoCart>
  );
};

export default InfoCart;
