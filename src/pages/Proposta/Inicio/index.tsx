import { Container, LogoImg, Saudacoes, TituloProposta, NomeCliente, TituloData, TextoData, TituloBeneficios, ContainerProposta, TextoProposta } from './styles';

import { FaCalendar, FaClock, FaShieldHalved, FaTrophy, FaLock, FaStar } from "react-icons/fa6";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import Logo from '../../../img/logos/icone_transparente.svg';

interface InicioProps{

  nome_cliente: string;
  data_envio: string;
  validade: number;

}

export default function Inicio({nome_cliente, data_envio, validade}: InicioProps){

  const settings = {
    arrows: false,
    dots: false,
    draggable: false,
    infinite: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    swipe: false,
    touchMove: false,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 615,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 6,
        }
      },
    ]
  };

  return(

    <article className="row">

      <Container className="col-12">

        <LogoImg src={Logo} alt="Logo Be4code" className="img-fluid" />
        <Saudacoes>Olá, <NomeCliente>{nome_cliente}</NomeCliente>. Esta é sua </Saudacoes>
        <TituloProposta>PROPOSTA <br /> COMERCIAL</TituloProposta>

        <a className="purpleBtn fs-md-4 fs-5 mb-3" href="https://wa.me/?text=Entendi%20toda%20a%20Proposta,%20quero%20aproveitar%20a%20oferta." target="_blank" rel="noreferrer">Garantir oferta</a>


        <div className="d-flex flex-row justify-content-around justify-content-md-center align-items-center gap-md-5 w-100">

          <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3">
            <FaCalendar className="purple" size={30} />
            <div className="d-flex flex-column justify-content-center align-items-center align-items-sm-start">
              <TituloData className="fs-6 fs-md-5">Data de envio</TituloData>
              <TextoData className="fs-6 fs-md-5">{data_envio}</TextoData>
            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3">
            <FaClock className="purple" size={30} />
            <div className="d-flex flex-column justify-content-center align-items-center align-items-sm-start">
              <TituloData className="fs-6 fs-md-5">Validade</TituloData>
              <TextoData className="fs-6 fs-md-5">{validade} dias</TextoData>
            </div>
          </div>

        </div>


        <div className="d-none d-sm-flex  gap-sm-4 gap-md-3">

          <div className="d-flex gap-2 align-items-center justify-content-center">
            <FaShieldHalved size={32} />
            <TituloBeneficios>Compra <br/> Segura</TituloBeneficios>
          </div>

          <div className="d-flex gap-2 align-items-center justify-content-center">
            <FaTrophy size={32} />
            <TituloBeneficios>Satisfação <br/> Garantida</TituloBeneficios>
          </div>

          <div className="d-flex gap-2 align-items-center justify-content-center">
            <FaLock size={32} />
            <TituloBeneficios>Privacidade <br/> Protegida</TituloBeneficios>
          </div>

        </div>

      </Container>



      <ContainerProposta>

        <Slider {...settings}>

          <TextoProposta><FaStar /> Proposta Comercial</TextoProposta>
          <TextoProposta><FaStar /> Proposta Comercial</TextoProposta>
          <TextoProposta><FaStar /> Proposta Comercial</TextoProposta>
          <TextoProposta><FaStar /> Proposta Comercial</TextoProposta>
          <TextoProposta><FaStar /> Proposta Comercial</TextoProposta>
          <TextoProposta><FaStar /> Proposta Comercial</TextoProposta>
          <TextoProposta><FaStar /> Proposta Comercial</TextoProposta>
          <TextoProposta><FaStar /> Proposta Comercial</TextoProposta>

        </Slider>

      </ContainerProposta>

    </article>

  )

}
