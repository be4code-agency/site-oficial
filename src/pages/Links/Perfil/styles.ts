import styled from "styled-components";

export const Container = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: -5rem;
  margin-bottom: 2.5rem;

`;

export const ImgProfile = styled.img`

  width: 33.3%;
  border-radius: 50%;
  border: 5px solid ${({theme})=>theme.colors.white};

  @media screen and (max-width: ${({theme})=>theme.breakPoints.md}){

    width: 40%;

  }

`;

export const Informations = styled.div`

  text-align: center;

  h1,
  h2{
      margin: 0;
      padding: 0;
  }

  h1{

    font-size: ${({theme})=>theme.fontSize["2xl"]};
    font-weight: 600;
    margin-bottom: .8rem;

  }

  h2{

    font-size: ${({theme})=>theme.fontSize.md};

  }

`;

export const RedesSociais = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media screen and (max-width: ${({theme})=>theme.breakPoints.xs}) {

    gap: .6rem;

  }

`;

export const LinkRedeSocial = styled.a`

  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  text-decoration: none;
  color: ${({theme})=>theme.colors.white};
  font-size: ${({theme})=>theme.fontSize.lg};
  transition: .5s;

  svg{
    width: 20px;
  }

  &:hover{
    color: ${({theme})=>theme.colors.white};
    transform: translateY(-8px);
  }

  &.whatsapp{
    background-color: #25d366;
  }

  &.instagram{
    background: #f09433;
    background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
    background: -webkit-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
    background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f09433', endColorstr='#bc1888', GradientType=1);
  }

  &.tiktok{
    background-color: ${({theme})=>theme.colors.black};
  }

  &.linkedin{
    background-color: #087ebb;
  }

  &.github{
    background-color: #2f2f2f;
  }

  &.twitch{
    background-color: #944cff;
  }

  &.behance{
    background-color: #085cff;
  }

  @media screen and (max-width: ${({theme})=>theme.breakPoints.md}){

    width: 32px;
    height: 32px;

    svg{
      width: 18px;
    }

  }

`;
