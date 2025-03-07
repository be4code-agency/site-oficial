import { ChangeEvent, useState, useContext, useEffect } from "react";

import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

import { StepContextType } from "./step1";

import StepContext from "../../../../contexts/StepContext";

interface Step1Props {
  formData: { objetivoPrincipal: string; prazoConclusao: string; orcamentoDisponivel: string; substituirOuAtualizarSistema: string; linkSubstituirOuAtualizar?: string };
  setFormData: (data: { objetivoPrincipal?: string; prazoConclusao?: string; orcamentoDisponivel?: string; substituirOuAtualizarSistema?: string; linkSubstituirOuAtualizar?: string}) => void;
}

export default function Step2({ formData, setFormData }: Step1Props){

  const [error, setError] = useState(false);

  const { nextStep, prevStep, setTitle } = useContext(StepContext) as StepContextType;

  useEffect(() => {

    if (setTitle) {
      setTitle('Informações Gerais do Projeto');
    }

  }, [setTitle]);

  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {

    setFormData({ substituirOuAtualizarSistema: event.target.value});

  };

  const handleNext = () => {

    if (!formData.objetivoPrincipal || !formData.prazoConclusao || !formData.orcamentoDisponivel || (formData.substituirOuAtualizarSistema === 'sim' && !formData.linkSubstituirOuAtualizar)) {

      setError(true);

    } else {

      setError(false);
      nextStep();

    }

  };

  return(

    <>

      <div className="w-100  mb-3">
        <label>Qual é o objetivo principal deste site/sistema? <strong>*</strong></label>
        <input
            className="inputForm"
            type="text"
            value={formData.objetivoPrincipal}
            onChange={(e) => setFormData({ objetivoPrincipal: e.target.value })}
          />
      </div>

      <div className="w-100 mb-3">
        <label>Qual é o prazo aproximado para conclusão do projeto? <strong>*</strong></label>
          <select
              className="inputForm"
              value={formData.prazoConclusao}
              onChange={(e) => setFormData({ prazoConclusao: e.target.value })}
            >
              <option value="" disabled>Selecione o prazo</option>
              <option value="Urgente">Urgente</option>
              <option value="1 semana">1 semana</option>
              <option value="2 semanas">2 semanas</option>
              <option value="1 mês">1 mês</option>
              <option value="Mais">Mais</option>
            </select>
      </div>

      <div className="w-100 mb-3">
        <label>Qual é o orçamento disponível para este projeto? <strong>*</strong></label>
        <select
        className="inputForm"
        value={formData.orcamentoDisponivel}
        onChange={(e) => setFormData({ orcamentoDisponivel: e.target.value })}
        >
          <option value="" disabled>Selecione um orçamento</option>
          <option value="R$ 500 a R$ 1.000,00">R$ 500 a R$ 1.000,00</option>
          <option value="R$ 1.000,00 a R$ 2.000,00">R$ 1.000,00 a R$ 2.000,00</option>
          <option value="R$ 2.000,00 a R$ 5.000,00">R$ 2.000,00 a R$ 5.000,00</option>
          <option value="R$ 5.000,00 a R$ 10.000,00">R$ 5.000,00 a R$ 10.000,00</option>
          <option value="+ de R$ 10.000,00">+ de R$ 10.000,00</option>
        </select>
      </div>

      <div className="w-100 mb-3">
        <label className="mb-2">Você tem algum site ou sistema atual que precisa ser substituído ou atualizado?</label>

        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="substituirSistema" id="sim" value='sim' checked={formData.substituirOuAtualizarSistema === 'sim'} onChange={handleOptionChange} />
          <label className="form-check-label" htmlFor="sim">
            Sim
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="substituirSistema" id="nao" value='nao' checked={formData.substituirOuAtualizarSistema === 'nao'} onChange={handleOptionChange} />
          <label className="form-check-label" htmlFor="nao">
            Não
          </label>
        </div>

      </div>

      {
          formData.substituirOuAtualizarSistema === 'sim' &&(


            <div className="w-100 mb-3">
              <label>Qual o link do atual sistema? <strong>*</strong></label>
              <input
                  className="inputForm"
                  type="text"
                  value={formData.linkSubstituirOuAtualizar}
                  onChange={(e) => setFormData({ linkSubstituirOuAtualizar: e.target.value })}
                />
            </div>


          )
      }

      {error && <p className="fs-6 error mb-3">Os Campos com * são obrigatórios</p>}

      <div className="d-flex flex-row justify-content-around w-100">
        <button className="btn purpleOutlineBtn rounded" onClick={prevStep}><FaAngleLeft /> Voltar</button>
        <button className="btn purpleBtn rounded" onClick={handleNext}>Avançar <FaAngleRight /></button>
      </div>

    </>

  )

}
