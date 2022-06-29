import styled from "styled-components";

export const StyledCartList = styled.main`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding-bottom: 30px;

  .vitrine {
    width: 100%;
    max-width: 1450px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
  }

  .head {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 15px;
    border-bottom: 3px solid #e9e9e7;

    & h2 {
      font-weight: 700;
      font-size: 18px;
    }
  }

  @media (max-width: 1216px) {
    flex-direction: column;
  }
`;
