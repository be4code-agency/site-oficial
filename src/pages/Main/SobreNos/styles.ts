import styled from "styled-components";

export const ContainerResult = styled.div`

  background-color: ${({theme})=>theme.colors.white};
  color: ${({theme})=>theme.colors.darkPurple};
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem;
  gap: .5rem;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;

`;

export const Texto = styled.p`

  font-size: ${({theme})=>theme.fontSize.md};

`;
