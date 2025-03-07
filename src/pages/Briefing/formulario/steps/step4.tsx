import { useState, useContext, useEffect } from "react";

import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

import { StepContextType } from "./step1";

import StepContext from "../../../../contexts/StepContext";

interface Step1Props {
  formData: { exemploDesign: string; coresUsadas: string; coresNaoUsadas: string; possuiBranding: string; };
  setFormData: (data: { exemploDesign?: string; coresUsadas?: string; coresNaoUsadas?: string; possuiBranding?: string; }) => void;
}

export default function Step4({ formData, setFormData }: Step1Props){

  const [error, setError] = useState(false);

  const { nextStep, prevStep, setTitle } = useContext(StepContext) as StepContextType;

  useEffect(() => {

    if (setTitle) {
      setTitle('Design e Estilo');
    }

  }, [setTitle]);

  const handleNext = () => {

    if (!formData.exemploDesign || !formData.coresUsadas || !formData.coresNaoUsadas || !formData.possuiBranding) {

      setError(true);

    } else {

      setError(false);
      nextStep();

    }

  };

  return(

    <>

      <div className="w-100  mb-3">
        <label>Liste algum exemplo de sites/sistemas que gosta em termos de design: <strong>*</strong></label>
        <input
            className="inputForm"
            type="text"
            value={formData.exemploDesign}
            onChange={(e) => setFormData({ exemploDesign: e.target.value })}
          />
      </div>

      <div className="w-100 mb-3">
        <label>Existem cores, fontes ou estilos específicos que devem ser <strong>usados</strong>? <strong>*</strong></label>
        <input
            className="inputForm"
            type="text"
            value={formData.coresUsadas}
            onChange={(e) => setFormData({ coresUsadas: e.target.value })}
          />
      </div>

      <div className="w-100 mb-3">
        <label>Existem cores, fontes ou estilos específicos que devem ser <strong>evitados</strong>? <strong>*</strong></label>
        <input
            className="inputForm"
            type="text"
            value={formData.coresNaoUsadas}
            onChange={(e) => setFormData({ coresNaoUsadas: e.target.value })}
          />
      </div>

      <div className="w-100 mb-3">
        <label>Você possui um guia de estilo ou branding que deve ser seguido? <strong>*</strong></label>
        <input
            className="inputForm"
            type="text"
            value={formData.possuiBranding}
            onChange={(e) => setFormData({ possuiBranding: e.target.value })}
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
