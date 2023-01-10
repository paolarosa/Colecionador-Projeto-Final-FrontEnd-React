import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 55px;
  background-color: #49bcf0;
  border-bottom: 2px solid grey;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    height: 45px;
  }
`;
