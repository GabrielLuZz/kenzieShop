import HomeCard from "../HomeCard";
import { StyledProductList } from "./styles";
import { useSelector } from "react-redux";

const ProductList = () => {
  const products = useSelector((store) => store.products);

  return (
    <StyledProductList>
      {products.map((product) => (
        <HomeCard
          key={product.id}
          name={product.name}
          img={product.img}
          price={product.price}
        />
      ))}
    </StyledProductList>
  );
};

export default ProductList;
