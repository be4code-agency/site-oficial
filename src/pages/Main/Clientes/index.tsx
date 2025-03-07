import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Alexbw from '../../../img/clientes/alexbw.avif';
import AmazoniaViva from '../../../img/clientes/amazonia_viva.avif';
import DogVibe from '../../../img/clientes/dog_vibe.avif';
import Eldorado from '../../../img/clientes/eldorado.avif';
import FroidDsgn from '../../../img/clientes/froid_dsgn.avif';
import Tangua from '../../../img/clientes/prefeitura_tangua.avif';
import RpConstantido from '../../../img/clientes/rp_constantino.avif';
import SavegnagoBarber from '../../../img/clientes/savegnago_barber.avif';
import Galfort from '../../../img/clientes/galfort.avif';

export default function Clientes(){

  const settings = {
    arrows: false,
    dots: false,
    draggable: false,
    infinite: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    swipe: false,
    touchMove: false,
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
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
        breakpoint: 850,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
        }
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 7,
        }
      },
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 8,
        }
      },
    ]
  };

  return(


      <article className="container-fluid py-5 px-0" data-aos="zoom-in">

        <section className="row">

          <div className="col-12 mb-5 text-center">

            <h2 className="fs-4 fw-semibold">Empresas que confiam em nossa expertise</h2>

          </div>

          <div className="col-12">

            <Slider {...settings} className="m-0">

              <img className="px-5" src={Alexbw} alt="Alex Brandow" />
              <img className="px-5" src={AmazoniaViva} alt="Amazonia Viva Games" />
              <img className="px-5" src={DogVibe} alt="Dog Vibe" />
              <img className="px-5" src={Eldorado} alt="Eldorado - Pintura Predial" />
              <img className="px-5" src={FroidDsgn} alt="Froid Dsgn" />
              <img className="px-5" src={Tangua} alt="Prefeitura de Tanguá" />
              <img className="px-5" src={RpConstantido} alt="RP Constantino" />
              <img className="px-5" src={SavegnagoBarber} alt="Savegnago Barber" />
              <img className="px-5" src={Galfort} alt="Galfort - Estrutura Metálica" />

            </Slider>

          </div>

        </section>

      </article>


  )

}
