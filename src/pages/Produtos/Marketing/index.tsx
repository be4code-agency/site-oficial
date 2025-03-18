import React, { Suspense } from 'react';

import { PreLoader } from '../../../components/PreLoader';

const Navbar = React.lazy(() => import("../../../components/Navbar"));
const InicioServicos = React.lazy(() => import("../components/inicio"));
const TextoSessao = React.lazy(() => import("../components/TextoSessao"));
const Footer = React.lazy(() => import("../../../components/Footer"));
const Caracteristicas = React.lazy(() => import("../components/Caracteristicas"));
const CtaOrcamento = React.lazy(() => import("../components/CtaOrcamento"));
const EtapasDesenvolvimento = React.lazy(() => import("../components/EtapasDesenvolvimento"));
const PerguntasFrequentes = React.lazy(() => import("../components/PerguntasFrequentes"));

import Banner from '../../../img/banners/servicos/programacao/banner_marketing.avif';

import AnaliseEstrategica from '../../../img/icones/produtos/marketing/analise_estrategica_mercado.svg';
import OtimizacaoAnuncios from '../../../img/icones/produtos/marketing/otimizacao_de_anuncios.svg';
import SegmentacaoPrecisa from '../../../img/icones/produtos/marketing/segmentacao_precisa.svg';
import RelatoriosDetalhados from '../../../img/icones/produtos/marketing/relatorios_detalhados.svg';
import GerenciamentoOrcamentos from '../../../img/icones/produtos/marketing/gerenciamento_de_orcamentos.svg';
import AnunciosAtraentes from '../../../img/icones/produtos/marketing/anuncios_atraentes.svg';
import { Helmet } from 'react-helmet';

export default function Marketing(){

  const caracProjetos = [
    {
    titulo: 'Análise Estratégica de Mercado',
    texto: 'Planejamos campanhas com base em dados do mercado e do seu público-alvo.',
    icone: AnaliseEstrategica
    },

    {
    titulo: 'Otimização de Anúncios',
    texto: 'Ajustamos constantemente os anúncios para alcançar maior desempenho e ROI.',
    icone: OtimizacaoAnuncios
    },

    {
    titulo: 'Segmentação Precisa',
    texto: 'Criamos campanhas personalizadas para atingir as pessoas certas, no momento certo.',
    icone: SegmentacaoPrecisa
    },

    {
    titulo: 'Relatórios Detalhados',
    texto: 'Oferecemos análises claras dos resultados para acompanhamento do desempenho.',
    icone: RelatoriosDetalhados
    },

    {
    titulo: 'Gerenciamento de Orçamentos',
    texto: 'Garantimos o melhor uso do investimento para maximizar os resultados.',
    icone: GerenciamentoOrcamentos
    },

    {
    titulo: 'Criação de Anúncios Atraentes',
    texto: 'Desenvolvemos anúncios visuais e textuais que capturam a atenção do público.',
    icone: AnunciosAtraentes
    },

  ]

  const etapasDesenvolvimento = [

    {
      numEtapa: 1,
      titulo: 'Briefing',
      texto: 'Perguntas ao cliente para entender objetivos, público-alvo e metas de campanha.'
    },
    {
      numEtapa: 2,
      titulo: 'Pesquisa de Mercado',
      texto: 'Analiso concorrentes, tendências e palavras-chave para estratégias assertivas.'
    },
    {
      numEtapa: 3,
      titulo: 'Planejamento Estratégico',
      texto: 'Defino orçamento, canais ideais e segmentação do público para a campanha.'
    },
    {
      numEtapa: 4,
      titulo: 'Criação de Anúncios',
      texto: 'Desenvolvo textos, imagens e vídeos otimizados para Google Ads e Meta Ads.'
    },
    {
      numEtapa: 5,
      titulo: 'Monitoramento e Otimização',
      texto: 'Acompanho resultados em tempo real e ajusto a campanha para melhor desempenho.'
    },
    {
      numEtapa: 6,
      titulo: 'Relatório e Entrega',
      texto: 'Forneço um relatório detalhado com os resultados e insights para futuras campanhas.'
    }

  ]

  const perguntarFrequentes = [

    {
      numPergunta: 1,
      pergunta: 'Como o marketing digital pode ajudar minha empresa?',
      resposta: 'O marketing digital ajuda sua empresa a alcançar mais clientes por meio de anúncios segmentados no Google e redes sociais. Isso aumenta sua visibilidade, atrai o público certo e gera mais vendas, tudo com monitoramento constante para garantir os melhores resultados.'
    },
    {
      numPergunta: 2,
      pergunta: 'Qual a diferença entre Google Ads e Meta Ads?',
      resposta: 'Google Ads exibe anúncios no Google e em sites parceiros, enquanto Meta Ads engloba Facebook, Instagram e WhatsApp. Cada plataforma é ideal para objetivos diferentes, como aumentar vendas, cliques no site ou engajamento nas redes sociais. Podemos combinar ambas para potencializar sua estratégia.'
    },
    {
      numPergunta: 3,
      pergunta: 'Quanto devo investir em tráfego pago?',
      resposta: 'O valor depende do seu objetivo e público-alvo. Iniciamos com um orçamento adequado ao seu negócio, otimizando os resultados ao longo da campanha. Mesmo com investimentos menores, criamos estratégias eficientes para garantir retorno sobre o valor aplicado.'
    },
    {
      numPergunta: 4,
      pergunta: 'Em quanto tempo vejo resultados?',
      resposta: 'Os primeiros resultados aparecem em poucos dias, mas o desempenho ideal se consolida ao longo das semanas, conforme otimizamos a campanha. Ajustamos anúncios, segmentação e palavras-chave para garantir que você tenha o maior retorno possível no menor tempo.'
    },
    {
      numPergunta: 5,
      pergunta: 'É possível acompanhar o desempenho das campanhas?',
      resposta: 'Sim! Fornecemos relatórios detalhados com métricas importantes, como cliques, impressões, conversões e custo por resultado. Você acompanha a evolução da campanha e tem clareza sobre os impactos diretos na sua empresa.'
    },

  ]

  return(

    <Suspense fallback={<PreLoader />}>

      <Helmet>
        <title>Be4Code | Marketing</title>
        <meta name="description" content="Oferecemos soluções de marketing digital, como gestão de anúncios, SEO e tráfego pago, para aumentar sua presença online e gerar resultados reais para sua empresa." />

        <meta property="og:title" content="Be4Code | Marketing" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://be4code.com.br/produtos/marketing" />
        <meta property="og:image" content="https://be4code.com.br/static/media/gabriel.f7a5d0bf107b18a83380.webp" />
        <meta property="og:image:url" content="https://be4code.com.br/static/media/gabriel.f7a5d0bf107b18a83380.webp" />
        <meta property="og:description" content="Oferecemos soluções de marketing digital, como gestão de anúncios, SEO e tráfego pago, para aumentar sua presença online e gerar resultados reais para sua empresa." />
        <meta property="og:site_name" content="Be4Code | Marketing" />

        <meta name="twitter:title" content="Be4Code | Marketing" />
        <meta name="twitter:description" content="Oferecemos soluções de marketing digital, como gestão de anúncios, SEO e tráfego pago, para aumentar sua presença online e gerar resultados reais para sua empresa." />
        <meta name="twitter:card" content="website" />
        <meta name="twitter:image" content="https://be4code.com.br/static/media/gabriel.f7a5d0bf107b18a83380.webp" />
        <meta name="twitter:site" content="https://be4code.com.br/produtos/marketing" />

        <link rel="alternate" href="https://be4code.com.br/produtos/marketing" hrefLang="pt-br" />
        <link rel="canonical" href="https://be4code.com.br/produtos/marketing" />

        <meta name="keywords" content="Desenvolvimento Web, Desenvolvimento de Sites, Criação de Sites, Criação de Sites Profissionais, Criação de Landing Pages, Criação de Sites E-Commerce, Criação de Sites Institucionais, Criação de Sites de Venda, Criação de Sites de Venda Online, Criação de Sites de Venda Presencial, Criação de Sites de Venda Digital, Criação de Sites de Venda Online, Criação de Sites de Venda Presencial, Criação de Sites de Venda Digital" />

        <meta name="author" content="Be4Code" />

        <meta name="robots" content="noindex, nofollow" />

        <meta name="language" content="Portuguese" />

        <meta name="revisit-after" content="7 days" />

      </Helmet>

      <Navbar />

      <InicioServicos banner={Banner} subTitulo="Gestão de Google Ads e Meta Ads - Agência de Marketing Digital " titulo="Estratégias de Anúncios que Convertem Cliques em Resultados!" texto="Gerenciamos campanhas no Google Ads e Meta Ads para impulsionar seu negócio. Com segmentação precisa, anúncios criativos e monitoramento constante, conectamos sua marca ao público certo, maximizando vendas e ROI. Invista em tráfego pago com quem entende de performance." />

      <TextoSessao titulo="Marketing" texto="Criamos campanhas no Google Ads e Meta Ads que conectam sua marca ao público certo. Nosso objetivo é transformar investimentos em anúncios em resultados reais, aumentando vendas e destacando sua empresa no mercado digital." />

      <Caracteristicas projetos={caracProjetos} subTitulo='Agência de Marketing Digital' produto='Marketing' />

      <CtaOrcamento titulo="Transforme Cliques em Clientes" msgWhatsapp="Gostaria de um orçamento para Google Ads e Meta Ads" />

      <EtapasDesenvolvimento etapas={etapasDesenvolvimento} />

      <PerguntasFrequentes perguntas={perguntarFrequentes} />

      <Footer />

    </Suspense>

  )

}
