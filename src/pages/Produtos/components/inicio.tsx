import { BannerInicio, SubTitulo, Titulo, Texto } from './styles';

import AOS from 'aos';
import 'aos/dist/aos.css';

interface InicioServicosProps{

  banner: string
  subTitulo?: string
  titulo: string
  texto: string

}

export default function InicioServicos({banner, subTitulo, titulo, texto}: InicioServicosProps){

  AOS.init();

  return(

    <BannerInicio banner={banner}>

      <section className='container-fluid h-100'>

        <div className="row h-100">

          <div className="col-lg-7 h-100">

            <div className="d-flex flex-column justify-content-center align-items-start gap-3 h-100" data-aos="fade-right" data-aos-duration="1500">

              <SubTitulo>{subTitulo}</SubTitulo>
              <Titulo>{titulo}</Titulo>
              <Texto>{texto}</Texto>

            </div>

          </div>

        </div>

      </section>

    </BannerInicio>

  )

}
