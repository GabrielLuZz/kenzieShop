import styled from "styled-components";

export const StyledInfoCart = styled.div`
  max-width: 340px;
  width: 100%;
  height: 300px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;

  h2 {
    width: 100%;
    text-align: center;
  }

  .areaInfo {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .amount {
    display: flex;
    justify-content: space-between;
  }

  .total {
    display: flex;
    justify-content: space-between;
  }

  .bar {
    border-top: 2px dashed #3f51b3;
    padding: 10px;
    flex: 1;

    margin: 0px 10px;
    margin-top: 10px;
  }

  .areaButton {
    height: 50px;
    width: 100%;

    & button {
      width: 100%;
      height: 43px;
      font-weight: 600;
      font-size: 17px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-weight: 700;
      background-color: #3f51b3;
      border: 1px solid #3f51b3;
      border-radius: 4px;
    }
  }

  @media (max-width: 1216px) {
    max-width: 100%;
  }
`;
