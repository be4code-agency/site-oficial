import styled, { css } from "styled-components";

interface BannerProps{
  banner: string
}

export const Banner = styled.header<BannerProps>`

  background: ${({banner})=>banner ? css`url(${banner})` : css`${({theme})=>theme.colors.darkPurple}`};
  background-size: cover;
  background-position: center;
  height: 100dvh;

  div{

    color: ${({theme})=>theme.colors.white};

    *{
      margin: 0;
    }

    h1{
      font-size: ${({theme})=>theme.fontSize["5xl"]};
      font-weight: 700;
    }

    p{

      font-size: ${({theme})=>theme.fontSize.lg};

    }

    @media screen and (min-width: 330px) and (max-width: 767px) {

      h1{

        font-size: ${({theme})=>theme.fontSize["5xl"]};

      }

      p{

        font-size: ${({theme})=>theme.fontSize.lg};

      }

    }

    @media screen and (min-width: 0px) and (max-width: 329px) {

      h1{

        font-size: ${({theme})=>theme.fontSize["4xl"]};

      }

      p{

        font-size: ${({theme})=>theme.fontSize.md};

      }

    }

  }

`;
