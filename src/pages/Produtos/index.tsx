import React, { Suspense } from 'react';

import { Titulo } from './components/styles';

const Navbar = React.lazy(()=> import('../../components/Navbar'));
const Footer = React.lazy(()=> import('../../components/Footer'));

const InicioServicos = React.lazy(()=> import('./components/inicio'));
const CardProduto = React.lazy(()=> import('./components/CardProduto'));

import { PreLoader } from '../../components/PreLoader';

import Banner from '../../img/banners/servicos/banner_produtos.webp';

import TumbTech from '../../img/tumb/tumb_tech.avif';
import TumbDesign from '../../img/tumb/tumb_design.avif';
import TumbMarketing from '../../img/tumb/tumb_marketing.avif';
import TumbEngajamento from '../../img/tumb/tumb_engajamento.avif';
import TumbCapture from '../../img/tumb/tumb_capture.avif';
import { Helmet } from 'react-helmet';

export default function Produtos(){

  const produtos = [

    {
      'id_produto': 1,
      'titulo': 'Tech',
      'texto': 'Criamos sites e sistemas sob medida para o seu negócio. Soluções modernas e eficientes que conectam sua marca ao mundo digital.',
      'tumbnail': TumbTech,
      'link': '/produtos/tech'
    },
    {
      'id_produto': 2,
      'titulo': 'Design',
      'texto': 'Damos vida à sua marca com identidade visual única, logotipos marcantes e artes criativas que transmitem sua essência.',
      'tumbnail': TumbDesign,
      'link': '/produtos/design'
    },
    {
      'id_produto': 3,
      'titulo': 'Marketing',
      'texto': 'Elaboramos estratégias de anúncios e campanhas para atrair clientes, aumentar vendas e posicionar sua marca no mercado.',
      'tumbnail': TumbMarketing,
      'link': '/produtos/marketing'
    },
    {
      'id_produto': 4,
      'titulo': 'Engajamento',
      'texto': 'Gerenciamos suas redes sociais com conteúdos criativos, calendário de postagens e análise de resultados para conectar você ao público.',
      'tumbnail': TumbEngajamento,
      'link': '/produtos/engajamento'
    },
    {
      'id_produto': 5,
      'titulo': 'Capture',
      'texto': 'Fotografamos e filmamos seu negócio com câmeras e drones, entregando imagens incríveis que valorizam e promovem sua marca.',
      'tumbnail': TumbCapture,
      'link': '/produtos/capture'
    },

  ]

  return(

    <Suspense fallback={<PreLoader />}>

      <Helmet>
        <title>Be4Code | Produtos</title>
        <meta name="description" content="Explore nossos produtos e descubra soluções completas para impulsionar o crescimento da sua empresa. Oferecemos serviços de Tech, Design, Marketing, Engajamento e Capture para atender suas necessidades." />

        <meta property="og:title" content="Be4Code | Produtos" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://be4code.com.br/produtos" />
        <meta property="og:image" content="https://be4code.com.br/static/media/gabriel.f7a5d0bf107b18a83380.webp" />
        <meta property="og:image:url" content="https://be4code.com.br/static/media/gabriel.f7a5d0bf107b18a83380.webp" />
        <meta property="og:description" content="Explore nossos produtos e descubra soluções completas para impulsionar o crescimento da sua empresa. Oferecemos serviços de Tech, Design, Marketing, Engajamento e Capture para atender suas necessidades." />
        <meta property="og:site_name" content="Be4Code | Produtos" />

        <meta name="twitter:title" content="Be4Code | Produtos" />
        <meta name="twitter:description" content="Explore nossos produtos e descubra soluções completas para impulsionar o crescimento da sua empresa. Oferecemos serviços de Tech, Design, Marketing, Engajamento e Capture para atender suas necessidades." />
        <meta name="twitter:card" content="website" />
        <meta name="twitter:image" content="https://be4code.com.br/static/media/gabriel.f7a5d0bf107b18a83380.webp" />
        <meta name="twitter:site" content="https://be4code.com.br/produtos" />

        <link rel="alternate" href="https://be4code.com.br/produtos" hrefLang="pt-br" />
        <link rel="canonical" href="https://be4code.com.br/produtos" />

        <meta name="keywords" content="Desenvolvimento Web, Desenvolvimento de Sites, Criação de Sites, Criação de Sites Profissionais, Criação de Landing Pages, Criação de Sites E-Commerce, Criação de Sites Institucionais, Criação de Sites de Venda, Criação de Sites de Venda Online, Criação de Sites de Venda Presencial, Criação de Sites de Venda Digital, Criação de Sites de Venda Online, Criação de Sites de Venda Presencial, Criação de Sites de Venda Digital" />

        <meta name="author" content="Be4Code" />

        <meta name="robots" content="noindex, nofollow" />

        <meta name="language" content="Portuguese" />

        <meta name="revisit-after" content="7 days" />

      </Helmet>

      <Navbar />

        <InicioServicos banner={Banner} subTitulo="Nossos Serviços, Seu Sucesso" titulo="Soluções Digitais Completa para Seu Negócio" texto="Conheça nossa lista de serviços pensados para transformar sua presença digital. De sites a estratégias de marketing, tudo para seu negócio crescer." />

        <article className="container-fluid py-5">

          <section className="row mb-5">

            <div className="col-12 text-center">

              <Titulo>Nossos Produtos<span className='purple'>.</span></Titulo>

            </div>

          </section>

          <section className="row">

            <CardProduto produto={produtos} />

          </section>

        </article>

      <Footer />

    </Suspense>


  )

}
