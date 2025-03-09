import { Container } from "./styles"

import { IoChevronForwardOutline } from "react-icons/io5";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";


export default function Orcamento(){

  AOS.init();

  return(

    <article className="container-fluid py-5">

      <section className="row">

        <div className="col-md-6 mb-3 mb-md-0" data-aos="zoom-in" data-aos-delay="100">

          <Container bgTheme="dark">

            <div>
              <h2 className="mb-2">Quero solicitar um orçamento online para Criação de Sites e Sistemas</h2>
              <h3>Sites Personalizados, E-Commerce e Sistemas Web Exclusivos</h3>
            </div>

            <Link to="https://wa.me/" target="_blank" className="btn btn-lg rounded purpleBtn shadowBtn">Solicitar orçamento agora <IoChevronForwardOutline /></Link>

          </Container>

        </div>

        <div className="col-md-6" data-aos="zoom-in" data-aos-delay="150">

          <Container bgTheme="light">

            <div>
              <h2 className="mb-2">Quero solicitar um orçamento online para Estratégias de Marketing</h2>
              <h3>Tráfego Pago, SEO e Gestão de Mídias Digitais</h3>
            </div>
            <Link to="https://wa.me/" target="_blank" className="btn btn-lg rounded darkPurpleBtn">Solicitar orçamento agora <IoChevronForwardOutline /></Link>

          </Container>

        </div>

      </section>

    </article>

  )

}
