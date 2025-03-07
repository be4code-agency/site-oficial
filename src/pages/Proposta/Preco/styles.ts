import styled from "styled-components";

export const Container = styled.div`

  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  padding: 3rem;
  border-radius: 20px;
  width: 100%;
  max-width: 600px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${({theme})=>theme.breakPoints.sm}){

    padding: 3rem 1rem;

    p{

      font-size: ${({theme})=>theme.fontSize.md};

    }

  }

`;

export const Titulo = styled.h2`

  font-weight: 700;
  font-size: ${({theme})=>theme.fontSize["3xl"]};
  margin-bottom: 2rem;

  span{

    background: linear-gradient(50deg, #8D8AED 10%, #3A36BF 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

  }

  @media screen and (max-width: ${({theme})=>theme.breakPoints.sm}){

    font-size: ${({theme})=>theme.fontSize["2xl"]};

  }

  @media screen and (max-width: ${({theme})=>theme.breakPoints.xs}){

    font-size: ${({theme})=>theme.fontSize.xl};

  }

`;

export const SubTitulo = styled.h3`

  font-size: ${({theme})=>theme.fontSize["2xl"]};
  font-weight: 600;
  background: linear-gradient(50deg, #8D8AED 10%, #3A36BF 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: ${({theme})=>theme.breakPoints.sm}){

    font-size: ${({theme})=>theme.fontSize.xl};

  }

`;

export const PrecoTotal = styled.span`

  font-size: ${({theme})=>theme.fontSize["4xl"]};
  font-weight: 600;


  @media screen and (max-width: ${({theme})=>theme.breakPoints.sm}){

    font-size: ${({theme})=>theme.fontSize["3xl"]};

  }

  @media screen and (max-width: ${({theme})=>theme.breakPoints.xs}){

    font-size: ${({theme})=>theme.fontSize["2xl"]};

  }

`;

export const PrecoDesconto = styled.span`

  font-size: ${({theme})=>theme.fontSize["5xl"]};
  font-weight: 600;
  margin-bottom: 1rem;
  background: linear-gradient(50deg, #8D8AED 10%, #3A36BF 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: ${({theme})=>theme.breakPoints.sm}){

    font-size: ${({theme})=>theme.fontSize["5xl"]};

  }

  @media screen and (max-width: ${({theme})=>theme.breakPoints.xs}){

    font-size: ${({theme})=>theme.fontSize["4xl"]};

  }

`;

export const Botao = styled.a`

  background-color: ${({theme})=>theme.colors.purple};
  color: ${({theme})=>theme.colors.white};
  font-size: ${({theme})=>theme.fontSize["2xl"]};
  font-weight: 500;
  width: 100%;
  height: 60px;
  border-radius: 999px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin-top: 1rem;

  @media screen and (max-width: ${({theme})=>theme.breakPoints.sm}){

    height: 50px;
    font-size: ${({theme})=>theme.fontSize.lg};

  }

  @media screen and (max-width: ${({theme})=>theme.breakPoints.xs}){

    height: 40px;
    font-size: ${({theme})=>theme.fontSize.lg};

  }

`;

export const TituloData = styled.h4`

  font-size: ${({theme})=>theme.fontSize.lg};
  color: ${({theme})=>theme.colors.purple};
  font-weight: 600;

`;

export const TituloBeneficios = styled.h4`

  font-size: ${({theme})=>theme.fontSize.sm};

`;

export const ContainerPagamentos = styled.div`

  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem;
  gap: 1rem;

  svg{
    color: ${({theme})=>theme.colors.purple};
    width: 35px;
    height: 35px;
  }

  @media screen and (max-width: ${({theme})=>theme.breakPoints.xs}){

    svg{
      width: 25px;
      height: 25px;
    }

  }

`;
