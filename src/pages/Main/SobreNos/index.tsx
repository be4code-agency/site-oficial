import { Link } from "react-router-dom";

import { ContainerResult, Texto } from "./styles";

import { IoChevronForward } from "react-icons/io5";

import ImgSobreNos from '../../../img/banner_sobre_nos.avif';

export default function SobreNos(){

  return(

    <article className="bgGray">

      <section className="container-fluid py-5">

        <div className="row">

          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center align-items-lg-start mb-3" data-aos="zoom-in" data-aos-delay="100">

            <h2 className="titulo mb-4">Pensamos. <span className="purple">Agimos.</span> Crescemos</h2>
            <Texto className="text-muted mb-4">A Be4Code atende a todo o mercado brasileiro, já tendo realizado projetos para empresas no Canadá e Portugal.</Texto>
            <Texto className="text-muted mb-4">Com 4 anos de experiência, temos a expertise necessária para identificar as reais necessidades dos nossos clientes, entregando resultados que superam expectativas e construindo parcerias duradouras.</Texto>

            <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3 mb-4 w-100">

              <ContainerResult>
                <span className="fs-1">21+</span>
                <span className="fs-6">Projetos completos</span>
              </ContainerResult>

              <ContainerResult>
                <span className="fs-1">34+</span>
                <span className="fs-6">Clientes Satisfeitos</span>
              </ContainerResult>

            </div>

            <Link to="https://wa.me/5511974808118" target="_blank" className="btn btn-lg gradientBtn">Consultoria Grátis <IoChevronForward /></Link>

          </div>

          <div className="col-md-6" data-aos="zoom-in" data-aos-delay="100">

            <img src={ImgSobreNos} alt="Mulheres no escritório" className="img-fluid rounded" />

          </div>

        </div>

      </section>

    </article>

  )

}
