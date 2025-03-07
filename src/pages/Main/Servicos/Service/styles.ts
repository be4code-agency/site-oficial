import styled from "styled-components";

export const Container = styled.div`

  background-color: ${({theme})=>theme.colors.white};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  border-radius: .5rem;
  padding: 3rem;

  @media screen and (min-width: 768px) and (max-width: 991px) {

    padding: 2rem;

  }

  @media screen and (min-width: 0px) and (max-width: 767px) {

    padding: 2rem 1rem;

  }

`;

export const Icon = styled.img`

  width: 50px;

  @media screen and (min-width: 768px) and (max-width: 991px) {

    width: 45px;

  }

  @media screen and (min-width: 0px) and (max-width: 767px){

    width: 40px;

  }

`;

export const Title = styled.h4`

  color: ${({theme})=>theme.colors.black};
  font-size: ${({theme})=>theme.fontSize["2xl"]};
  font-weight: 600;
  margin: 0;

  @media screen and (min-width: 0px) and (max-width: 767px){

    font-size: ${({theme})=>theme.fontSize.xl};

  }

`;

export const Text = styled.p`

  font-size: ${({theme})=>theme.fontSize.lg};

  @media screen and (min-width: 0px) and (max-width: 767px){

    font-size: ${({theme})=>theme.fontSize.md};

  }

`;
