import { Container, ImgProfile, Informations, RedesSociais, LinkRedeSocial } from './styles';

import Profile from '../../../img/logos/logo_fundo_branco.png';

import { FaWhatsapp, FaInstagram, FaLinkedinIn, FaGithub, FaBehance } from "react-icons/fa6";

export default function Perfil(){

  return(

    <Container>

      <ImgProfile src={Profile} alt="Imagem de perfil" />

      <Informations>
        <h1>@noobieldev_</h1>
        <h2 className='text-muted'>Transformando negócios por meio da tecnologia</h2>
      </Informations>

      <RedesSociais>

        <LinkRedeSocial href='https://wa.me/message/ZTOTKFWTJI4LJ1' target='_blank' className='whatsapp'><FaWhatsapp /> <span className="visually-hidden">Whatsapp</span> </LinkRedeSocial>
        <LinkRedeSocial href='https://www.instagram.com/noobieldev_/' target='_blank' className='instagram'><FaInstagram /> <span className="visually-hidden">Instagram</span> </LinkRedeSocial>
        <LinkRedeSocial href='https://www.linkedin.com/in/gabriel-de-lima-oliveira-548b48173/' target='_blank' className='linkedin'><FaLinkedinIn /> <span className="visually-hidden">LinkedinIn </span> </LinkRedeSocial>
        <LinkRedeSocial href='https://github.com/Noobiell' target='_blank' className='github'><FaGithub /> <span className="visually-hidden">Github </span> </LinkRedeSocial>
        <LinkRedeSocial href='https://www.behance.net/gabriellimaol' target='_blank' className='behance'><FaBehance /> <span className="visually-hidden">Behance  </span> </LinkRedeSocial>

      </RedesSociais>

    </Container>

  )

}
