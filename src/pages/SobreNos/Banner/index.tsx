import { Banner } from './styles';

import ImgBanner from '../../../img/banner_pg_sobre_nos.avif';

export default function BannerSobreNos(){

  return(

    <Banner banner={ImgBanner}>

      <section className='container-fluid h-100'>

        <div className="row align-items-center h-100">

          <div className="col-lg-6">

            <h1>Quem Somos</h1>

            <p>Somos apaixonados por transformar ideias em resultados. Nossa equipe combina criatividade, tecnologia e estratégia para ajudar empresas a se destacarem no mundo digital. Com foco em soluções personalizadas, conectamos marcas ao público certo, sempre entregando qualidade e inovação.</p>

          </div>

        </div>

      </section>

    </Banner>

  )

}
