import styled from "styled-components";

export const Container = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  margin-bottom: 1rem;

  a{

    background: ${({theme})=>theme.colors.purple};
    background: linear-gradient(45deg, rgba(141,138,237,1) 20%, rgba(58,54,191,1) 100%);
    color: ${({theme})=>theme.colors.white};
    text-decoration: none;
    padding: .5rem 1.5rem;
    border-radius: 10px;
    font-size: ${({theme})=>theme.fontSize.xl};
    font-weight: 600;
    transition: .5s;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{

      color: ${({theme})=>theme.colors.white};
      transform: translateY(-5px);

    }

    @media screen and (max-width: ${({theme})=>theme.breakPoints.md}) {

      font-size: ${({theme})=>theme.fontSize.lg};

    }

  }

`;
