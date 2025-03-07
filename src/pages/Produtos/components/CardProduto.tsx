import { Link } from 'react-router-dom';

import { TituloTumb, TextoTumb } from './styles';

import { IoChevronForwardOutline } from "react-icons/io5";

interface produto{

  id_produto: number,
  titulo: string,
  texto: string,
  tumbnail: string,
  link: string

}

interface CardProdutoProps{
  produto: produto[]
}

export default function CardProduto({produto}: CardProdutoProps){

  return(


    <>

      {produto.map((item: produto) =>(

      <div className="col-md-6 col-lg-4 col-xl-4 col-xxl-3 mb-3" key={item.id_produto}>

        <Link to={item.link} className="d-flex flex-column gap-3 text-decoration-none border rounded-4 h-100">

          <img src={item.tumbnail} alt={`Tumbnail Produto ${item.titulo}`} className='img-fluid rounded-top-4' />

          <div className="p-3">
            <TituloTumb className='mb-3'>{item.titulo}</TituloTumb>
            <TextoTumb className='text-muted mb-3'>{item.texto}</TextoTumb>
            <Link to={item.link} className='btn purpleBtn w-100 rounded'>Saiba Mais <IoChevronForwardOutline /></Link>
          </div>


        </Link>

      </div>

    ))}

    </>


  )

}
