import styled from "styled-components";

export const Value = styled.span`

  color: ${({theme})=>theme.colors.purple};
  font-size: ${({theme})=>theme.fontSize["3xl"]};
  font-weight: 600;

`;

export const Title = styled.h4`

  color: ${({theme})=>theme.colors.black};
  font-size: ${({theme})=>theme.fontSize.xl};
  font-weight: 700;

  @media screen and (min-width: 0px) and (max-width: 767px) {

    font-size: ${({theme})=>theme.fontSize.lg};

  }

`;

export const Text = styled.p`

  color: ${({theme})=>theme.colors.black};
  font-size: ${({theme})=>theme.fontSize.lg};
  font-weight: 400;

  @media screen and (min-width: 0px) and (max-width: 767px) {

    font-size: ${({theme})=>theme.fontSize.base};

  }

`;
