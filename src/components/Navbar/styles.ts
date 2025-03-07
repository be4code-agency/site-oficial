import styled, {css} from "styled-components";

interface NavItemProps{

  isBlack: boolean
  widthScreen: number

}

export const NavItem = styled.span<NavItemProps>`

  font-weight: 600;
  color: ${({isBlack, widthScreen})=>{return isBlack && widthScreen > 991 ? css`${({theme})=>theme.colors.black};` : css`${({theme})=>theme.colors.white};`}};
  cursor: pointer;
  transition: .5s;

  &:hover{

    color: ${({theme})=>theme.colors.purple};

  }

`;

export const LogoNavbar = styled.img`

  width: 60px;

  @media screen and (min-width: 0px) and (max-width: 767px) {

    width: 40px;

  }

`;
