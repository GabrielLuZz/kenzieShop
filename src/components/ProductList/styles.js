import styled from "styled-components";

export const StyledProductList = styled.main`
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  gap: 20px;
  padding-bottom: 30px;

  @media (max-width: 1062px) {
    justify-content: center;
  }
`;
