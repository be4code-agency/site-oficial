import { Link } from "react-router-dom";

import { Service } from "./Service";

import CostumizationIcon from '../../../img/icones/site_personalizado.png';
import OptimizationIcon from '../../../img/icones/otimizacao.png';
import TrafegoPagoIcon from '../../../img/icones/ads_icon.png';
import SeoIcon from '../../../img/icones/seo.png';
import EcommerceIcon from '../../../img//icones/ecommerce.png';
import SocialMedia from '../../../img//icones/social_media_icon.png';

import { IoChevronForwardOutline } from "react-icons/io5";

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Servicos(){

  AOS.init();

  return(

    <div className="bgGray" id="servicos">

      <article className="container-fluid py-5">

      <section className="row mb-3">

        <div className="col-12 mb-5 text-center" data-aos="zoom-in" data-aos-delay="100" id="services">

          <h2 className="fs-2 fw-semibold">Criação de Sites e <span className="purple">Marketing Digital</span></h2>

        </div>

        <div className="col-sm-6 col-xl-4 mb-4"data-aos="zoom-in" data-aos-delay="100">

          <Service icon={CostumizationIcon} title="Sites Personalizados" text="Desenvolvemos sites personalizados para atender às suas necessidades específicas e garantir maior presença online." altIcon="Icone serviço site personalizado" />

        </div>

        <div className="col-sm-6 col-xl-4 mb-4" data-aos="zoom-in" data-aos-delay="150">

          <Service icon={OptimizationIcon} title="Otimização" text="Melhoramos o desempenho e a velocidade do seu site para garantir uma experiência de usuário ágil e satisfatória, aumentando sua visibilidade online." altIcon="Icone serviço Otimização" />

        </div>

        <div className="col-sm-6 col-xl-4 mb-4" data-aos="zoom-in" data-aos-delay="200">

          <Service icon={TrafegoPagoIcon} title="Tráfego Pago" text="Administramos campanhas de tráfego pago para atrair clientes qualificados e aumentar as conversões do seu negócio, impulsionando seus resultados online." altIcon="Icone serviço Trafego Pago" />

        </div>

        <div className="col-sm-6 col-xl-4 mb-4" data-aos="zoom-in" data-aos-delay="250">

          <Service icon={SeoIcon} title="SEO" text="Estratégias de SEO personalizadas para aumentar a visibilidade e o ranking do seu site nos motores de busca." altIcon="Icone serviço SEO Personalizado" />

        </div>

        <div className="col-sm-6 col-xl-4 mb-4" data-aos="zoom-in" data-aos-delay="300">

          <Service icon={EcommerceIcon} title="E-Commerce" text="Desenvolvemos lojas online personalizadas para destacar seus produtos ou serviços e melhorar sua presença digital." altIcon="Icone serviço E-commerce" />

        </div>

        <div className="col-sm-6 col-xl-4 mb-4" data-aos="zoom-in" data-aos-delay="350">

          <Service icon={SocialMedia} title="Social Media" text="Gerenciamos suas redes sociais com estratégias criativas para engajar seu público e aumentar sua presença online." altIcon="Icone serviço Social Media" />

        </div>

      </section>{/*AQUI É O FINAL*/}

      <section className="row">

        <div className="col-12 text-center" data-aos="zoom-in" data-aos-delay="100">

          <Link to="https://wa.me/5511974808118" target="_blank" rel="noreferrer"  className="btn btn-lg gradientBtn">Consultoria Grátis <IoChevronForwardOutline /></Link>

        </div>

      </section>

    </article>

    </div>

  )

}
