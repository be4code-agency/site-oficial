import { Link } from 'react-router-dom';
import {Container, Tumbnail} from './styles';

import { DiHtml5, DiCss3, DiJsBadge, DiPhp, DiBootstrap, DiMysql, DiLaravel, DiSass, DiWordpress, DiReact, DiJqueryLogo} from "react-icons/di";
import { FaAngleRight } from "react-icons/fa6";

import AOS from 'aos';
import 'aos/dist/aos.css';

interface ProjetoProps {
  imagem: string;
  titulo: string;
  tipoProjeto: string;
  texto: string;
  tecnologias: string[];
  link: string;
}

export default function Projeto({imagem, titulo, tipoProjeto, texto, tecnologias, link}: ProjetoProps){

  AOS.init();

  return(

    <>

      <section className="col-md-6 col-xl-4 col-xxl-3 mb-3">

      <Container>

        <div className='d-flex flex-column gap-3 justify-content-between h-100'>

          <Tumbnail>
            <img src={imagem} alt="Mockup projeto" loading='lazy' />
          </Tumbnail>

          <div className='d-flex flex-column gap-3 align-items-start'>

            <h2>{titulo}</h2>
            <h3>{tipoProjeto}</h3>
            <p className='text-muted'>{texto}</p>

            <div className="d-flex gap-2 align-items-center flex-wrap mb-3">

              {tecnologias.map((tecnologia) => {
                switch (tecnologia) {
                  case 'HTML':
                    return <DiHtml5 className='tecnologia' size={20} key={tecnologia} />;
                  case 'CSS':
                    return <DiCss3 className='tecnologia' size={20} key={tecnologia} />;
                  case 'JavaScript':
                    return <DiJsBadge className='tecnologia' size={15} key={tecnologia} />;
                  case 'Bootstrap':
                    return <DiBootstrap className='tecnologia' size={23} key={tecnologia} />;
                  case 'PHP':
                    return <DiPhp className='tecnologia' size={30} key={tecnologia} />;
                  case 'MySQL':
                    return <DiMysql className='tecnologia' size={25} key={tecnologia} />;
                  case 'Laravel':
                    return <DiLaravel className='tecnologia' size={30} key={tecnologia} />;
                  case 'Sass':
                    return <DiSass className='tecnologia' size={25} key={tecnologia} />;
                  case 'Wordpress':
                    return <DiWordpress className='tecnologia' size={25} key={tecnologia} />;
                  case 'React':
                    return <DiReact className='tecnologia' size={25} key={tecnologia} />;
                  case 'JQuery':
                    return <DiJqueryLogo className='tecnologia' size={25} key={tecnologia} />;
                  default:
                    return null;
                }

              })}
            </div>

          </div>

          <Link to={link} target='_blank' rel="noreferrer" className='btn btn-lg gradientBtn w-100'>Acesse o site <FaAngleRight /></Link>

        </div>

      </Container>

      </section>

    </>

  )

}
