import styled from "styled-components";

export const Main = styled.main`

  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({theme})=>theme.colors.purple};
  padding: 1rem 0;

  @media screen and (max-height: 729px) {

    height: 100%;

  }

`;

export const Title = styled.h1`

  font-size: ${({theme})=>theme.fontSize["3xl"]};
  font-weight: 600;

`;

export const Text = styled.p`

  font-size: ${({theme})=>theme.fontSize.lg};

`;
