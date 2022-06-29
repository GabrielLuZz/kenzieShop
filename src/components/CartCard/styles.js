import styled from "styled-components";

export const StyledCartCard = styled.div`
  width: 100%;
  display: flex;
  height: 250px;
  border-bottom: 3px solid #e9e9e7;
  padding-bottom: 15px;

  .image {
    width: 250px;
    padding-left: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .image img {
    width: 234px;
    height: 300px;
    object-fit: cover;
    max-height: 100%;
    padding-top: 15px;
  }

  .description {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 30px;
    height: 100%;
  }

  .extreme {
    width: 250px;
    height: 100%;
    padding-right: 20px;

    & span {
      width: 100%;
      height: 50%;
      display: block;
      display: flex;
      justify-content: end;
      align-items: end;
    }

    & div {
      width: 100%;
      height: 50%;
      text-align: right;
      display: flex;
      align-items: end;
      justify-content: end;
      padding-bottom: 10px;
    }

    & div button {
      width: 100%;
      height: 43px;
      font-weight: 600;
      font-size: 17px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-weight: 700;
      background-color: #8684fc;
      border: 1px solid #8684fc;
      border-radius: 4px;
    }
  }

  @media (max-width: 836px) {
    flex-direction: column;
    height: auto;
    min-height: 200px;

    .image {
      width: 100%;
    }

    .image img {
      width: 150px;
    }

    .description {
      padding: 30px 0px;
    }

    .extreme {
      width: 100%;

      & div {
        padding-top: 20px;
      }

      & div button {
        max-width: 230px;
      }
    }
  }
`;
