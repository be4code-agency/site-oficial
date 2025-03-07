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
