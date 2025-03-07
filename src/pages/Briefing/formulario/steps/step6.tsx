import { useState, useContext, useEffect } from "react";

import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

import { StepContextType } from "./step1";

import StepContext from "../../../../contexts/StepContext";

interface Step1Props {
  formData: { responsavelConteudo: string; suporteSEO: string; paginasEspecificas: string; };
  setFormData: (data: { responsavelConteudo?: string; suporteSEO?: string; paginasEspecificas?: string; }) => void;
}

export default function Step6({ formData, setFormData}: Step1Props){

  const [error, setError] = useState(false);

  const { nextStep, prevStep, setTitle } = useContext(StepContext) as StepContextType;

  useEffect(() => {

    if (setTitle) {
      setTitle('Conteúdo');
    }

  }, [setTitle]);

  const handleNext = () => {

    if (!formData.responsavelConteudo || !formData.suporteSEO || !formData.paginasEspecificas) {

      setError(true);

    } else {

      setError(false);
      nextStep();

    }

  };

  return(

    <>

      <div className="w-100  mb-3">
        <label>Quem será responsável pela criação e fornecimento do conteúdo (textos, imagens, vídeos, etc.)? <strong>*</strong></label>
        <input
            className="inputForm"
            type="text"
            value={formData.responsavelConteudo}
            onChange={(e) => setFormData({ responsavelConteudo: e.target.value })}
          />
      </div>

      <div className="w-100 mb-3">
        <label>Você precisa de suporte para SEO (otimização para mecanismos de busca)? <strong>*</strong></label>

        <div className="form-check form-check-inline mt-3">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="Sim"
            checked={formData.suporteSEO === "Sim"}
            onChange={(e) => setFormData({ suporteSEO: e.target.value })}
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
            checked={formData.suporteSEO === "Não"}
            onChange={(e) => setFormData({ suporteSEO: e.target.value })}
          />
          <label className="form-check-label" htmlFor="inlineRadio2">Não</label>
        </div>

      </div>

      <div className="w-100 mb-3">
        <label>Existem seções ou páginas específicas que devem ser incluídas no site? (Home, Sobre, Serviços, Contato, etc.) <strong>*</strong></label>
        <input
            className="inputForm"
            type="text"
            value={formData.paginasEspecificas}
            onChange={(e) => setFormData({ paginasEspecificas: e.target.value })}
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
