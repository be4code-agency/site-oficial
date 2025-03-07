import styled from "styled-components";

export const Container = styled.section`

  height: 95dvh;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  @media screen and (max-width: ${({theme})=>theme.breakPoints.lg}) {

    gap: 3rem;
    height: 99dvh;
    text-align: center;

  }

  @media screen and (max-width: ${({theme})=>theme.breakPoints.md}) {

    gap: 3rem;
    height: 99dvh;
    text-align: center;

  }

  @media screen and (max-height: 900px) {

    height: 99dvh;
    gap: 3rem;

  }

  @media screen and (max-height: 500px) {

    height: 100%;

  }

  @media screen and (max-width: ${({theme})=>theme.breakPoints.xs}) {

    gap: 1.5rem;

  }


`;

export const LogoImg = styled.img`

  width: 100px;

  @media screen and (max-width: ${({theme})=>theme.breakPoints.md}) {

    width: 70px;

  }

  @media screen and (max-width: ${({theme})=>theme.breakPoints.xs}) {

    width: 50px;

  }

`;

export const Saudacoes = styled.h1`

  font-size: ${({theme})=>theme.fontSize["3xl"]};
  color: ${({theme})=>theme.colors.black};
  word-wrap: break-word;

  @media screen and (max-width: ${({theme})=>theme.breakPoints.md}) {

    font-size: ${({theme})=>theme.fontSize["2xl"]};

  }

  @media screen and (max-width: ${({theme})=>theme.breakPoints.xs}) {

    font-size: ${({theme})=>theme.fontSize.xl};

  }

`;

export const NomeCliente = styled.span`

  text-decoration: underline;
  text-decoration-color: ${({theme})=>theme.colors.purple};

`;

export const TituloProposta = styled.h2`

  font-size: 6rem;
  font-weight: 600;
  text-align: center;
  line-height: 6rem;
  background: linear-gradient(50deg, #8D8AED 10%, #3A36BF 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

@media screen and (max-width: ${({theme})=>theme.breakPoints.md}) {

    font-size: ${({theme})=>theme.fontSize["5xl"]};
    line-height: 4rem;

  }

  @media screen and (max-width: ${({theme})=>theme.breakPoints.xs}) {

    font-size: ${({theme})=>theme.fontSize["4xl"]};
    line-height: 2.5rem;
    margin-bottom: 1rem;

  }

`;

export const TituloData = styled.h3`

  font-size: ${({theme})=>theme.fontSize["2xl"]};
  font-weight: 600;
  color: ${({theme})=>theme.colors.purple};

  @media screen and (max-width: ${({theme})=>theme.breakPoints.xs}) {

    font-size: ${({theme})=>theme.fontSize.md};

  }

`;

export const TextoData = styled.p`

  color: ${({theme})=>theme.colors.black};
  font-weight: 600;

`;

export const TituloBeneficios = styled.h3`

  font-size: ${({theme})=>theme.fontSize.md};
  line-height: 1rem;

`;

export const ContainerProposta = styled.section`

  height: 5dvh;
  background-color: ${({theme})=>theme.colors.purple};
  padding: 0;
  margin: 0 auto;

  @media screen and (max-width: ${({theme})=>theme.breakPoints.xs}) {

    height: 6dvh;
    padding-top: .1rem;

  }

`;

export const TextoProposta = styled.span`

  color: ${({theme})=>theme.colors.white};
  display: flex!important;
  flex-direction: row!important;
  align-items: center!important;
  justify-content: center!important;
  white-space: nowrap!important;
  gap: .2rem;
  padding: .2rem 0;
  font-size: ${({theme})=>theme.fontSize.md};
  height: 5dvh;

  @media screen and (max-width: ${({theme})=>theme.breakPoints.xs}) {

    height: 6dvh;

  }

`;
