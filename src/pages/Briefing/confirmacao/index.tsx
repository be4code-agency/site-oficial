import { Link } from 'react-router-dom';

import { Main, Title, Text } from './styles';
import { Head } from "../../../components/Head";
import { AddScriptHead } from '../../../components/AddTagHead';
import { Container } from "../../Links/styles";

import ImgConfirmacao from '../../../img/confirmacao.png';
import { FaHouse } from "react-icons/fa6";

export default function Confirmacao(){

  return(

    <>

      <Head title="Confirmação" />
      <AddScriptHead content={`gtag('event', 'conversion', {'send_to': 'AW-16632772395/wNgMCK_o_8AZEKvuj_s9'});`} />

      <Main>

        <Container className="shadow text-center">

          <img src={ImgConfirmacao} alt="confirmção icone" className="img-fluid" />

          <Title>Recebemos sua resposta</Title>

          <Text className='text-muted mb-2'>Agora vamos analisar sua resposta, entraremos em contato o quanto antes com mais detalhes.</Text>
          <Text className='text-muted mb-4'>Muito obrigado por entrar em contato ❤</Text>

          <Link to='/' className='purpleBtn d-flex justify-content-center align-items-center gap-2'><FaHouse /> Voltar ao início</Link>

        </Container>

      </Main>

    </>

  )

}
