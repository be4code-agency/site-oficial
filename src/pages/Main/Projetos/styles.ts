import styled from "styled-components";

export const Titulo = styled.h3`

  font-size: ${({theme})=>theme.fontSize["4xl"]};
  color: ${({theme})=>theme.colors.purple};
  font-weight: 700;

  @media screen and (min-width: 992px) and (max-width: 1199px) {

    font-size: ${({theme})=>theme.fontSize["3xl"]};

  }

  @media screen and (min-width: 768px) and (max-width: 991px) {

    font-size: ${({theme})=>theme.fontSize["3xl"]};

  }

  @media screen and (min-width: 0px) and (max-width: 767px) {

    font-size: ${({theme})=>theme.fontSize["2xl"]};

  }

`;

export const Texto = styled.p`

  font-size: ${({theme})=>theme.fontSize.xl};
  font-weight: 600;

  @media screen and (min-width: 992px) and (max-width: 1199px) {

    font-size: ${({theme})=>theme.fontSize.base};

  }

  @media screen and (min-width: 768px) and (max-width: 991px) {

    font-size: ${({theme})=>theme.fontSize.base};

  }


  @media screen and (min-width: 0px) and (max-width: 767px) {

    font-size: ${({theme})=>theme.fontSize.md};

  }

`;
