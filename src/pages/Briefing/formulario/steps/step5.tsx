import { useState, useContext, useEffect } from "react";

import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

import { StepContextType } from "./step1";

import StepContext from "../../../../contexts/StepContext";

interface Step1Props {
  formData: { funcionalidades: string; integracaoComPlataformas: string; segurancaOuPrivacidadeEspecifico: string; };
  setFormData: (data: { funcionalidades?: string; integracaoComPlataformas?: string; segurancaOuPrivacidadeEspecifico?: string; }) => void;
}

export default function Step5({ formData, setFormData}: Step1Props){

  const [error, setError] = useState(false);

  const { nextStep, prevStep, setTitle } = useContext(StepContext) as StepContextType;

  useEffect(() => {

    if (setTitle) {
      setTitle('Funcionalidades e Recursos');
    }

  }, [setTitle]);

  const handleNext = () => {

    if (!formData.funcionalidades || !formData.integracaoComPlataformas || !formData.segurancaOuPrivacidadeEspecifico) {

      setError(true);

    } else {

      setError(false);
      nextStep();

    }

  };

  return(

    <>

      <div className="w-100  mb-3">
        <label>Quais funcionalidades específicas o site/sistema deve ter? (e-commerce, blog, área de membros, etc.) <strong>*</strong></label>
        <input
            className="inputForm"
            type="text"
            value={formData.funcionalidades}
            onChange={(e) => setFormData({ funcionalidades: e.target.value })}
          />
      </div>

      <div className="w-100 mb-3">
        <label>Você precisa de integração com alguma plataforma ou serviço externo? (por exemplo, CRM, ERP, redes sociais) <strong>*</strong></label>
        <input
            className="inputForm"
            type="text"
            value={formData.integracaoComPlataformas}
            onChange={(e) => setFormData({ integracaoComPlataformas: e.target.value })}
          />
      </div>

      <div className="w-100 mb-3">
        <label>Existe algum recurso específico de segurança ou privacidade que deve ser implementado? <strong>*</strong></label>
        <input
            className="inputForm"
            type="text"
            value={formData.segurancaOuPrivacidadeEspecifico}
            onChange={(e) => setFormData({ segurancaOuPrivacidadeEspecifico: e.target.value })}
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
