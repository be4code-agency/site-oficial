import styled from 'styled-components';

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100dvh;
  text-align: center;

  p{

    margin-bottom: 1rem;

  }

  @media screen and (max-width: ${({theme})=>theme.breakPoints.xs}) {

    padding: 1rem .5rem;

    p{

      margin-bottom: .5rem;

    }

  }

`;

export const Image = styled.img`
  width: 100%;
  max-width: 550px;

  @media screen and (max-width: ${({theme})=>theme.breakPoints.xs}) {

    width: 90%;

  }

`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize['4xl']};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.purple};
  margin-bottom: 1rem;

  @media screen and (max-width: ${({theme})=>theme.breakPoints.xs}) {

    font-size: ${({ theme }) => theme.fontSize['2xl']};

  }

`;
