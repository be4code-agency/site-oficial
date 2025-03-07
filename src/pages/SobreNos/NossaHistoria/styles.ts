import styled from "styled-components";

export const ContainerAnos = styled.div`

  background-color: ${({theme})=>theme.colors.purple};
  color: ${({theme})=>theme.colors.white};
  display: flex;
  flex-direction: column;
  position: absolute;
  right: -20px;
  bottom: -20px;
  padding: 1rem;
  border-radius: .5rem;

  .anos{
    font-size: ${({theme})=>theme.fontSize["3xl"]};
    font-weight: 600;
  }

  .texto{
    font-size: ${({theme})=>theme.fontSize.md};
  }

  @media screen and (min-width: 330px) and (max-width: 1620px) {

    padding: .7rem;
    right: -10px;
    bottom: -10px;

    .anos{
      font-size: ${({theme})=>theme.fontSize["2xl"]};
      font-weight: 600;
    }

    .texto{
      font-size: ${({theme})=>theme.fontSize.sm};
    }

  }

  @media screen and (min-width: 0px) and (max-width: 329px) {

    padding: .5rem;
    right: -10px;
    bottom: -10px;

    .anos{
      font-size: ${({theme})=>theme.fontSize.xl};
      font-weight: 600;
    }

    .texto{
      font-size: ${({theme})=>theme.fontSize.xs};
    }

  }

`;

export const Titulo = styled.h2`

  font-size: ${({theme})=>theme.fontSize["4xl"]};
  font-weight: 600;

  @media screen and (min-width: 0px) and (max-width: 767px) {

    font-size: ${({theme})=>theme.fontSize["3xl"]};

  }

`;

export const Texto = styled.p`

  font-size: ${({theme})=>theme.fontSize.lg};

  @media screen and (min-width: 0px) and (max-width: 329px) {

    font-size: ${({theme})=>theme.fontSize.md};

  }

`;

export const SubTitulo = styled.h3`

  font-size: ${({theme})=>theme.fontSize["2xl"]};
  font-weight: 600;

`;

export const Icone = styled.img`

  width: 30px;

`;
