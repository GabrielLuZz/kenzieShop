import { StyledHeader } from "./styles";
import { BsCart2 } from "react-icons/bs";
import { AiOutlineExport, AiOutlineHome } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Header = () => {
  const cart = useSelector((store) => store.cart);

  const history = useHistory();

  return (
    <StyledHeader>
      <h1>Kenzie Shop</h1>
      <nav>
        <div className="menuItemCart itemHome">
          <span>
            <AiOutlineHome />
          </span>
          <span
            className="link"
            onClick={() => {
              history.push("/");
            }}
          >
            Home
          </span>
        </div>
        <div className="menuItemCart">
          <div>
            <BsCart2 />
          </div>
          {cart.length > 0 && <span className="number">{cart.length}</span>}

          <span
            onClick={() => {
              if (cart.length > 0) {
                history.push("/cart");
              }
            }}
          >
            <span className="link">Carrinho</span>
          </span>
        </div>
        <div className="menuItemEnter">
          <AiOutlineExport />
          <span className="link">Entrar</span>
        </div>
      </nav>
    </StyledHeader>
  );
};

export default Header;
