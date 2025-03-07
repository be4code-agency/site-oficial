import { useState, useContext, useEffect } from "react";

import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

import { StepContextType } from "./step1";

import StepContext from "../../../../contexts/StepContext";

interface Step1Props {
  formData: { suporteAposLancamento: string; expectativaManutencao: string; };
  setFormData: (data: { suporteAposLancamento?: string; expectativaManutencao?: string; }) => void;
}

export default function Step7({ formData, setFormData }: Step1Props){

  const [error, setError] = useState(false);

  const { nextStep, prevStep, setTitle } = useContext(StepContext) as StepContextType;

  useEffect(() => {

    if (setTitle) {
      setTitle('Manutenção e Suporte');
    }

  }, [setTitle]);

  const handleNext = () => {

    if (!formData.suporteAposLancamento) {

      setError(true);

    } else {

      setError(false);
      nextStep();

    }

  };

  return(

    <>

      <div className="w-100  mb-3">
        <label>Você precisará de serviços contínuos de manutenção e suporte após o lançamento? <strong>*</strong></label>

        <div className="form-check form-check-inline mt-3">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="Sim"
            checked={formData.suporteAposLancamento === "Sim"}
            onChange={(e) => setFormData({ suporteAposLancamento: e.target.value })}
          />
          <label className="form-check-label" htmlFor="inlineRadio1">Sim</label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="Não"
            checked={formData.suporteAposLancamento === "Não"}
            onChange={(e) => setFormData({ suporteAposLancamento: e.target.value })}
          />
          <label className="form-check-label" htmlFor="inlineRadio2">Não</label>
        </div>
      </div>

      <div className="w-100 mb-3">
        <label>Qual é a sua expectativa em relação à atualização e manutenção do conteúdo do site/sistema?</label>
        <input
            className="inputForm"
            type="text"
            value={formData.expectativaManutencao}
            onChange={(e) => setFormData({ expectativaManutencao: e.target.value })}
          />
      </div>

      {error && <p className="fs-6 error mb-3">Os Campos com * são obrigatórios</p>}

      <div className="d-flex flex-row justify-content-around w-100">
        <button className="btn purpleOutlineBtn rounded" onClick={prevStep}><FaAngleLeft /> Voltar</button>
        <button className="btn purpleBtn rounded" onClick={handleNext}>Avançar <FaAngleRight /></button>
      </div>

    </>

  )

}
