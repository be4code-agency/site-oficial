import { ContainerTexto, Titulo, Texto, ImgPerfil } from './styles';

import Gabriel from '../../../img/noobiel_dev_perfil_2.png';
import { ContainerProposta } from '../Inicio/styles';

export default function SobreMim(){

  return(

    <article className="row py-5">

      <section className="col-md-6 d-flex justify-content-center align-items-center text-center py-0 py-md-5">

        <ImgPerfil src={Gabriel} alt="Foto de perfil Be4Code" />

      </section>

      <section className='col-md-6 d-flex align-items-center'>

        <ContainerTexto>

          <Titulo>QUEM<br /> SOU EU?</Titulo>
          <Texto className='text-muted'>Sou desenvolvedor web freelancer e empreendedor digital. Com mais de 4 anos de experiência, tenho um histórico comprovado de transformar ideias em soluções digitais eficazes. Além disso, sou criador de conteúdo no instagram, onde ensino e inspiro pessoas a entrarem no mundo da programação</Texto>
          <Texto className='text-muted'>Atualmente, estou cursando Engenharia de Software para aprofundar ainda mais meus conhecimentos. Se você está buscando um parceiro para levar seu negócio online ao próximo nível, vamos conversar!</Texto>

        </ContainerTexto>

      </section>

      <ContainerProposta />
    </article>

  )

}
