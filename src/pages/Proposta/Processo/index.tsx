import { Titulo, Container, Item } from './styles';

interface processoProps{

  id: number
  titulo: string
  texto: string

}

export default function ProcessoDesenvolvimento(){

  const processo = [

    {"id": 1, "titulo": "Fechamento", "texto": "Efetuação do pagamento, assinatura do contrato e preenchimento do briefing."},
    {"id": 2, "titulo": "Alinhamento", "texto": "Esclarecimento de dúvidas de ambas as partes para garantir um desempenho ótimo."},
    {"id": 3, "titulo": "Produção",  "texto": "Após o alinhamento, entramos na fase de pesquisa e criação."},
    {"id": 4, "titulo": "Apresentação", "texto" : "Será enviado um link provisório pelo o whatsapp para aprovação."},
    {"id": 5, "titulo": "Alteração", "texto" : "Alterações gratuitas desde que não haja distorção do material."},
    {"id": 6, "titulo": "Entrega Final", "texto" : "Todo material aprovado sera disponibilizado para o link final do cliente"}

  ];

  return(

    <article className="row py-5 bgPurple">

      <section className="col-lg-6">

        <div className="d-flex justify-content-center align-items-center h-100">

          <Titulo>Conheça o plano que tira sua empresa do <strong>Zero.</strong></Titulo>

        </div>

      </section>

      <section className="col-lg-6">

        <Container>

          {processo.map((element: processoProps)=>(


              <Item key={element.id}>
                <div className="d-flex align-items-center gap-2">
                  <span>{element.id}</span>
                  <h3>{element.titulo}</h3>
                </div>

                <p>{element.texto}</p>
              </Item>


          ))}

        </Container>

      </section>

    </article>

  )

}
