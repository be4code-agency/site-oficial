import { ContainerProjeto } from './styles';

interface Imagem {
  imagem: string;
  altImagem: string;
}

interface ProjetosProps {
  imagens: Imagem[];
}

export default function Projetos({imagens}: ProjetosProps){

  return(

    <article className="container-fluid px-0">

      <section className="row">

        {imagens.map((item: Imagem) => (

            <div className="col-md-6 col-xl-4 p-0" key={item.altImagem}>

              <ContainerProjeto>

                <img src={item.imagem} alt={item.altImagem} loading='lazy' />

              </ContainerProjeto>

            </div>

        ))}

      </section>

    </article>

  )

}
