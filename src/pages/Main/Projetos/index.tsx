import { Link } from 'react-router-dom';

import { Titulo, Texto } from './styles';

import GalfortMcp from '../../../img/projetos/galfor.webp';
import AmazoniaVivaMcp from '../../../img/projetos/amazonia_viva.webp';
import BarberMcp from '../../../img/projetos/savegnago_barber.webp';

import { IoChevronForwardCircle, IoChevronBackCircle, IoChevronForwardOutline } from "react-icons/io5";


export default function Projetos(){

  return(

    <article className="container-fluid py-5">

      <section className="row">

        <div className="col-12 text-center mb-5" data-aos="zoom-in" data-aos-delay="100">

          <h2 className="fw-semibold fs-2">Últimos trabalhos</h2>

        </div>

        <div className="col-12" data-aos="zoom-in" data-aos-delay="100">

          <div className="d-flex mb-3 justify-content-end align-items-center gap-3">

            <button className="btn p-0 purple" type="button" data-bs-target="#carouselProjetos" data-bs-slide="prev">
              <IoChevronBackCircle size={35} />
            </button>

            <button className="btn p-0 purple" type="button" data-bs-target="#carouselProjetos" data-bs-slide="next">
              <IoChevronForwardCircle size={35} />
            </button>

          </div>

        </div>

        <div className="col-12" data-aos="zoom-in" data-aos-delay="100">

          <div id="carouselProjetos" className="carousel carousel-dark slide" data-bs-ride="carousel" data-bs-pause="false">

            <div className="carousel-inner">

              <div className="carousel-item active" data-bs-interval="10000">

                <div className="row">

                  <div className="col-md-6 mb-3">

                    <div className="d-flex justify-content-center align-items-center h-100">
                      <img src={GalfortMcp} alt="Mockup Projeto Galfort" className='img-fluid' />
                    </div>

                  </div>

                  <div className="col-md-6">

                    <div className="d-flex flex-column gap-4 align-items-start justify-content-center h-100">

                      <Titulo>Galfort - Estruturas Metálicas</Titulo>
                      <Texto className='text-muted'>O site da Galfort é uma plataforma robusta e informativa, projetada para apresentar a excelência da empresa no ramo de estruturas metálicas. Com um design moderno e navegação intuitiva, a página destaca os principais serviços oferecidos, como fabricação, montagem e manutenção de estruturas metálicas para diversos setores. Além disso, o site exibe projetos realizados, depoimentos de clientes e informações detalhadas sobre os diferenciais da empresa, como qualidade, inovação e compromisso com prazos. Os visitantes também encontram dados de contato e um formulário para solicitações, tornando o acesso às soluções da Galfort simples e eficiente.</Texto>

                      <Link to="https://galfort.com.br/" target='_blank' className='btn btn-lg gradientBtn'>Acessar o site <IoChevronForwardOutline /></Link>

                    </div>

                  </div>

                </div>

              </div>

              <div className="carousel-item" data-bs-interval="10000">

                <div className="row">

                  <div className="col-md-6 mb-3">
                    <div className="d-flex justify-content-center align-items-center h-100">
                      <img src={AmazoniaVivaMcp} alt="Mockup Projeto Amazonia viva Games" className='img-fluid' />
                    </div>
                  </div>

                  <div className="col-md-6">

                    <div className="d-flex flex-column gap-4 align-items-start justify-content-center h-100">

                      <Titulo>Amazonia Viva - Game</Titulo>
                      <Texto className='text-muted'>O site do Amazônia Viva Games apresenta um jogo educativo e envolvente, criado para conscientizar o público infantil das escolas públicas sobre a importância da preservação da Amazônia. Com aventuras interativas e cenários vibrantes, o game ensina de forma lúdica temas como sustentabilidade e cuidado com o meio ambiente. Disponível na Steam, o jogo combina diversão e aprendizado, sendo uma ferramenta poderosa para educadores e pais interessados em promover valores ecológicos. No site, é possível conhecer mais sobre o projeto, conferir as funcionalidades do jogo e acessar o link para download.</Texto>

                      <Link to="https://amazoniavivagames.com.br/" target='_blank' className='btn btn-lg gradientBtn'>Acessar o site <IoChevronForwardOutline /></Link>

                    </div>

                  </div>

                </div>

              </div>

              <div className="carousel-item" data-bs-interval="10000">

                <div className="row">

                  <div className="col-md-6 mb-3">

                    <div className="d-flex justify-content-center align-items-center h-100">
                      <img src={BarberMcp} alt="Mockup Projeto Savegnago Barber" className='img-fluid' />
                    </div>

                  </div>

                  <div className="col-md-6">

                    <div className="d-flex flex-column gap-4 align-items-start justify-content-center h-100">

                      <Titulo>Savegnago Barber</Titulo>
                      <Texto className='text-muted'>O site da Savegnago Barber é uma plataforma moderna e funcional, projetada para destacar os serviços oferecidos pela barbearia. Nele, você encontra informações detalhadas sobre modelagem de barba, cortes, riscos freestyle e penteado. A página também oferece dados de contato, endereço e um link direto para agendamento online, facilitando a marcação de horários. Com um design atraente e navegação intuitiva, o site proporciona uma excelente experiência ao usuário, refletindo a qualidade e profissionalismo da barbearia.</Texto>

                      <Link to="https://savegnagobarber.noobieldev.com.br/" target='_blank' className='btn btn-lg gradientBtn'>Acessar o site <IoChevronForwardOutline /></Link>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </article>

  )

}
