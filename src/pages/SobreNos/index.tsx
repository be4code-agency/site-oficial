import React, { Suspense } from "react";

import { PreLoader } from "../../components/PreLoader";
import { Helmet } from "react-helmet";

const Navbar = React.lazy(()=> import("../../components/Navbar"));
const Footer = React.lazy(()=> import("../../components/Footer"));

const BannerSobreNos = React.lazy(()=> import("./Banner"));
const NossaHistoria = React.lazy(()=> import("./NossaHistoria"));
const Resultados = React.lazy(()=> import("./Resultados"));
const Clientes = React.lazy(()=> import("../Main/Clientes"));


export default function SobreNos(){

  return(

    <Suspense fallback={<PreLoader />}>

      <Helmet>
        <title>Be4Code | Sobre Nós</title>
        <meta name="description" content="Saiba mais sobre nossa agência, nossa missão e os valores que nos guiam. Estamos aqui para ajudar sua empresa a alcançar o sucesso com soluções inovadoras e criativas." />

        <meta property="og:title" content="Be4Code | Sobre Nós" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://be4code.com.br/sobre-nos" />
        <meta property="og:image" content="https://be4code.com.br/static/media/gabriel.f7a5d0bf107b18a83380.webp" />
        <meta property="og:image:url" content="https://be4code.com.br/static/media/gabriel.f7a5d0bf107b18a83380.webp" />
        <meta property="og:description" content="Saiba mais sobre nossa agência, nossa missão e os valores que nos guiam. Estamos aqui para ajudar sua empresa a alcançar o sucesso com soluções inovadoras e criativas." />
        <meta property="og:site_name" content="Be4Code | Sobre Nós" />

        <meta name="twitter:title" content="Be4Code | Sobre Nós" />
        <meta name="twitter:description" content="Saiba mais sobre nossa agência, nossa missão e os valores que nos guiam. Estamos aqui para ajudar sua empresa a alcançar o sucesso com soluções inovadoras e criativas." />
        <meta name="twitter:card" content="website" />
        <meta name="twitter:image" content="https://be4code.com.br/static/media/gabriel.f7a5d0bf107b18a83380.webp" />
        <meta name="twitter:site" content="https://be4code.com.br/sobre-nos" />

        <link rel="alternate" href="https://be4code.com.br/sobre-nos" hrefLang="pt-br" />
        <link rel="canonical" href="https://be4code.com.br/sobre-nos" />

        <meta name="keywords" content="Desenvolvimento Web, Desenvolvimento de Sites, Criação de Sites, Criação de Sites Profissionais, Criação de Landing Pages, Criação de Sites E-Commerce, Criação de Sites Institucionais, Criação de Sites de Venda, Criação de Sites de Venda Online, Criação de Sites de Venda Presencial, Criação de Sites de Venda Digital, Criação de Sites de Venda Online, Criação de Sites de Venda Presencial, Criação de Sites de Venda Digital" />

        <meta name="author" content="Be4Code" />

        <meta name="robots" content="noindex, nofollow" />

        <meta name="language" content="Portuguese" />

        <meta name="revisit-after" content="7 days" />

      </Helmet>

      <Navbar />

      <BannerSobreNos />

      <NossaHistoria />

      <Resultados />

      <Clientes />

      <Footer />

    </Suspense>

  )

}
