import React, { Suspense } from "react";

const Navbar = React.lazy(()=> import('../../components/Navbar'));
const Footer = React.lazy(()=> import('../../components/Footer'));

const InicioServicos = React.lazy(()=> import('../Produtos/components/inicio'));

const PerguntasFaq = React.lazy(()=> import('./Perguntas'));

import { PreLoader } from "../../components/PreLoader";

import Banner from '../../img/banners/faq/banner_faq.webp';
import { Helmet } from "react-helmet";


export default function Faq(){

  const PerguntasTech = [

    {
      'id': 1,
      'pergunta': 'Vocês fazem sites responsivos?',
      'resposta': 'Sim, todos os nossos sites são responsivos, ou seja, funcionam perfeitamente em celulares, tablets e computadores.'
    },
    {
      'id': 2,
      'pergunta': 'Posso solicitar alterações após o site estar pronto?',
      'resposta': 'Claro! Oferecemos um período de suporte para ajustes e também podemos criar um plano de manutenção mensal.'
    },
    {
      'id': 3,
      'pergunta': 'O site terá boa velocidade e desempenho?',
      'resposta': 'Sim, otimizamos todos os sites para garantir rapidez e eficiência, proporcionando uma excelente experiência ao usuário.'
    },

  ]

  const PerguntasDesign = [

    {
      'id': 1,
      'pergunta': 'Vocês criam identidade visual completa?',
      'resposta': 'Sim, desenvolvemos logotipos, paletas de cores, tipografias e artes que refletem a essência da sua marca.'
    },
    {
      'id': 2,
      'pergunta': 'E se eu não gostar do design proposto?',
      'resposta': 'Sempre apresentamos conceitos e ajustamos conforme seu feedback até que você fique totalmente satisfeito.'
    },
    {
      'id': 3,
      'pergunta': 'Posso usar o design criado em qualquer lugar?',
      'resposta': 'Sim, entregamos os arquivos em alta qualidade, prontos para serem usados em materiais digitais e impressos.'
    },

  ]

  const PerguntasMarketing = [

    {
      'id': 1,
      'pergunta': 'Quais plataformas vocês utilizam para anúncios?',
      'resposta': 'Trabalhamos com Google Ads, Meta Ads (Facebook e Instagram) e outras plataformas relevantes para o seu público.'
    },
    {
      'id': 2,
      'pergunta': 'Como acompanho os resultados das campanhas?',
      'resposta': 'Enviamos relatórios claros e detalhados com métricas importantes para você acompanhar o desempenho das campanhas.'
    },
    {
      'id': 3,
      'pergunta': 'Vocês ajudam a definir o público-alvo?',
      'resposta': 'Sim, fazemos uma análise do seu mercado para segmentar os anúncios e alcançar as pessoas certas.'
    },

  ]

  const PerguntasEngajamento = [

    {
      'id': 1,
      'pergunta': 'Vocês criam os conteúdos das postagens?',
      'resposta': 'Sim, criamos textos, imagens e vídeos personalizados que se conectam com o público da sua marca.'
    },
    {
      'id': 2,
      'pergunta': 'Como funciona o acompanhamento de métricas?',
      'resposta': 'Monitoramos curtidas, comentários, compartilhamentos e alcance para entender o impacto das postagens e melhorar sempre.'
    },
    {
      'id': 3,
      'pergunta': 'Posso participar do planejamento do calendário?',
      'resposta': 'Claro! Você pode revisar e aprovar o cronograma antes de começarmos a postar.'
    },

  ]

  const PerguntasCapture = [

    {
      'id': 1,
      'pergunta': 'Vocês fazem fotos e vídeos de eventos?',
      'resposta': 'Sim, registramos eventos com fotos e vídeos de alta qualidade, capturando todos os momentos importantes.'
    },
    {
      'id': 2,
      'pergunta': 'Vocês editam os materiais capturados?',
      'resposta': 'Sim, fazemos a edição completa para entregar imagens e vídeos profissionais, prontos para uso.'
    },
    {
      'id': 3,
      'pergunta': 'O drone é usado para todos os trabalhos?',
      'resposta': 'Utilizamos drones em projetos onde sejam necessários, como capturas aéreas para empresas, eventos ou paisagens.'
    },

  ]

  return(

    <Suspense fallback={<PreLoader />}>

      <Helmet>
        <title>Be4Code | FAQ</title>
        <meta name="description" content="Encontre respostas para as dúvidas mais comuns sobre nossos produtos e serviços. Na nossa página de FAQ, você encontra informações sobre Tech, Design, Marketing, Engajamento e Capture, ajudando a esclarecer tudo o que você precisa saber." />

        <meta property="og:title" content="Be4Code | FAQ" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://be4code.com.br/faq" />
        <meta property="og:image" content="https://be4code.com.br/static/media/gabriel.f7a5d0bf107b18a83380.webp" />
        <meta property="og:image:url" content="https://be4code.com.br/static/media/gabriel.f7a5d0bf107b18a83380.webp" />
        <meta property="og:description" content="Encontre respostas para as dúvidas mais comuns sobre nossos produtos e serviços. Na nossa página de FAQ, você encontra informações sobre Tech, Design, Marketing, Engajamento e Capture, ajudando a esclarecer tudo o que você precisa saber." />
        <meta property="og:site_name" content="Be4Code | FAQ" />

        <meta name="twitter:title" content="Be4Code | FAQ" />
        <meta name="twitter:description" content="Encontre respostas para as dúvidas mais comuns sobre nossos produtos e serviços. Na nossa página de FAQ, você encontra informações sobre Tech, Design, Marketing, Engajamento e Capture, ajudando a esclarecer tudo o que você precisa saber." />
        <meta name="twitter:card" content="website" />
        <meta name="twitter:image" content="https://be4code.com.br/static/media/gabriel.f7a5d0bf107b18a83380.webp" />
        <meta name="twitter:site" content="https://be4code.com.br/faq" />

        <link rel="alternate" href="https://be4code.com.br/faq" hrefLang="pt-br" />
        <link rel="canonical" href="https://be4code.com.br/faq" />

        <meta name="keywords" content="Desenvolvimento Web, Desenvolvimento de Sites, Criação de Sites, Criação de Sites Profissionais, Criação de Landing Pages, Criação de Sites E-Commerce, Criação de Sites Institucionais, Criação de Sites de Venda, Criação de Sites de Venda Online, Criação de Sites de Venda Presencial, Criação de Sites de Venda Digital, Criação de Sites de Venda Online, Criação de Sites de Venda Presencial, Criação de Sites de Venda Digital" />

        <meta name="author" content="Be4Code" />

        <meta name="robots" content="noindex, nofollow" />

        <meta name="language" content="Portuguese" />

        <meta name="revisit-after" content="7 days" />

      </Helmet>

      <Navbar />

      <InicioServicos banner={Banner} subTitulo="Tire Suas Dúvidas - Perguntas Frequentes sobre Nossos Produtos" titulo="Respostas Simples para Suas Perguntas" texto="Aqui você encontra as respostas para as dúvidas mais comuns sobre nossos serviços de tecnologia, design, marketing, engajamento e captura. Nosso objetivo é esclarecer tudo de forma prática e direta, ajudando você a entender como podemos transformar suas ideias em resultados reais." />

      <article className="container-fluid py-5">

          <PerguntasFaq titulo="Tech" pergunta={PerguntasTech} />

          <PerguntasFaq titulo="Design" pergunta={PerguntasDesign} />

          <PerguntasFaq titulo="Marketing" pergunta={PerguntasMarketing} />

          <PerguntasFaq titulo="Engajamento" pergunta={PerguntasEngajamento} />

          <PerguntasFaq titulo="Capture" pergunta={PerguntasCapture} />

      </article>

      <Footer />

    </Suspense>

  )

}
