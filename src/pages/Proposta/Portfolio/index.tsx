import { Image, Titulo, Texto } from './styles';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import Agency from '../../../img/portfolio/agency_website.png';
import Barber from '../../../img/portfolio/barber_website.png';
import CarSale from '../../../img/portfolio/car_sale.png';
import Hamburger from '../../../img/portfolio/hambuger_site.png';
import Hospital from '../../../img/portfolio/hospital_website.png';
import Institucional from '../../../img/portfolio/institucional_site.png';
import SchoolInternational from '../../../img/portfolio/internacional_school.png';
import OnlineShop from '../../../img/portfolio/online_shop_lp.png';
import PersonalTrainer from '../../../img/portfolio/personal_trainer.png';
import University from '../../../img/portfolio/university.png';

export default function Portfolio(){

  const settings = {
    arrows: false,
    dots: false,
    draggable: false,
    infinite: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    swipe: false,
    touchMove: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 8000,
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
          slidesToShow: 5,
        }
      },
    ]
  };

  return(

    <article className='row py-5'>

      <div className="col-12 text-center mb-5">

        <Titulo>Conheça nosso Portfólio</Titulo>
        <Texto className='text-muted'>Confira abaixo algumas páginas desenvolvidas pela nossa equipe</Texto>

      </div>

      <div className="col-12">

        <Slider {...settings}>

            <Image src={Agency} alt="Projeto de uma agência" />
            <Image src={Barber} alt="Projeto de uma Barbearia" />
            <Image src={CarSale} alt="Projeto de loja de carros" />
            <Image src={Hamburger} alt="Projeto de uma hamburgueria" />
            <Image src={Hospital} alt="Projeto de uma clinica médica" />
            <Image src={Institucional} alt="Projeto de um site institucional" />
            <Image src={SchoolInternational} alt="Projeto de uma Escola internacional" />
            <Image src={OnlineShop} alt="Projeto de uma loja online" />
            <Image src={PersonalTrainer} alt="Projeto de um personal trainer" />
            <Image src={University} alt="Projeto de um universidade" />

        </Slider>

      </div>

    </article>

  )

  /* return(

    <article className="row py-5">

      <section className="col-12">

        <h2>Conheça nosso portfólio</h2>
        <p>Confira abaixo algumas páginas desenvolvidas pela nossa equipe</p>

      </section>

    </article>

  ) */

}
