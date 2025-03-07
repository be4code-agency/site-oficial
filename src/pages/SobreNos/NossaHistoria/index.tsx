import { ContainerAnos, Titulo, Texto, SubTitulo, Icone } from './styles';

import ImgSobreNos from '../../../img/nossa_historia_banner.avif';

import IconMissao from '../../../img/icones/sobre_nos/missao.svg';
import IconVisao from '../../../img/icones/sobre_nos/visao.svg';
import IconValores from '../../../img/icones/sobre_nos/valores.svg';

export default function NossaHistoria(){

  return(

    <article className="container-fluid py-5">

      <section className="row">

        <div className="col-lg-6 mb-4">

          <div className="position-relative">
            <img src={ImgSobreNos} alt="Imagem escritório Noobiel Dev" className='img-fluid rounded-3' />
            <ContainerAnos>
              <span className='anos'>4+</span>
              <span className='texto'>Anos de Excelência</span>
            </ContainerAnos>
          </div>

        </div>

        <div className="col-lg-6 d-flex flex-column justify-content-center">

          <div className='mb-5'>
            <Titulo className='mb-3'>Nossa História<span className="purple">.</span></Titulo>
            <Texto>Nossa jornada começou com um sonho: ajudar empresas a crescerem no mundo digital. No início, éramos apenas uma ideia, mas com dedicação e paixão pelo que fazemos, conquistamos nosso espaço. Cada projeto entregue é uma nova página da nossa história, escrita com criatividade, esforço e a confiança dos nossos clientes. Seguimos evoluindo, sempre ao lado de quem acredita no poder da tecnologia e do design para transformar negócios.</Texto>
          </div>

          <div className="d-flex flex-column flex-md-row align-items-start justify-content-start gap-3 mb-5">

            <Icone src={IconMissao} alt="Icone Missão" />

            <div className='text-md-start'>
              <SubTitulo>Missão</SubTitulo>
              <p>Ajudar empresas e pessoas a crescerem usando tecnologia e criatividade. Nosso objetivo é criar soluções simples e eficientes que tornam a vida mais fácil e os negócios mais fortes.</p>
            </div>

          </div>

          <div className="d-flex flex-column flex-md-row align-items-start justify-content-start gap-3 mb-5">

            <Icone src={IconVisao} alt="Icone Visão" />

            <div>
              <SubTitulo>Visão</SubTitulo>
              <p>Ser reconhecida como uma empresa inovadora que transforma ideias em resultados incríveis, ajudando nossos clientes a alcançar o sucesso no mundo digital.</p>
            </div>

          </div>

          <div className="d-flex flex-column flex-md-row align-items-start justify-content-start gap-3 mb-5">

            <Icone src={IconValores} alt="Icone Valores" />

            <div>
              <SubTitulo>Valores</SubTitulo>
              <p>Acreditamos em empatia, criatividade, qualidade e inovação. Atuamos com transparência e compromisso, sempre entregando soluções únicas e resultados excepcionais.</p>
            </div>

          </div>

        </div>

      </section>

    </article>

  )

}
