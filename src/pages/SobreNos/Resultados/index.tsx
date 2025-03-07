import { Titulo } from "../NossaHistoria/styles";

import { Resume } from "./Resumo";

export default function Resultados(){

  return(

    <article className="bgGray">

      <section className="container-fluid py-5">

        <div className="row mb-5">

          <div className="col-12 text-center">

            <Titulo>Resultados da Empresa<span className="purple">.</span></Titulo>

          </div>

        </div>


        <div className="row">

          <section className="col-md-6 col-lg-4 mb-3">

            <Resume value="+ De 15" title="Sites Desenvolvidos do Zero" text="Cada projeto é uma solução web exclusiva que representa a essência de cada cliente." />

          </section>

          <section className="col-md-6 col-lg-4 mb-3">

            <Resume value="+ De 21" title="Projetos Concluídos" text="Executados com excelência, utilizando diversas tecnologias e plataformas." />

          </section>

          <section className="col-md-6 col-lg-4 mb-3">

            <Resume value="+ De 34" title="Clientes Satisfeitos" text="Marcas fortalecidas e expectativas superadas ao redor do mundo." />

          </section>

        </div>

      </section>

    </article>

  )

}
