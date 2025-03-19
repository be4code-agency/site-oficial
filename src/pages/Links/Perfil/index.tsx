import { Container, ImgProfile, Informations, RedesSociais, LinkRedeSocial } from './styles';

import Profile from '../../../img/logos/be4code_icon.png';

import { FaWhatsapp, FaInstagram, FaLinkedinIn, FaGithub, FaBehance } from "react-icons/fa6";

export default function Perfil(){

  return(

    <Container>

      <ImgProfile src={Profile} alt="Imagem de perfil" />

      <Informations>
        <h1>@Be4code</h1>
        <h2 className='text-muted'>Transformando negócios por meio da tecnologia</h2>
      </Informations>

      <RedesSociais>

        <LinkRedeSocial href='https://wa.me/message/ZTOTKFWTJI4LJ1' target='_blank' className='whatsapp'><FaWhatsapp /> <span className="visually-hidden">Whatsapp</span> </LinkRedeSocial>
        <LinkRedeSocial href='https://www.instagram.com/be4code/' target='_blank' className='instagram'><FaInstagram /> <span className="visually-hidden">Instagram</span> </LinkRedeSocial>
        <LinkRedeSocial href='https://github.com/be4code-agency' target='_blank' className='github'><FaGithub /> <span className="visually-hidden">Github </span> </LinkRedeSocial>

      </RedesSociais>

    </Container>

  )

}
