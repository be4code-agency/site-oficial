import styled from "styled-components";

export const Container = styled.header`

  height: 100dvh;
  width: 100%;

  img,picture{
    width: 100%;
    height: 100dvh;
    object-fit: cover;
    object-position: left;
    max-width: none;

    @media screen and (min-width: 330px) and (max-width: 767px){

      object-position: 25%;

    }

    @media screen and (min-width: 0px) and (max-width: 329px){

      object-position: 20%;

    }

  }

  .carousel-caption{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    text-align: start;

    h1{
      font-size: ${({theme})=>theme.fontSize["2xl"]};
    }

    h2{
      font-size: ${({theme})=>theme.fontSize["5xl"]};
      font-weight: 700;
    }

    @media screen and (min-width: 768px) and (max-width: 991px) {

      h1{
        font-size: ${({theme})=>theme.fontSize.xl};
      }

      h2{
        font-size: ${({theme})=>theme.fontSize["4xl"]};
        font-weight: 700;
      }

    }

    @media screen and (min-width: 330px) and (max-width: 767px) {

      h1{
        font-size: ${({theme})=>theme.fontSize.md};
      }

      h2{
        font-size: ${({theme})=>theme.fontSize["3xl"]};
        margin-bottom: .8rem;
      }

      p{
        font-size: ${({theme})=>theme.fontSize.base};
      }

    }

    @media screen and (min-width: 0px) and (max-width: 329px) {

      h1{
        font-size: ${({theme})=>theme.fontSize.sm};
      }

      h2{
        font-size: ${({theme})=>theme.fontSize["2xl"]};
        margin-bottom: .8rem;
      }

      p{
        font-size: ${({theme})=>theme.fontSize.md};
      }

    }

  }

  .carousel-indicators [data-bs-target]{

    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-left: 12px;
  }

  .carousel-indicators .active{

    background-color: ${({theme})=>theme.colors.purple};

  }

`;
