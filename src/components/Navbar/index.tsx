import { useEffect, useState } from 'react';
import { NavItem, LogoNavbar } from './styles';

import Logo from '../../img/logos/icone_transparente.svg';

import { IoLogoWhatsapp, IoMenu, IoCodeSlash, IoBrushOutline , IoMegaphoneOutline, IoRocketOutline, IoCameraOutline } from "react-icons/io5";

import { scrollToSection } from '../../helpers/ScrollToSection';

import { Link, useNavigate } from 'react-router-dom';

export default function Navbar(){

  const navigate = useNavigate();
  const [bgIsActive, setBgIsActive] = useState(false);
  const [widthScreen, setWidthScreen] = useState(window.screen.availWidth);

  const handleNavigation = (path: string, id?: string) => {

    navigate(path);

    if (id) {

      setTimeout(() => {
        scrollToSection(id);
      }, 100);

    };
  }

  const handleScroll = () => {

      const position = window.pageYOffset;
      const widthScreen = window.screen.availWidth;

      setWidthScreen(widthScreen);

      position >= 70 ? setBgIsActive(true) : setBgIsActive(false);

  };

  useEffect(() => {

      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };

  }, []);

  return(

    <nav className={`navbar navbar-expand-lg fixed-top ${bgIsActive ? 'bgWhite' : ''}`}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand"><LogoNavbar src={Logo} alt="Logo Noobiel" /></Link>
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <IoMenu className='purple' size={30} />
        </button>
        <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header" data-bs-theme="dark">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">

            <ul className="navbar-nav justify-content-center mb-5 mb-lg-0 flex-grow-1">

              <li className="nav-item">
                <Link to='/' className='nav-link'>
                  <NavItem isBlack={bgIsActive} widthScreen={widthScreen} data-bs-dismiss="offcanvas">Início</NavItem>
                </Link>
              </li>

              <li className="nav-item dropdown">
                <NavItem className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" isBlack={bgIsActive} widthScreen={widthScreen}>
                  Produtos
                </NavItem>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item d-flex align-items-center gap-2" to="/produtos/tech">
                      <IoCodeSlash className='purple' />
                      Tech
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item d-flex align-items-center gap-2" to="/produtos/design">
                      <IoBrushOutline className='purple' />
                      Design
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item d-flex align-items-center gap-2" to="/produtos/marketing">
                      <IoMegaphoneOutline  className='purple' />
                      Marketing
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item d-flex align-items-center gap-2" to="/produtos/engajamento">
                      <IoRocketOutline className='purple' />
                      Engajamento
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item d-flex align-items-center gap-2" to="/produtos/capture">
                      <IoCameraOutline className='purple' />
                      Capture
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link to='/sobre-nos' className='nav-link'>
                  <NavItem isBlack={bgIsActive} widthScreen={widthScreen} data-bs-dismiss="offcanvas">Sobre Nós</NavItem>
                </Link>
              </li>

              <li className="nav-item">
                <Link to='/portfolio' className='nav-link'>
                  <NavItem isBlack={bgIsActive} widthScreen={widthScreen} data-bs-dismiss="offcanvas">Portfólio</NavItem>
                </Link>
              </li>

              <li className="nav-item">
                <Link to='https://wa.me/5511974808118' target='_blank' className='nav-link'>
                  <NavItem isBlack={bgIsActive} widthScreen={widthScreen} data-bs-dismiss="offcanvas">Solicitar Orçamento</NavItem>
                </Link>
              </li>

              <li className="nav-item">
                <Link to='https://wa.me/5511974808118' target='_blank' className='nav-link'>
                  <NavItem isBlack={bgIsActive} widthScreen={widthScreen} data-bs-dismiss="offcanvas">Suporte</NavItem>
                </Link>
              </li>

            </ul>

            <ul className="navbar-nav justify-content-end pe-3">
              <li className="nav-item">
                <Link to="https://wa.me/5511974808118" target='_blank' className='btn purpleBtn w-100 rounded'><IoLogoWhatsapp /> Fale Conosco</Link>
              </li>
            </ul>

          </div>


        </div>
      </div>
    </nav>

  )

}
