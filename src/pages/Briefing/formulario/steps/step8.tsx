import { useState, useContext, useEffect } from "react";

import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

import { StepContextType } from "./step1";

import StepContext from "../../../../contexts/StepContext";

interface Step1Props {
  formData: { concorrentes: string; maioresDesafios: string; informacaoComplementar: string; };
  setFormData: (data: { concorrentes?: string; maioresDesafios?: string; informacaoComplementar?: string; }) => void;
  submitForm: () => void;
  loading: boolean;
}

export default function Step8({ formData, setFormData, submitForm, loading }: Step1Props){

  const [error, setError] = useState(false);

  const { prevStep, setTitle } = useContext(StepContext) as StepContextType;

  useEffect(() => {

    if (setTitle) {
      setTitle('Detalhes e Observações');
    }

  }, [setTitle]);

  const handleNext = () => {

    if (!formData.concorrentes) {

      setError(true);

    } else {

      setError(false);
      submitForm();

    }

  };

  return(

    <>

      <div className="w-100  mb-3">
        <label>Existem concorrentes que devemos considerar ao desenvolver o site/sistema? <strong>*</strong></label>
        <input
            className="inputForm"
            type="text"
            value={formData.concorrentes}
            onChange={(e) => setFormData({ concorrentes: e.target.value })}
          />
      </div>

      <div className="w-100 mb-3">
        <label>Quais são os maiores desafios que você espera enfrentar com este projeto?</label>
        <input
            className="inputForm"
            type="text"
            value={formData.maioresDesafios}
            onChange={(e) => setFormData({ maioresDesafios: e.target.value })}
          />
      </div>

      <div className="w-100 mb-3">
        <label>Há mais alguma informação ou detalhe que você gostaria de compartilhar?</label>
        <input
            className="inputForm"
            type="text"
            value={formData.informacaoComplementar}
            onChange={(e) => setFormData({ informacaoComplementar: e.target.value })}
          />
      </div>

      {error && <p className="fs-6 error mb-3">Os Campos com * são obrigatórios</p>}

      <div className="d-flex flex-row justify-content-around w-100">

        {
          loading ? (
            <>

              <button className="btn purpleOutlineBtn rounded" disabled={true} onClick={prevStep}><FaAngleLeft /> Voltar</button>
              <button className="btn purpleBtn rounded" disabled={true} onClick={handleNext}>Enviando <div className="spinner-border spinner-border-sm text-light" role="status"><span className="visually-hidden">Carregando...</span></div></button>

            </>
          ):(

            <>
              <button className="btn purpleOutlineBtn rounded" onClick={prevStep}><FaAngleLeft /> Voltar</button>
              <button className="btn purpleBtn rounded" onClick={handleNext}>Enviar <FaAngleRight /></button>
            </>

          )
        }

      </div>

    </>

  )

}
