import React, { Suspense } from 'react';

const Perfil = React.lazy(() => import('./Perfil'));
const Projetos = React.lazy(() => import('./Projetos'));

import { Helmet } from "react-helmet";

import { PreLoader } from "../../components/PreLoader";

import { Main, Container, Footer } from './styles';

import { FaRegCopyright } from "react-icons/fa6";

export default function Links(){

  return(

    <Suspense fallback={<PreLoader />}>

      <Helmet>
        <title>Be4Code - Meus Links</title>
        <meta name="description" content="Explore todos os links essenciais da Be4Code em um só lugar! Conecte-se com nossas redes sociais e confira nossos últimos projetos de desenvolvimento web, criação de sites, SEO e E-Commerce. Descubra o que podemos fazer por você!" />

        <meta property="og:title" content="Be4Code - Meus Links" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://be4code.com.br/links" />
        <meta property="og:image" content="https://be4code.com.br/static/media/gabriel.f7a5d0bf107b18a83380.webp" />
        <meta property="og:image:url" content="https://be4code.com.br/static/media/gabriel.f7a5d0bf107b18a83380.webp" />
        <meta property="og:description" content="Explore todos os links essenciais da Be4Code em um só lugar! Conecte-se com nossas redes sociais e confira nossos últimos projetos de desenvolvimento web, criação de sites, SEO e E-Commerce. Descubra o que podemos fazer por você!" />
        <meta property="og:site_name" content="Be4Code - Meus Links" />

        <meta name="twitter:title" content="Be4Code - Meus Links" />
        <meta name="twitter:description" content="Explore todos os links essenciais da Be4Code em um só lugar! Conecte-se com nossas redes sociais e confira nossos últimos projetos de desenvolvimento web, criação de sites, SEO e E-Commerce. Descubra o que podemos fazer por você!" />
        <meta name="twitter:card" content="website" />
        <meta name="twitter:image" content="https://be4code.com.br/static/media/gabriel.f7a5d0bf107b18a83380.webp" />
        <meta name="twitter:site" content="https://be4code.com.br/links" />

        <link rel="alternate" href="https://be4code.com.br/links" hrefLang="pt-br" />
        <link rel="canonical" href="https://be4code.com.br/links" />

        <meta name="keywords" content="Desenvolvimento Web, Desenvolvimento de Sites, Criação de Sites, Criação de Sites Profissionais, Criação de Landing Pages, Criação de Sites E-Commerce, Criação de Sites Institucionais, Criação de Sites de Venda, Criação de Sites de Venda Online, Criação de Sites de Venda Presencial, Criação de Sites de Venda Digital, Criação de Sites de Venda Online, Criação de Sites de Venda Presencial, Criação de Sites de Venda Digital" />

        <meta name="author" content="Be4Code" />

        <meta name="robots" content="index, follow" />

        <meta name="language" content="Portuguese" />

        <meta name="revisit-after" content="7 days" />

      </Helmet>

      <Main>

        <Container className='shadow'>

          <Perfil />

          <Projetos />

          <Footer>

            <span><FaRegCopyright /> Be4Code - 2025</span>

          </Footer>

        </Container>

      </Main>

    </Suspense>

  )

}
