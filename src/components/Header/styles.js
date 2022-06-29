import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  padding: 0px 25px;
  border-bottom: 3px solid #e9e9e7;
  align-items: center;
  margin-bottom: 40px;

  h1 {
    font-size: 24px;
  }

  nav {
    width: 300px;
    font-weight: 500;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .menuItemCart {
    display: flex;
    justify-content: space-between;
    width: 100px;
    align-items: center;
  }

  .link {
    cursor: pointer;
  }

  .itemHome {
    display: flex;
    justify-content: end;
    gap: 8px;

    & span {
      font-size: 18px;
    }
  }
  .menuItemCart div {
    font-size: 18px;
  }

  .menuItemCart .number {
    position: relative;
    top: -7px;
    right: 8px;
    width: 17px;
    height: 17px;
    border-radius: 10px;
    background-color: #646fbf;
    color: #fff;
    font-size: 12px;
    text-align: center;
  }

  .menuItemEnter {
    width: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 496px) {
    flex-direction: column;
    padding-top: 10px;
  }
`;
