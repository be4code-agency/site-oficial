import { Container, Titulo, SubTitulo, PrecoTotal, PrecoDesconto, TituloData, TituloBeneficios, ContainerPagamentos, Botao } from './styles';

import { FaCalendar, FaClock, FaShieldHalved, FaTrophy, FaLock, FaPix, FaCreditCard, FaBarcode, FaBitcoin, FaEthereum } from "react-icons/fa6";

import { currencyFormat } from "../../../helpers/CurrencyFormat";

interface PrecoProps {
  nome_cliente: string;
  valor: number;
  preco_a_vista: number;
  data_envio: string;
  validade: number;
  servico: string;
}

export default function Preco({nome_cliente, valor, preco_a_vista, data_envio, validade, servico}: PrecoProps){

  return(

    <article className="row py-5">

      <div className="col-12 d-flex justify-content-center align-items-center">

        <Container>

          <Titulo><span>{nome_cliente}</span>, esse é o valor total pelo serviço: </Titulo>

          <div className='mb-5'>

            <SubTitulo>{servico}</SubTitulo>
            <PrecoTotal>{currencyFormat(valor)}</PrecoTotal>
            <p className='text-muted'>Em até 12x no cartão</p>
            <p className='text-muted'>Mas à vista você pagara apenas:</p>
            <PrecoDesconto>{currencyFormat(preco_a_vista)}</PrecoDesconto>

            <Botao href="https://wa.me/?text=Entendi%20toda%20a%20Proposta,%20quero%20aproveitar%20a%20oferta." target='_blank' rel='noreferrer'>Garantir oferta</Botao>

          </div>

          <div className="d-flex justify-content-center align-items-center gap-4 mb-4">

            <div className="d-flex flex-column flex-md-row justify-content-center align-items-center te gap-2">

              <FaCalendar className='purple' size={40} />

              <div className="d-flex flex-column justify-content-center align-items-center align-items-md-start">

                <TituloData>Data de envio:</TituloData>
                <p>{data_envio}</p>

              </div>

            </div>

            <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-2">

              <FaClock className='purple' size={40} />

              <div className="d-flex flex-column justify-content-center align-items-center align-items-md-start">

                <TituloData>Validade:</TituloData>
                <p>{validade} dias</p>

              </div>

            </div>

          </div>

          <div className="d-flex justify-content-center align-items-center gap-3 mb-5">

            <div className="d-flex gap-2 align-items-center justify-content-center">
              <FaShieldHalved size={22} />
              <TituloBeneficios>Compra <br/> Segura</TituloBeneficios>
            </div>

            <div className="d-flex gap-2 align-items-center justify-content-center">
              <FaTrophy size={22} />
              <TituloBeneficios>Satisfação <br/> Garantida</TituloBeneficios>
            </div>

            <div className="d-flex gap-2 align-items-center justify-content-center">
              <FaLock size={22} />
              <TituloBeneficios>Privacidade <br/> Protegida</TituloBeneficios>
            </div>

          </div>

          <div>

            <h3>Métodos de Pagamento</h3>

            <ContainerPagamentos>

              <FaPix title='Pix' />
              <FaCreditCard title='Cartão de Crédito' />
              <FaBarcode title='Boleto bancário' />
              <FaBitcoin title='Bitcoin' />
              <FaEthereum title='Ethereum' />

            </ContainerPagamentos>

          </div>

        </Container>

      </div>

    </article>

  )

}
