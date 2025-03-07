import styled from "styled-components";

export const Container = styled.div`

  background: #FDF9FF;
  margin-bottom: 1rem;
  padding: 1rem;
  width: 100%;
  border-radius: 5px;

  svg{
    color: ${({theme})=>theme.colors.purple}
  }

`;

export const Titulo = styled.h1`

  font-size: ${({theme})=>theme.fontSize.lg};
  font-weight: 600;

`;
