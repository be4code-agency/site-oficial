
interface Perguntas {
  numPergunta: number
  pergunta: string;
  resposta: string;
}

interface PerguntasFrequentesProps {
  perguntas: Perguntas[];
}

export default function PerguntasFrequentes({perguntas}: PerguntasFrequentesProps){

  return(

    <article className="bgGray">

      <section className="container-fluid py-5">

        <div className="row mb-5">

          <div className="col-12 text-center">

            <h2 className="fs-1 fw-bold">Perguntas Frequentes<span className="purple">.</span></h2>

          </div>

        </div>{/* Fim row */}

        <div className="row">

          <div className="col-12">

            <div className="accordion" id="accordionPerguntasFrequentes">

              {perguntas.map((item: Perguntas) => (

                <div className="accordion-item" key={item.numPergunta} data-aos="fade-up">
                  <h2 className="accordion-header">
                    <button className={`accordion-button ${item.numPergunta > 1 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${item.numPergunta}`} aria-expanded={`${item.numPergunta === 1 ? true : false}`} aria-controls={`collapse${item.numPergunta}`}>
                      {item.pergunta}
                    </button>
                  </h2>
                  <div id={`collapse${item.numPergunta}`} className={`accordion-collapse collapse ${item.numPergunta === 1 ? 'show' : ''}`} data-bs-parent="#accordionPerguntasFrequentes">
                    <div className="accordion-body">
                      {item.resposta}
                    </div>
                  </div>
                </div>

              ))}

            </div>

          </div>{/* Fim col */}

        </div>{/* Fim row */}

      </section>

    </article>

  )

}
