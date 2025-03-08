import { Link } from "react-router-dom";

import { Container, ListaFooter, RedeSocial } from "./styles";

import { IoLogoInstagram, IoLogoWhatsapp, IoLogoTiktok } from "react-icons/io5";

import LogoBranco from '../../img/logos/icone_branco.svg';

export default function Footer(){

  return(

    <Container>

      <section className="container-fluid">

        <div className="row mb-3">

          <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0">

            <h2 className="fs-5 fw-bold mb-3">Produtos</h2>

            <ul className="nav flex-column">
              <li className="nav-item">
                <Link to="/produtos/tech" className="text-decoration-none">
                  <ListaFooter className="nav-link ps-0 white">Tech</ListaFooter>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/produtos/design" className="text-decoration-none">
                  <ListaFooter className="nav-link ps-0 white">Design</ListaFooter>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/produtos/marketing" className="text-decoration-none">
                  <ListaFooter className="nav-link ps-0 white">Marketing</ListaFooter>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/produtos/engajamento" className="text-decoration-none">
                  <ListaFooter className="nav-link ps-0 white">Engajamento</ListaFooter>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/produtos/capture" className="text-decoration-none">
                  <ListaFooter className="nav-link ps-0 white">Capture</ListaFooter>
                </Link>
              </li>
            </ul>

          </div>

          <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0">

            <h2 className="fs-5 fw-bold mb-3">Informações</h2>

            <ul className="nav flex-column">
              <li className="nav-item">
                <Link to="/faq" className="text-decoration-none">
                  <ListaFooter className="nav-link ps-0 white">FAQ</ListaFooter>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="https://wa.me/5511974808118" target="_blank" className="text-decoration-none">
                  <ListaFooter className="nav-link ps-0 white">Suporte</ListaFooter>
                </Link>
              </li>
            </ul>

          </div>

          <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0">

            <h2 className="fs-5 fw-bold mb-3">Empresa</h2>

            <ul className="nav flex-column">
              <li className="nav-item">
                <Link to="/sobre-nos" className="text-decoration-none">
                  <ListaFooter className="nav-link ps-0 white">Sobre Nós</ListaFooter>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/portfolio" className="text-decoration-none">
                  <ListaFooter className="nav-link ps-0 white">Portfólio</ListaFooter>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/produtos" className="text-decoration-none">
                  <ListaFooter className="nav-link ps-0 white">Produtos</ListaFooter>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="https://wa.me/5511974808118" target="_blank" className="text-decoration-none">
                  <ListaFooter className="nav-link ps-0 white">Solicitar Orçamento</ListaFooter>
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link to="/clientes" className="text-decoration-none">
                  <ListaFooter className="nav-link ps-0 white">Clientes</ListaFooter>
                </Link>
              </li> */}
            </ul>

          </div>

          <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0">

            <h2 className="fs-5 fw-bold mb-3">Contato</h2>

            <ul className="nav flex-column">

              <li className="nav-item">
                <ListaFooter className="nav-link ps-0 white">
                  <Link className="text-decoration-none white" to="mailto:contato@be4code.com.br" target="_blank">contato@be4code.com.br</Link>
                </ListaFooter>
              </li>

              <li className="nav-item">
                <ListaFooter className="nav-link ps-0">
                  <Link className="text-decoration-none white" to="https://wa.me/5511974808118">+55 11 97480-8118</Link>
                </ListaFooter>
              </li>
            </ul>

          </div>

        </div>{/* Fim row */}

        <div className="row border-top pt-4 align-items-center">

          <div className="col-sm-2 col-md-2 mb-4 mb-md-0">

            <img src={LogoBranco} alt="Logo Be4Code Dev" />

          </div>

          <div className=" col-sm-10 col-md-7 mb-4 mb-md-0">

            <ul className="nav flex-column flex-sm-row justify-content-sm-end justify-content-md-center align-items-start align-items-md-center">
              <li className="nav-item">
                <ListaFooter className="nav-link ps-0">
                  <Link to="/politicas-de-privacidade" className="text-decoration-none white">Termos de Uso</Link>
                </ListaFooter>
              </li>
              <li className="nav-item">
                <ListaFooter className="nav-link ps-0">
                  <Link to="/politicas-de-privacidade" className="text-decoration-none white">Política de Privacidade</Link>
                </ListaFooter>
              </li>
              <li className="nav-item">
                <ListaFooter className="nav-link ps-0">
                  <Link to="/politicas-de-privacidade" className="text-decoration-none white">Cookies</Link>
                </ListaFooter>
              </li>
            </ul>

          </div>

          <div className="col-sm-12 col-md-3 mb-4 mb-md-0">

            <div className="d-flex justify-content-start justify-content-sm-end align-items-center gap-3">

                <Link to="https://www.instagram.com/be4code/" target="_blank"><ListaFooter className="nav-link"><RedeSocial><IoLogoInstagram size={20} /></RedeSocial></ListaFooter></Link>


                <Link to="https://wa.me/5511974808118" target="_blank"><ListaFooter className="nav-link"><RedeSocial><IoLogoWhatsapp size={20} /></RedeSocial></ListaFooter></Link>

            </div>

          </div>

        </div>{/* Fim row */}

      </section>

    </Container>

  )

}
