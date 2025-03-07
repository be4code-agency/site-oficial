import styled from "styled-components";

export const Titulo = styled.h2`

  font-size: ${({theme})=>theme.fontSize["5xl"]};
  color: ${({theme})=>theme.colors.white};
  font-weight: 400;

  @media screen and (max-width: ${({theme})=>theme.breakPoints.sm}) {

    font-size: ${({theme})=>theme.fontSize["3xl"]};
    text-align: center;

  }

  @media screen and (max-width: ${({theme})=>theme.breakPoints.xs}) {

    font-size: ${({theme})=>theme.fontSize["3xl"]};

  }

`;

export const Container = styled.div`

  display: flex;
  width: 100%;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
  padding: 1rem;

  @media screen and (max-width: ${({theme})=>theme.breakPoints.xl}) {

    padding: 1rem 0;

  }

`;

export const Item = styled.div`

  width: 33.33333333333333%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: .5rem;
  color: ${({theme})=>theme.colors.white};
  height: 100%;

  h3{
    font-size: ${({theme})=>theme.fontSize["2xl"]};
  }

  span{
    font-size: ${({theme})=>theme.fontSize["5xl"]};
    color: #8D8AED;
    font-weight: 600;
  }

  p{
    font-size: ${({theme})=>theme.fontSize.base};
  }

  @media screen and (max-width: ${({theme})=>theme.breakPoints.lg}){

    width: 50%;

  }

  @media screen and (max-width: ${({theme})=>theme.breakPoints.sm}) {

    width: 50%;
    align-items: center;
    text-align: center;
    margin-bottom: 1rem;
    padding: .5rem .8rem;

    h3{
      font-size: ${({theme})=>theme.fontSize.xl};
    }

    span{
      font-size: ${({theme})=>theme.fontSize["4xl"]};
    }

    p{
      font-size: ${({theme})=>theme.fontSize.md};
      word-wrap: break-word;
    }

  }


  @media screen and (max-width: ${({theme})=>theme.breakPoints.xs}) {

    width: 100%;

  }

`;
