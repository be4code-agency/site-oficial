import { Service } from '../../Main/Servicos/Service';
import { TituloCaracteristicas, SubTituloCaracteristicas } from './styles';

interface Caracteristica {
  titulo: string;
  texto: string;
  icone: string;
}

interface CaracteristicasProps {
  projetos: Caracteristica[];
  subTitulo: string
  produto: string
}

export default function Caracteristicas({ projetos, subTitulo, produto }: CaracteristicasProps) {

  return (
    <article className="bgGray">
      <section className="container-fluid py-5">
        <div className="row mb-5">
          <div className="col-12 text-center" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <SubTituloCaracteristicas>{subTitulo}</SubTituloCaracteristicas>
            <TituloCaracteristicas>Características dos Projetos <span className='fw-bold'>{produto}</span></TituloCaracteristicas>
          </div>
        </div>

        <div className="row">

          {projetos.map((item: Caracteristica) => (
            <div className="col-sm-6 col-xxl-4 mb-4" key={item.titulo} data-aos="zoom-in" data-aos-delay="150">
              <Service
                icon={item.icone}
                title={item.titulo}
                text={item.texto}
                altIcon=''
              />
            </div>
          ))}

        </div>
      </section>
    </article>
  );
}
