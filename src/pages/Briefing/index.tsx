import { useState, useEffect } from "react";

import { Helmet } from "react-helmet";

import { PreLoader } from "../../components/PreLoader";

import { Main, Container } from "../Links/styles";

import { Progresso } from "./formulario/progresso";
import { Formulario } from "./formulario";

import StepContext from "../../contexts/StepContext";

export default function Briefing(){

  const [loading, setLoading] = useState(true);

  const [stepForm, setStepForm] = useState(1);

  const [title, setTitle] = useState('Informaçes básicas do cliente');

  const [progresso, setProgresso] = useState(12.5);

  const nextStep = () => {

    setStepForm(stepForm + 1);
    setProgresso(progresso + 12.5);

  }

  const prevStep = () => {

    setStepForm(stepForm - 1);
    setProgresso(progresso - 12.5);

  }


  useEffect(() => {
    if (document.readyState === 'complete') {

      setLoading(false);

    } else {

      const handleLoad = () => {
        setLoading(false);
      };

      window.addEventListener('load', handleLoad);

      return () => {
        window.removeEventListener('load', handleLoad);
      };

    }
  }, []);

  if(loading){

    return(

      <PreLoader />

    )

  }

  return(

    <>

    <Helmet>
        <title>Be4Code - Briefing</title>
        <meta name="description" content="Prepare-se para o sucesso com a Be4Code! Nossa página de briefing contém perguntas essenciais para entender suas necessidades e desenvolver projetos personalizados de desenvolvimento web, criação de sites, SEO e E-Commerce. Inicie seu projeto conosco!" />

        <meta property="og:title" content="Be4Code - Briefing" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://be4code.com.br/briefing" />
        <meta property="og:image" content="https://be4code.com.br/static/media/gabriel.f7a5d0bf107b18a83380.webp" />
        <meta property="og:image:url" content="https://be4code.com.br/static/media/gabriel.f7a5d0bf107b18a83380.webp" />
        <meta property="og:description" content="Prepare-se para o sucesso com a Be4Code! Nossa página de briefing contém perguntas essenciais para entender suas necessidades e desenvolver projetos personalizados de desenvolvimento web, criação de sites, SEO e E-Commerce. Inicie seu projeto conosco!" />
        <meta property="og:site_name" content="Be4Code - Briefing" />

        <meta name="twitter:title" content="Be4Code - Briefing" />
        <meta name="twitter:description" content="Prepare-se para o sucesso com a Be4Code! Nossa página de briefing contém perguntas essenciais para entender suas necessidades e desenvolver projetos personalizados de desenvolvimento web, criação de sites, SEO e E-Commerce. Inicie seu projeto conosco!" />
        <meta name="twitter:card" content="website" />
        <meta name="twitter:image" content="https://be4code.com.br/static/media/gabriel.f7a5d0bf107b18a83380.webp" />
        <meta name="twitter:site" content="https://be4code.com.br/briefing" />

        <link rel="alternate" href="https://be4code.com.br/briefing" hrefLang="pt-br" />
        <link rel="canonical" href="https://be4code.com.br/briefing" />

        <meta name="keywords" content="Desenvolvimento Web, Desenvolvimento de Sites, Criação de Sites, Criação de Sites Profissionais, Criação de Landing Pages, Criação de Sites E-Commerce, Criação de Sites Institucionais, Criação de Sites de Venda, Criação de Sites de Venda Online, Criação de Sites de Venda Presencial, Criação de Sites de Venda Digital, Criação de Sites de Venda Online, Criação de Sites de Venda Presencial, Criação de Sites de Venda Digital" />

        <meta name="author" content="Be4Code" />

        <meta name="robots" content="noindex, nofollow" />

        <meta name="language" content="Portuguese" />

        <meta name="revisit-after" content="7 days" />

      </Helmet>

      <Main className="bgDarkPurple my-0 py-3">

        <Container className='shadow'>

          <StepContext.Provider value={{stepForm, setStepForm, title, setTitle, progresso, setProgresso, nextStep, prevStep}}>

            <Progresso />

            <Formulario />

          </StepContext.Provider>


        </Container>

      </Main>

    </>


  )

}
