import { Container } from './styles';

import Banner1_768 from '../../../img/banners/bn1/768.avif';
import Banner1_1024 from '../../../img/banners/bn1/1024.avif';
import Banner1_1366 from '../../../img/banners/bn1/1366.avif';
import Banner1_1600 from '../../../img/banners/bn1/1600.avif';
import Banner1_1800 from '../../../img/banners/bn1/1800.avif';
import Banner1_1920 from '../../../img/banners/bn1/1920.avif';

import Banner2_768 from '../../../img/banners/bn2/768.avif';
import Banner2_1024 from '../../../img/banners/bn2/1024.avif';
import Banner2_1366 from '../../../img/banners/bn2/1366.avif';
import Banner2_1600 from '../../../img/banners/bn2/1600.avif';
import Banner2_1800 from '../../../img/banners/bn2/1800.avif';
import Banner2_1920 from '../../../img/banners/bn2/1920.avif';

import Banner3_768 from '../../../img/banners/bn3/768.avif';
import Banner3_1024 from '../../../img/banners/bn3/1024.avif';
import Banner3_1366 from '../../../img/banners/bn3/1366.avif';
import Banner3_1600 from '../../../img/banners/bn3/1600.avif';
import Banner3_1800 from '../../../img/banners/bn3/1800.avif';
import Banner3_1920 from '../../../img/banners/bn3/1920.avif';

import { IoChevronForward } from "react-icons/io5";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';


export default function Inicio(){

  AOS.init();

  return(

    <>

      <Container>

        <div id="carouselInicio" className="carousel slide" data-bs-ride="carousel" data-bs-pause="false">

          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselInicio" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselInicio" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselInicio" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>

          <div className="carousel-inner">

            <div className="carousel-item active" data-bs-interval="5000">

                <picture>
                  <source type="image/png" srcSet={`${Banner1_768} 768w, ${Banner1_1024} 1024w, ${Banner1_1366} 1366w, ${Banner1_1600} 1600w, ${Banner1_1800} 1800w, ${Banner1_1920} 1919w, ${Banner1_1920} 1920w`} sizes="(max-aspect-ratio: 1800/844) 213vh" />
                  <img fetchPriority="high" decoding="async" src={Banner1_1800} width="1800" height="844" alt="Ecossistema de marketing Be4Code" loading="lazy" data-aos="fade-zoom-in" data-aos-delay="100" />
                </picture>

              <div className="carousel-caption">

                <div className="container-fluid h-100">

                  <div className="row align-items-center h-100">

                    <div className="col-xl-8 col-xxl-6">

                      <h1 data-aos="fade-right" data-aos-duration="1500">Agência de Marketing Digital</h1>
                      <h2 data-aos="fade-right" data-aos-duration="1500">Soluções Digitais para Impulsionar Pequenas e Grandes Empresas</h2>
                      <p className='mb-4' data-aos="fade-right" data-aos-duration="1500">Integramos tecnologia e design para desenvolver sites, sistemas e estratégias que conectam sua marca ao público ideal, elevando seu posicionamento no mercado.</p>

                      <a href="#servicos" data-aos="fade-right" data-aos-duration="1500" className='btn purpleBtn rounded'>Conheça Nossas Soluções <IoChevronForward /></a>

                    </div>

                  </div>

                </div>

              </div>

            </div>

            <div className="carousel-item" data-bs-interval="5000">

                <picture>
                  <source type="image/webp" srcSet={`${Banner2_768} 768w, ${Banner2_1024} 1024w, ${Banner2_1366} 1366w, ${Banner2_1600} 1600w, ${Banner2_1800} 1800w, ${Banner2_1920} 1919w, ${Banner2_1920} 1920w`} sizes="(max-aspect-ratio: 1800/844) 213vh" />
                  <img fetchPriority="high" decoding="async" src={Banner2_1800} width="1800" height="844" alt="Ecossistema de marketing Be4Code" loading="lazy" data-aos="fade-zoom-in" data-aos-delay="100" />
                </picture>

              <div className="carousel-caption">

                <div className="container-fluid h-100">

                  <div className="row align-items-center h-100">

                    <div className="col-xl-6">

                      <h1 data-aos="fade-right" data-aos-duration="1500">Especialistas em Design e Branding para Empresas em Todo o Brasil</h1>
                      <h2 data-aos="fade-right" data-aos-duration="1500">Criação de Identidade Visual e Fortalecimento da Marca</h2>
                      <p className='mb-4' data-aos="fade-right" data-aos-duration="1500">Desenvolvemos logotipos, paletas de cores e materiais gráficos exclusivos que traduzem a essência do seu negócio e criam conexões duradouras com seus clientes.</p>

                      <Link to="https://wa.me/" target='_blank' className='btn purpleBtn rounded'>Solicite um Orçamento <IoChevronForward /></Link>

                    </div>

                  </div>

                </div>

              </div>

            </div>

            <div className="carousel-item" data-bs-interval="5000">

                <picture>
                  <source type="image/webp" srcSet={`${Banner3_768} 768w, ${Banner3_1024} 1024w, ${Banner3_1366} 1366w, ${Banner3_1600} 1600w, ${Banner3_1800} 1800w, ${Banner3_1920} 1919w, ${Banner3_1920} 1920w`} sizes="(max-aspect-ratio: 1800/844) 213vh" />
                  <img fetchPriority="high" decoding="async" src={Banner3_1800} width="1800" height="844" alt="Ecossistema de marketing Be4Code" loading="lazy" data-aos="fade-zoom-in" data-aos-delay="100" />
                </picture>

              <div className="carousel-caption">
                <div className="container-fluid h-100">

                  <div className="row align-items-center h-100">

                    <div className="col-xl-6">

                      <h1 data-aos="fade-right" data-aos-duration="1500">Agência de Publicidade Digital e Gestão de Anúncios</h1>
                      <h2 data-aos="fade-right" data-aos-duration="1500">Estratégias de Tráfego Pago e Mídia Online</h2>
                      <p className='mb-4' data-aos="fade-right" data-aos-duration="1500">Gerenciamento de campanhas em Google Ads, Meta Ads e outras plataformas para atrair mais leads, gerar vendas e fortalecer sua presença digital.</p>

                      <Link to="https://wa.me/" target='_blank' className='btn purpleBtn rounded'>Fale com um Especialista <IoChevronForward /></Link>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </Container>

    </>

  )

}
