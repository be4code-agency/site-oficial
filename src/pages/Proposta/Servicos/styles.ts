import styled from "styled-components";

export const Titulo = styled.h2`

  font-size: ${({theme})=>theme.fontSize["5xl"]};
  font-weight: 600;
  background: linear-gradient(50deg, #8D8AED 0%, #3A36BF 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: ${({theme})=>theme.breakPoints.sm}) {

    font-size: ${({theme})=>theme.fontSize["4xl"]};

  }

  @media screen and (max-width: ${({theme})=>theme.breakPoints.xs}) {

    font-size: ${({theme})=>theme.fontSize["3xl"]};
    word-wrap: break-word;
  }

`;

export const Item = styled.div`
  padding: 1rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  height: 100%;

  svg{

    color: ${({theme})=>theme.colors.purple};
    width: 3rem;
    height: 3rem;

  }

  h3{

    font-weight: 600;

  }

  @media screen and (max-width: ${({theme})=>theme.breakPoints.sm}) {

    svg{

      width: 2.5rem;
      height: 2.5rem;

    }

    h3{

      font-size: ${({theme})=>theme.fontSize.xl};

    }

    p{

      font-size: ${({theme})=>theme.fontSize.md};

    }

  }

  @media screen and (max-width: ${({theme})=>theme.breakPoints.xs}) {

    svg{

      width: 2.5rem;
      height: 2.5rem;

    }

    h3{

      font-size: ${({theme})=>theme.fontSize["2xl"]};

    }

  }

`;
