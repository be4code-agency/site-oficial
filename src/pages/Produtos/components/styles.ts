import styled, {css} from "styled-components";

interface BannerInicioProps{
  banner: string
}

export const BannerInicio = styled.header<BannerInicioProps>`

  background: ${({banner})=>banner ? css`url(${banner})` : css`${({theme})=>theme.colors.darkPurple}`};
  height: 70vh;
  background-size: cover;
  color: ${({theme})=>theme.colors.white};

  @media screen and (min-width: 768px) and (max-width: 1199px) {

    background-position: center;

  }

  @media screen and (min-width: 0px) and (max-width: 767px) {

    height: 100vh;
    background-position: center;

  }

`;

export const SubTitulo = styled.h1`

  font-size: ${({theme})=>theme.fontSize.lg};
  margin: 0;

  @media screen and (min-width: 0px) and (max-width: 329px) {

    font-size: ${({theme})=>theme.fontSize.md};

  }

`;

export const Titulo = styled.h2`

  font-size: ${({theme})=>theme.fontSize["4xl"]};
  font-weight: 700;
  margin: 0;

  @media screen and (min-width: 0px) and (max-width: 329px) {

    font-size: ${({theme})=>theme.fontSize["2xl"]};

  }

`;

export const Texto = styled.p`

  font-size: ${({theme})=>theme.fontSize.md};

  @media screen and (min-width: 0px) and (max-width: 329px) {

    font-size: ${({theme})=>theme.fontSize.sm};

  }

`;

export const TituloTecnologia = styled.h2`

  font-size: ${({theme})=>theme.fontSize["4xl"]};
  font-weight: 700;

  @media screen and (min-width: 0px) and (max-width: 329px) {

    font-size: ${({theme})=>theme.fontSize["3xl"]};

  }

`;

export const TextoTecnologia = styled.p`

  font-size: ${({theme})=>theme.fontSize.xl};

  @media screen and (min-width: 330px) and (max-width: 767px) {

    font-size: ${({theme})=>theme.fontSize.lg};

  }

  @media screen and (min-width: 0px) and (max-width: 329px) {

    font-size: ${({theme})=>theme.fontSize.base};

  }

`;

export const ContainerProjeto = styled.div`

  width: 100%;
  max-height: 420px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  img{
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }

  @media screen and (min-width: 1400px) and (max-width: 1864px) {

    max-height: 315px;

  }

  @media screen and (min-width: 1200px) and (max-width: 1399px) {

    max-height: 270px;

  }

  @media screen and (min-width: 992px) and (max-width: 1199px) {

    max-height: 335px;

  }

  @media screen and (min-width: 768px) and (max-width: 991px) {

    max-height: 260px;

  }

`;

export const TituloPrincipalEtapa = styled.h2`

  font-size: ${({theme})=>theme.fontSize["4xl"]};
  font-weight: 600;
  margin-bottom: 1rem;


  @media screen and (min-width: 0px) and (max-width: 767px) {

    font-size: ${({theme})=>theme.fontSize["3xl"]};

  }

`;

export const NumEtapa = styled.span`

  font-size: ${({theme})=>theme.fontSize["4xl"]};
  color: ${({theme})=>theme.colors.ligthPurple};
  font-weight: 600;

`;

export const TituloEtapa = styled.h3`

  font-size: ${({theme})=>theme.fontSize.lg};
  font-weight: 600;

`;

export const TituloCaracteristicas = styled.h3`

  font-size: ${({theme})=>theme.fontSize["3xl"]};

  @media screen and (min-width: 0px) and (max-width: 329px) {

    font-size: ${({theme})=>theme.fontSize["2xl"]};

  }

`;

export const SubTituloCaracteristicas = styled.h2`

  font-size: ${({theme})=>theme.fontSize.xl};
  color: ${({theme})=>theme.colors.purple};
  font-weight: 600;

  @media screen and (min-width: 0px) and (max-width: 329px) {

    font-size: ${({theme})=>theme.fontSize.md};

  }

`;

export const TituloTumb = styled.h3`
  font-size: ${({theme})=>theme.fontSize["3xl"]};
  color: ${({theme})=>theme.colors.darkPurple};
  font-weight: 600;

  @media screen and (min-width: 992px) and (max-width: 1199px) {

    font-size: ${({theme})=>theme.fontSize["2xl"]};

  }

  @media screen and (min-width: 0px) and (max-width: 767px) {

    font-size: ${({theme})=>theme.fontSize["2xl"]};

  }

`;

export const TextoTumb = styled.p`

  font-size: ${({theme})=>theme.fontSize.base};

  @media screen and (min-width: 0px) and (max-width: 329px) {

    font-size: ${({theme})=>theme.fontSize.sm};

  }

`;
