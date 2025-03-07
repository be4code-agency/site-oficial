import { ContainerProposta } from '../Inicio/styles';
import { Titulo, Item } from './styles';

import { FaPalette, FaRocket, FaMagnifyingGlass, FaDatabase } from "react-icons/fa6";


export default function Servicos(){

  return(

    <>

      <article className="row">

        <section className='col-12 text-center mb-5 pt-5'>

          <Titulo>O que oferecemos<br/> para a sua empresa</Titulo>

        </section>

      </article>

      <article className='row justify-content-center mb-3'>

        <section className="col-sm-6 col-xl-4 mb-3">

          <Item>

            <FaPalette />
            <h3>Design personalizado</h3>
            <p className='text-muted'>Nosso design personalizado cria sites únicos, alinhados à identidade da sua marca, combinando estética e funcionalidade para uma experiência de usuário excepcional.</p>

          </Item>

        </section>

        <section className="col-sm-6 col-xl-4 mb-3">

          <Item>

            <FaRocket />
            <h3>Otimização</h3>
            <p className='text-muted'>Melhoramos a velocidade e o desempenho do seu site, garantindo carregamento rápido e uma experiência de navegação eficiente e agradável para seus usuários.</p>

          </Item>

        </section>

      </article>

      <article className='row justify-content-center mb-3'>

        <section className="col-sm-6 col-xl-4 mb-3">

          <Item>

            <FaMagnifyingGlass />
            <h3>SEO <small>(Search Engine Optimization)</small></h3>
            <p className='text-muted'>Nosso SEO é uma estratégia de otimização de sites para aumentar a visibilidade e a presença na internet.</p>

          </Item>

        </section>

        <section className="col-sm-6 col-xl-4 mb-3">

          <Item>

            <FaDatabase />
            <h3>Hospedagem</h3>
            <p className='text-muted'>Nosso suporte técnico e hospedagem garantem a confiabilidade e a segurança do seu site, garantindo carregamento rápido e uma experiência de navegação eficiente e agradável para seus usuários.</p>

          </Item>

        </section>


      </article>

      <article className='row'><ContainerProposta /></article>

    </>

  )

}
