import styled from "styled-components";

export const Container = styled.div`

  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: rgba(14, 63, 126, 0.04) 0px 0px 0px 1px, rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.04) 0px 6px 6px -3px, rgba(14, 63, 126, 0.04) 0px 12px 12px -6px, rgba(14, 63, 126, 0.04) 0px 24px 24px -12px;
  border-radius: .5rem;
  padding: 1rem;
  height: 100%;

  h2{
    font-size: ${({theme})=>theme.fontSize["2xl"]}
  }

  h3{
    font-size: ${({theme})=>theme.fontSize.md};
    color: ${({theme})=>theme.colors.purple};
    font-weight: 600;
  }

  .tecnologia{

    color: ${({theme})=>theme.colors.black};
    cursor: pointer;
    transition: color .5s;

    &:hover{

      color: ${({theme})=>theme.colors.purple};

    }

  }

  @media screen and (min-width: 0px) and (max-width: 329px) {

    h2{
      font-size: ${({theme})=>theme.fontSize.xl}
    }

    h3{
      font-size: ${({theme})=>theme.fontSize.sm};
    }

    p{

      font-size: ${({theme})=>theme.fontSize.md};

    }

  }

`;

export const Tumbnail = styled.div`

  border-radius: 25px;
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  img{
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }

`;
