import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Step1 from './steps/step1';
import Step2 from './steps/step2';
import Step3 from './steps/step3';
import Step4 from './steps/step4';
import Step5 from './steps/step5';
import Step6 from './steps/step6';
import Step7 from './steps/step7';
import Step8 from './steps/step8';

import { AlertDefault } from '../../../helpers/AlertDefault';

import { sendBriefing } from '../../../services/api';

import StepContext from '../../../contexts/StepContext';

interface StepContextType {
  stepForm: number;
}

export function Formulario(){

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nomeEmpresa: '',
    nomeContato: '',
    email: '',
    telefone: '',
    objetivoPrincipal: '',
    prazoConclusao: '',
    orcamentoDisponivel: '',
    substituirOuAtualizarSistema: 'nao',
    linkSubstituirOuAtualizar: '',
    publicoAlvo: '',
    caracteristicasDemograficas: '',
    interessesEComportamentos: '',
    exemploDesign: '',
    coresUsadas: '',
    coresNaoUsadas: '',
    possuiBranding: '',
    funcionalidades: '',
    integracaoComPlataformas: '',
    segurancaOuPrivacidadeEspecifico: '',
    responsavelConteudo: '',
    suporteSEO: 'Sim',
    paginasEspecificas: '',
    suporteAposLancamento: 'Sim',
    expectativaManutencao: '',
    concorrentes: '',
    maioresDesafios: '',
    informacaoComplementar: ''
  });

  const { stepForm } = useContext(StepContext) as StepContextType;

  const submitForm = () => {

    const briefing = new FormData();

    briefing.append('nomeEmpresa', formData.nomeEmpresa);
    briefing.append('nomeContato', formData.nomeContato);
    briefing.append('email', formData.email);
    briefing.append('telefone', formData.telefone.replace('(', '').replace(')', '').replace('-', ''));
    briefing.append('objetivoPrincipal', formData.objetivoPrincipal);
    briefing.append('prazoConclusao', formData.prazoConclusao);
    briefing.append('orcamentoDisponivel', formData.orcamentoDisponivel);
    briefing.append('substituirOuAtualizarSistema', formData.substituirOuAtualizarSistema);
    briefing.append('linkSubstituirOuAtualizar', formData.linkSubstituirOuAtualizar);
    briefing.append('publicoAlvo', formData.publicoAlvo);
    briefing.append('caracteristicasDemograficas', formData.caracteristicasDemograficas);
    briefing.append('interessesEComportamentos', formData.interessesEComportamentos);
    briefing.append('exemploDesign', formData.exemploDesign);
    briefing.append('coresUsadas', formData.coresUsadas);
    briefing.append('coresNaoUsadas', formData.coresNaoUsadas);
    briefing.append('possuiBranding', formData.possuiBranding);
    briefing.append('funcionalidades', formData.funcionalidades);
    briefing.append('integracaoComPlataformas', formData.integracaoComPlataformas);
    briefing.append('segurancaOuPrivacidadeEspecifico', formData.segurancaOuPrivacidadeEspecifico);
    briefing.append('responsavelConteudo', formData.responsavelConteudo);
    briefing.append('suporteSEO', formData.suporteSEO);
    briefing.append('paginasEspecificas', formData.paginasEspecificas);
    briefing.append('suporteAposLancamento', formData.suporteAposLancamento);
    briefing.append('expectativaManutencao', formData.expectativaManutencao);
    briefing.append('concorrentes', formData.concorrentes);
    briefing.append('maioresDesafios', formData.maioresDesafios);
    briefing.append('informacaoComplementar', formData.informacaoComplementar);

    const loadData = async ()=>{

      setLoading(true);

      const [sendBriefingResponse] = await Promise.all([

        sendBriefing(briefing)

      ]);

      if(sendBriefingResponse.data.mensagem === 'Operação realizada com sucesso'){

        navigate('/confirmacao');

      }else{

        AlertDefault({title:'Opss', text:'Desculpe, não foi possivel enviar o briefing', icon:'warning', timer:3000});
        setLoading(false);

      }

    }

    loadData();

  };


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setFormDataStep = (data:any) => setFormData((prevData) => ({ ...prevData, ...data }));

  switch (stepForm) {

    case 1:
      return <Step1 formData={formData} setFormData={setFormDataStep} />

    case 2:
      return <Step2 formData={formData} setFormData={setFormDataStep} />

    case 3:
      return <Step3 formData={formData} setFormData={setFormDataStep} />

    case 4:
      return <Step4 formData={formData} setFormData={setFormDataStep} />

    case 5:
      return <Step5 formData={formData} setFormData={setFormDataStep} />

    case 6:
      return <Step6 formData={formData} setFormData={setFormDataStep} />

    case 7:
      return <Step7 formData={formData} setFormData={setFormDataStep} />

    case 8:
      return <Step8 formData={formData} setFormData={setFormDataStep} submitForm={submitForm} loading={loading} />

    default:
      return <div>Formulário inválido</div>

  }

}
