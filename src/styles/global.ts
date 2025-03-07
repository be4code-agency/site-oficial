import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  *,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .offcanvas{

    background-color: ${({theme})=>theme.colors.darkPurple};
    color: ${({theme})=>theme.colors.white};
  }

  .container-fluid{

    padding-right: 8rem;
    padding-left: 8rem;

    @media screen and (min-width: 992px) and (max-width: 1199px) {

      padding-right: 4rem;
      padding-left: 4rem;

    }

    @media screen and (min-width: 768px) and (max-width: 991px) {

      padding-right: 1.5rem;
      padding-left: 1.5rem;

    }

    @media screen and (min-width: 330px) and (max-width: 767px) {

      padding-right: 1rem;
      padding-left: 1rem;

    }

    @media screen and (min-width: 0px) and (max-width: 329px) {

      padding-right: 1rem;
      padding-left: 1rem;

    }

  }

  .accordion-button{

    background-color: ${({theme})=>theme.colors.white};
    font-weight: 600;
    font-size: ${({theme})=>theme.fontSize.lg};
    box-shadow: none;
    color: ${({theme})=>theme.colors.darkPurple};

  }

  .accordion-button:not(.collapsed){

    color: ${({theme})=>theme.colors.darkPurple};
    background-color: ${({theme})=>theme.colors.white};
    border: 1px solid ${({theme})=>theme.colors.ligthPurple};
    box-shadow: none;

  }

  .navbar-nav .nav-link.active, .navbar-nav .nav-link.show{
    color: ${({theme})=>theme.colors.purple};
  }

  body, html{
    overflow-x: hidden;
  }

  body{
    font-family: ${({theme})=>theme.fontFamily.raleway};
    color: ${({theme})=>theme.colors.darkPurple};
  }

  ::-webkit-scrollbar {
    width: 6px;
    transition: all .4s ease;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({theme})=>theme.colors.purple};
    border-radius: 999px;
    width: 6px;
    transition: all .4s ease;
  }

  ::-webkit-scrollbar-track {
    background: ${({theme})=>theme.colors.white};
    width: 6px;
  }

  /* Estiliza a parte da barra de rolagem que está sendo clicada */
  ::-webkit-scrollbar-thumb:active {
    background: ${({theme})=>theme.colors.purpleHover}; /* cor do polegar ao ser clicado */
  }

  /* ALTERA A COR DO TEXTO SELECIONADO */
  ::selection {
    background-color: ${({theme})=>theme.colors.ligthPurple};
    color: ${({theme})=>theme.colors.white};
  }

  .titulo{

    color: ${({theme})=>theme.colors.darkPurple};
    font-size: ${({theme})=>theme.fontSize['4xl']};
    font-weight: 700;

    @media screen and (min-width: 768px) and (max-width: 1199px) {

      font-size: ${({theme})=>theme.fontSize['3xl']};

    }

    @media screen and (min-width: 330px) and (max-width: 767px) {

      font-size: ${({theme})=>theme.fontSize['3xl']};

    }

    @media screen and (min-width: 0px) and (max-width: 329px) {

      font-size: ${({theme})=>theme.fontSize['2xl']};

    }

  }

  .bgGray{

    background-color: ${({theme})=>theme.colors.ligthGray};

  }

  .bgWhite{
    background-color: ${({theme})=>theme.colors.white};
    transition: .5s;
  }

  .bgDegrade{
    background: linear-gradient(50deg, #8D8AED 10%, #3A36BF 100%);
  }

  .purple{
    color: ${({theme})=>theme.colors.purple};
  }

  .white{
    color: ${({theme})=>theme.colors.white};
  }

  .purpleBtn{

    position: relative;
    padding: 10px 22px;
    border-radius: 999px;
    border: none;
    color: #fff;
    cursor: pointer;
    background-color: ${({theme})=>theme.colors.purple};
    transition: 0.5s;
    text-decoration: none;

    &:disabled{
      background-color: ${({theme})=>theme.colors.ligthPurple};
    }

    &:hover{

      background-color: ${({theme})=>theme.colors.purpleHover};
      color: ${({theme})=>theme.colors.white};
      box-shadow: 0 0 30px 0 #8D8AED66;
    }

  }

  .shadowBtn{

    box-shadow: 0 0 30px 0 #8D8AED66;

  }

  .purpleOutlineBtn{

    background-color: ${({theme})=>theme.colors.white};
    color: ${({theme})=>theme.colors.purple};
    border: 1px solid ${({theme})=>theme.colors.purple};
    border-radius: 10px;
    text-decoration: none;
    transition: .5s;

    &:hover{

      background-color: ${({theme})=>theme.colors.ligthPurple};
      color: ${({theme})=>theme.colors.white};

    }

  }

  .gradientBtn{
    background: ${({theme})=>theme.colors.gradientPurple};
    color: ${({theme})=>theme.colors.white};
    font-weight: 500;
    border-radius: 10px;
    transition: .5s;
    text-decoration: none;
    border: none;

    &:hover{

      background: linear-gradient(45deg, #30bdff 20%, #30bdff 100%);
      color: ${({theme})=>theme.colors.white};

    }

  }

  .darkPurpleBtn{
    background-color: ${({theme})=>theme.colors.darkPurple};
    color: ${({theme})=>theme.colors.white};
    transition: .5s;

    &:hover{
      background-color: ${({theme})=>theme.colors.black};
      color: ${({theme})=>theme.colors.white};
    }

  }

  .form-check-input:checked {
    background-color: ${({theme})=>theme.colors.purple};
    border-color: ${({theme})=>theme.colors.purple};
  }

  .error{
    color: #FF6347;
  }

  .bgPurple{

    background-color: ${({theme})=>theme.colors.purple}

  }

  .bgDarkPurple{
    background-color: ${({theme})=> theme.colors.darkPurple};
  }

  .vh-100{

    height: 100vh;

  }

  .loader{

    width: 60px;
    height: 60px;

    &::before{

      content: "";
      box-sizing: border-box;
      position: absolute;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      border-top: 2px solid ${({theme})=>theme.colors.purple};
      border-right: 2px solid transparent;
      animation: spinner 0.8s linear infinite;

    }

    @keyframes spinner {

      to {
        transform: rotate(360deg);
      }

    }

  }

  .inputForm{

  width: 100%;
  height: 40px;
  line-height: 30px;
  padding: .375rem .75rem;
  border: 1px solid #dee2e6;
  border-radius: 10px;
  outline: none;
  background-color: ${({theme})=>theme.colors.white};
  color: ${({theme})=>theme.colors.black};
  transition: .5s ease;

  &::placeholder{

    color: #94a3b8;

  }

  &:focus,
  &:hover{

  outline: none;
  border-color: rgba(129, 140, 248);
  background-color: #fff;
  box-shadow: 0 0 0 3px rgb(129 140 248 / 30%);

  }

  }

`
