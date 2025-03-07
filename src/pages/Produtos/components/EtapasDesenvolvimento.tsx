import { TituloPrincipalEtapa, NumEtapa, TituloEtapa } from './styles';

import BannerEtapa from '../../../img/banners/servicos/banner_etapas_projeto.avif';

interface Etapas {
  numEtapa: number
  titulo: string;
  texto: string;
}

interface EtapasDesenvolvimentoProps {
  etapas: Etapas[];
}

export default function EtapasDesenvolvimento({etapas}: EtapasDesenvolvimentoProps){

  return(

    <article className="container-fluid py-5">

      <section className="row">

        <div className="col-lg-5 col-xl-6 mb-3 mb-lg-0">

          <img src={BannerEtapa} alt="equipe planejamento" className="img-fluid rounded" data-aos="zoom-in" data-aos-delay="150" />

        </div>

        <div className="col-lg-7 col-xl-6">

          <div className="row mb-3">

            <div className="col-12" data-aos="fade-up" data-aos-anchor-placement="top-bottom">

              <TituloPrincipalEtapa>Etapas de Criação</TituloPrincipalEtapa>
              <p>Cada projeto passa por um passo a passo simples e eficiente. Planejamos, desenvolvemos e entregamos com cuidado para garantir o melhor resultado para você. Aqui estão as etapas que seguimos para dar vida às suas ideias!</p>
            </div>

          </div>{/* Fim row */}

          <div className="row">

            {etapas.map((item: Etapas) => (

                <div className="col-md-4 mb-3" key={item.numEtapa} data-aos="zoom-in" data-aos-delay="150">

                <div className="d-flex align-items-center gap-2">
                  <NumEtapa>{item.numEtapa}</NumEtapa>
                  <TituloEtapa>{item.titulo}</TituloEtapa>
                </div>

                <p className='text-muted'>{item.texto}</p>

              </div>

            ))}

          </div>{/* Fim row */}

        </div>

      </section>

    </article>

  )

}
