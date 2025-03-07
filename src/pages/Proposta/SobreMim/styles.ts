import styled from "styled-components";

export const ContainerTexto = styled.div`

  width: 80%;

  @media screen and (max-width: ${({theme})=>theme.breakPoints.lg}) {

    width: 100%;
    text-align: justify;
    hyphens: auto;
  }

`;

export const Titulo = styled.h2`

  font-size: ${({theme})=>theme.fontSize["5xl"]};
  font-weight: 600;
  background: linear-gradient(50deg, #8D8AED 10%, #3A36BF 30%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 2rem;

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

  font-weight: 600;
  margin-bottom: 1.2rem;
  font-size: ${({theme})=>theme.fontSize.lg};

  @media screen and (max-width: ${({theme})=>theme.breakPoints.lg}) {

    font-size: ${({theme})=>theme.fontSize.base};

  }

`;

export const ImgPerfil = styled.img`

  width: 50%;

  @media screen and (max-width: ${({theme})=>theme.breakPoints.lg}) {

    width: 75%;

  }

  @media screen and (max-width: ${({theme})=>theme.breakPoints.sm}) {

    display: none;

  }

`;
