import styled from "styled-components";

export const Image = styled.img`

  padding: 0 .5rem;
  border-radius: 1rem;

  @media screen and (max-width: ${({theme})=>theme.breakPoints.xs}) {

    border-radius: .6rem;
  }

`;

export const Titulo = styled.h2`

  font-size: ${({theme})=>theme.fontSize["5xl"]};
  font-weight: 600;
  background: linear-gradient(50deg, #8D8AED 0%, #3A36BF 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: ${({theme})=>theme.breakPoints.lg}) {

    font-size: ${({theme})=>theme.fontSize["4xl"]};

  }

  @media screen and (max-width: ${({theme})=>theme.breakPoints.md}) {

    text-align: center;

  }

  @media screen and (max-width: ${({theme})=>theme.breakPoints.xs}) {

    font-size: ${({theme})=>theme.fontSize["3xl"]};
  }

`;

export const Texto = styled.p`

  font-size: ${({theme})=>theme.fontSize.lg};
  font-weight: 500;

  @media screen and (max-width: ${({theme})=>theme.breakPoints.lg}) {

    font-size: ${({theme})=>theme.fontSize.base};

  }

`;
