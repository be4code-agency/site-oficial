import styled from "styled-components";

export const Main = styled.article`

  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
  background-color: ${({theme})=>theme.colors.purpleHover};

`;

export const Container = styled.section`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${({theme})=>theme.colors.white};
  padding: 1rem;
  width: 100%;
  max-width: 500px;
  border-radius: 1.2rem;

  @media screen and (max-width: ${({theme})=>theme.breakPoints.md}) {

    width: 95%;

  }

`;

export const Footer = styled.div`

  text-align: center;

  span{

    font-size: ${({theme})=>theme.fontSize.md};
    font-weight: 600;

  }

`;
