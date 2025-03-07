import styled from 'styled-components';

export const Container = styled.footer`

  background-color: ${({theme})=>theme.colors.darkPurple};
  color: ${({theme})=>theme.colors.white};
  padding: 5rem 0;
  transition: .5s;

  img{

    width: 60px;

  }

  .border-top{

    border-color: #a2a2a2;

  }

`;

export const ListaFooter = styled.span`

  color: ${({theme})=>theme.colors.white};

  &:hover,
  &:active,
  &:focus{

    color: ${({theme})=>theme.colors.ligthPurple};

  }

`;

export const RedeSocial = styled.a`

  border: 1px solid #a2a2a2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 999px;
  color: ${({theme})=>theme.colors.white};
  transition: .5s;

  &:hover{

    background-color: ${({theme})=>theme.colors.ligthPurple};
    border-color: ${({theme})=>theme.colors.ligthPurple};

  }

`;
