import { Loader } from "./styles"

export function PreLoader(){

  return(
    <div className="d-flex justify-content-center align-items-center w-100 vh-100">

      <Loader>
        <span>&lt;</span>
        <span>Carregando...</span>
        <span>/&gt;</span>
      </Loader>

    </div>

  )

}
