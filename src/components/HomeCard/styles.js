import styled from "styled-components";

export const StyledHomeCard = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 0px 20px;
  border-radius: 4px;

  .image {
    width: 100%;
    height: 241px;
    border-bottom: 3px solid #f5f5f2;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .image img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    max-height: 100%;
  }

  .info {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: space-between;
    padding: 10px 0px 20px;
    font-weight: 500;
    font-size: 18px;

    span {
      margin-top: 10px;
      font-weight: 600;
    }
  }

  .info button {
    width: 100%;
    margin-top: 20px;
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
`;
