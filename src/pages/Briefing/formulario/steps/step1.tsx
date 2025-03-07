import { useState, useContext, useEffect } from "react";

import { FaAngleRight } from "react-icons/fa6";

import InputMask from 'react-input-mask';

import StepContext from "../../../../contexts/StepContext";

interface Step1Props {
  formData: { nomeEmpresa: string; nomeContato: string; email: string; telefone: string };
  setFormData: (data: { nomeEmpresa?: string; nomeContato?: string; email?: string; telefone?: string}) => void;
}

export interface StepContextType {
  nextStep: () => void;
  prevStep?: () => void;
  setTitle: (title: string) => void;
}

export default function Step1({ formData, setFormData }: Step1Props){

  const { nextStep, setTitle } = useContext(StepContext) as StepContextType;

  useEffect(() => {

    if (setTitle) {
      setTitle('Informações básicas do cliente');
    }

  }, [setTitle]);

  const [error, setError] = useState(false);

  const handleNext = () => {

    if (!formData.nomeEmpresa || !formData.nomeContato || !formData.email || !formData.telefone) {

      setError(true);

    } else {

      setError(false);
      nextStep();

    }

  };

  return(

    <>

      <div className="w-100  mb-3">
        <label>Nome da empresa <strong>*</strong></label>
        <input
            className="inputForm"
            type="text"
            value={formData.nomeEmpresa}
            onChange={(e) => setFormData({ nomeEmpresa: e.target.value })}
          />
      </div>

      <div className="w-100 mb-3">
        <label>Nome do contato <strong>*</strong></label>
        <input
            className="inputForm"
            type="text"
            value={formData.nomeContato}
            onChange={(e) => setFormData({ nomeContato: e.target.value })}
          />
      </div>

      <div className="w-100 mb-3">
        <label>Email <strong>*</strong></label>
        <input
            className="inputForm"
            type="text"
            value={formData.email}
            inputMode="email"
            onChange={(e) => setFormData({ email: e.target.value })}
          />
      </div>

      <div className="w-100 mb-3">
        <label>Telefone <strong>*</strong></label>
        <InputMask mask="(99)99999-9999"
            className="inputForm"
            type="text"
            inputMode="tel"
            value={formData.telefone}
            onChange={(e) => setFormData({ telefone: e.target.value })}
          />
      </div>

      {error && <p className="fs-6 error mb-3">Os Campos com * são obrigatórios</p>}

      <button className="btn purpleBtn rounded" onClick={handleNext}>Avançar <FaAngleRight /></button>

    </>

  )

}
