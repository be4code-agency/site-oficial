import styled from "styled-components";

export const Loader = styled.div`

  font-size: 2em;
  font-weight: 700;

  > *{

    color: ${({theme})=>theme.colors.purple}

  }

  span{

    display: inline-flex;

    &:nth-child(2){

      letter-spacing: -1em;
      overflow: hidden;
      animation: reveal 2500ms cubic-bezier(0.645, 0.045, 0.355, 1) infinite alternate;

    }

  }

  @keyframes reveal {
  0%,
  100% {
    opacity: 0.5;
    letter-spacing: -1em;
  }
  50% {
    opacity: 1;
    letter-spacing: 0em;
  }
}

`;
