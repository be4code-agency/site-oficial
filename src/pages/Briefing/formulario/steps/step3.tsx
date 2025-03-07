import { useState, useContext, useEffect } from "react";

import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

import { StepContextType } from "./step1";

import StepContext from "../../../../contexts/StepContext";

interface Step1Props {
  formData: { publicoAlvo: string; caracteristicasDemograficas: string; interessesEComportamentos: string; };
  setFormData: (data: { publicoAlvo?: string; caracteristicasDemograficas?: string; interessesEComportamentos?: string; }) => void;
}

export default function Step3({ formData, setFormData }: Step1Props){

  const [error, setError] = useState(false);

  const { nextStep, prevStep, setTitle } = useContext(StepContext) as StepContextType;

  useEffect(() => {

    if (setTitle) {
      setTitle('Público-Alvo');
    }

  }, [setTitle]);

  const handleNext = () => {

    if (!formData.publicoAlvo) {

      setError(true);

    } else {

      setError(false);
      nextStep();

    }

  };

  return(

    <>

      <div className="w-100  mb-3">
        <label>Quem é o público-alvo do site/sistema? <strong>*</strong></label>
        <input
            className="inputForm"
            type="text"
            value={formData.publicoAlvo}
            onChange={(e) => setFormData({ publicoAlvo: e.target.value })}
          />
      </div>

      <div className="w-100 mb-3">
        <label>Quais são as características demográficas (idade, sexo, localização, etc.) do seu público-alvo?</label>
        <input
            className="inputForm"
            type="text"
            value={formData.caracteristicasDemograficas}
            onChange={(e) => setFormData({ caracteristicasDemograficas: e.target.value })}
          />
      </div>

      <div className="w-100 mb-3">
        <label>Quais são os interesses e comportamentos do seu público-alvo?</label>
        <input
            className="inputForm"
            type="text"
            value={formData.interessesEComportamentos}
            onChange={(e) => setFormData({ interessesEComportamentos: e.target.value })}
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
