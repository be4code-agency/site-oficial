import styled, {css} from "styled-components";

interface ContainerProps{

  bgTheme: string

}

export const Container = styled.div<ContainerProps>`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  text-align: center;
  padding: 5rem 3rem;
  border-radius: 10px;
  height: 100%;

  ${({bgTheme})=>{return bgTheme === 'dark'
? css`background-color: ${({theme})=>theme.colors.darkPurple}; color: ${({theme})=>theme.colors.white};`
: css`background-color: ${({theme})=>theme.colors.purple}; color: ${({theme})=>theme.colors.white};`}}

  h2{
    font-size: ${({theme})=>theme.fontSize.lg};
  }

  h3{
    font-size: ${({theme})=>theme.fontSize["4xl"]};
    font-weight: 700;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {

    padding: 5rem 1rem;

    h2{
      font-size: ${({theme})=>theme.fontSize.md};
    }

    h3{
      font-size: ${({theme})=>theme.fontSize["2xl"]};
    }

  }

  @media screen and (min-width: 330px) and (max-width: 767px) {

    padding: 5rem 1.5rem;

    h2{
      font-size: ${({theme})=>theme.fontSize.md};
    }

    h3{
      font-size: ${({theme})=>theme.fontSize["2xl"]};
    }

  }

  @media screen and (min-width: 0px) and (max-width: 329px) {

    padding: 3rem 1rem;

    h2{
      font-size: ${({theme})=>theme.fontSize.sm};
    }

    h3{
      font-size: ${({theme})=>theme.fontSize.xl};
    }

  }

`;
