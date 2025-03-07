import { Titulo } from "../../Produtos/components/styles";

interface Pergunta{

  id: number,
  pergunta: string,
  resposta: string

}

interface PerguntasFaqProps{

  titulo: string,
  pergunta: Pergunta[]

}

export default function PerguntasFaq({titulo, pergunta}: PerguntasFaqProps){

  return(

    <>

      <section className="row mb-5">

        <div className="col-12 mb-3">

          <Titulo>{titulo}<span className="purple">.</span></Titulo>

        </div>

        <div className="col-12">

          <div className="accordion" id={`accordion${titulo}`}>

            {pergunta.map((item: Pergunta)=>(

              <div className="accordion-item" key={item.id}>
                <h2 className="accordion-header">
                  <button className={`accordion-button ${item.id > 1 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${titulo+item.id}`} aria-expanded={item.id === 1 ? 'true' : 'false'} aria-controls={`collapse${item.id}`}>
                    {item.pergunta}
                  </button>
                </h2>
                <div id={`collapse${titulo+item.id}`} className={`accordion-collapse collapse ${item.id === 1 ? 'show' : ''}`} data-bs-parent={`#accordion${titulo}`}>
                  <div className="accordion-body">
                    {item.resposta}
                  </div>
                </div>
              </div>

            ))}

          </div>

        </div>

      </section>

    </>

  )

}
