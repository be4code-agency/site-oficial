import { useContext } from "react";

import { Container, Titulo } from "./styles";

import { FaRegFlag } from "react-icons/fa6";

import StepContext  from "../../../../contexts/StepContext";


interface ProgressoProps {
  title: string;
  progresso: number;
  stepForm: number;
}

export function Progresso(){

  const { title, progresso, stepForm } = useContext(StepContext) as ProgressoProps;

  return(

    <Container>

      <div className="d-flex justify-content-between align-items-center">
        <Titulo>{title}</Titulo>

        <div className="d-flex align-items-center gap-2">
          <FaRegFlag size={15} />
          <span>{stepForm}/8</span>
        </div>

      </div>

      <div className="progress" role="progressbar" aria-label="Barra de progresso">
        <div className="progress-bar bgPurple" style={{width: progresso+'%'}}></div>
      </div>

    </Container>

  )

}
