import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { PreLoader } from '../../../components/PreLoader';

import { Container } from './styles';

export default function Projetos(){

  const [loading, setLoading] = useState(true);

   useEffect(() => {
    if (document.readyState === 'complete') {

      setLoading(false);

    } else {

      const handleLoad = () => {
        setLoading(false);
      };

      window.addEventListener('load', handleLoad);

      return () => {
        window.removeEventListener('load', handleLoad);
      };

    }
  }, []);

  if(loading){

    return(

      <PreLoader />

    )

  }

  return(

    <Container>

      <a href='/' className='btn btn-lg gradientBtn'>
        <span>Site</span>
      </a>

      <a href='/portfolio' className='btn btn-lg gradientBtn'>
        <span>Portfólio</span>
      </a>

      <a href='https://api.whatsapp.com/message/ZTOTKFWTJI4LJ1?autoload=1&app_absent=0' target='_blank' rel="noreferrer"  className='btn btn-lg gradientBtn'>
        <span>Consultoria grátis!</span>
      </a>

    </Container>

  )

}
