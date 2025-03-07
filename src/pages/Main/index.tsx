import React, { Suspense } from "react";

const Navbar = React.lazy(() => import('../../components/Navbar'));

const Inicio = React.lazy(()=> import('./Inicio'));
const Clientes = React.lazy(()=> import('./Clientes'));
const Servicos = React.lazy(()=> import('./Servicos'));
const Projetos = React.lazy(()=> import('./Projetos'));
const SobreNos = React.lazy(()=> import('./SobreNos'));
const Orcamento = React.lazy(()=> import('./Orcamento'));
const Footer = React.lazy(()=> import('../../components/Footer'));

import { PreLoader } from "../../components/PreLoader";
import { Helmet } from "react-helmet";

export default function Main(){

  return(

    <Suspense fallback={<PreLoader />}>

      <Helmet>
        <title>Be4Code | Marketing Digital e Criação de Sites Profissionais</title>
        <meta name="description" content="Especialistas em criação de sites, SEO, tráfego pago, gestão de e-commerce e redes sociais. Potencialize sua presença online e conquiste mais clientes com estratégias eficazes." />

        <meta property="og:title" content="Be4Code | Marketing Digital e Criação de Sites Profissionais" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://be4code.com.br/" />
        <meta property="og:image" content="https://be4code.com.br/static/media/gabriel.f7a5d0bf107b18a83380.webp" />
        <meta property="og:image:url" content="https://be4code.com.br/static/media/gabriel.f7a5d0bf107b18a83380.webp" />
        <meta property="og:description" content="Prepare-se para o sucesso com a Be4Code! Nossa página de briefing contém perguntas essenciais para entender suas necessidades e desenvolver projetos personalizados de desenvolvimento web, criação de sites, SEO e E-Commerce. Inicie seu projeto conosco!" />
        <meta property="og:site_name" content="Be4Code | Marketing Digital e Criação de Sites Profissionais" />

        <meta name="twitter:title" content="Be4Code | Marketing Digital e Criação de Sites Profissionais" />
        <meta name="twitter:description" content="Prepare-se para o sucesso com a Be4Code! Nossa página de briefing contém perguntas essenciais para entender suas necessidades e desenvolver projetos personalizados de desenvolvimento web, criação de sites, SEO e E-Commerce. Inicie seu projeto conosco!" />
        <meta name="twitter:card" content="website" />
        <meta name="twitter:image" content="https://be4code.com.br/static/media/gabriel.f7a5d0bf107b18a83380.webp" />
        <meta name="twitter:site" content="https://be4code.com.br/" />

        <link rel="alternate" href="https://be4code.com.br/" hrefLang="pt-br" />
        <link rel="canonical" href="https://be4code.com.br/" />

        <meta name="keywords" content="Desenvolvimento Web, Desenvolvimento de Sites, Criação de Sites, Criação de Sites Profissionais, Criação de Landing Pages, Criação de Sites E-Commerce, Criação de Sites Institucionais, Criação de Sites de Venda, Criação de Sites de Venda Online, Criação de Sites de Venda Presencial, Criação de Sites de Venda Digital, Criação de Sites de Venda Online, Criação de Sites de Venda Presencial, Criação de Sites de Venda Digital" />

        <meta name="author" content="Be4Code" />

        <meta name="robots" content="noindex, nofollow" />

        <meta name="language" content="Portuguese" />

        <meta name="revisit-after" content="7 days" />

      </Helmet>

      <Navbar />

      <Inicio />

      <Clientes />

      <Servicos />

      <Projetos />

      <SobreNos />

      <Orcamento />

      <Footer />

    </Suspense>

  )

}
