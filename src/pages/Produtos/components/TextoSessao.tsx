import { Link } from 'react-router-dom';
import {TituloTecnologia, TextoTecnologia } from './styles';

import { IoChevronForwardOutline } from "react-icons/io5";

interface TextoSessao{
  titulo: string
  texto: string
}

export default function TextoSessao({titulo, texto}: TextoSessao){

  return(

    <article className="container-fluid py-5">

      <section className="row justify-content-center">

        <div className="col-lg-8 col-xl-6 text-center" data-aos="fade-up" data-aos-anchor-placement="top-bottom">

          <TituloTecnologia className="mb-3">{titulo}<span className="purple">.</span></TituloTecnologia>

          <TextoTecnologia className="mb-4">{texto}</TextoTecnologia>

          <Link to={`https://wa.me/${process.env.REACT_APP_CONTACT_NUMBER}`} className="btn purpleOutlineBtn rounded">Entre em Contato <IoChevronForwardOutline /></Link>

        </div>

      </section>

    </article>

  )

}
