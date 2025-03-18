import { IoChevronForwardOutline } from "react-icons/io5";

interface CraOrcamentoProps{

  titulo: string
  msgWhatsapp: string

}

export default function CtaOrcamento({titulo, msgWhatsapp}: CraOrcamentoProps){

  return(

    <article className="bgPurple">

      <section className="container-fluid py-5">

        <div className="row">

          <div className="col-12">

            <div className="d-flex flex-column gap-4 flex-md-row justify-content-evenly align-items-center w-100 white">

              <h2 data-aos="fade-right">{titulo}</h2>
              <a data-aos="fade-left" href={`https://wa.me/${process.env.REACT_APP_CONTACT_NUMBER}?text=${msgWhatsapp}`} target="_blank" rel="noreferrer" className="btn btn-lg btn-outline-light">Solicitar um Orçamento <IoChevronForwardOutline /></a>

            </div>

          </div>

        </div>

      </section>

    </article>

  )

}
