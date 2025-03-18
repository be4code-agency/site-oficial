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
const Projetos = React.lazy(() => import("../components/Projetos"));

import Banner from '../../../img/banners/servicos/programacao/banner_tech.avif';

import SitePersonalizados from '../../../img/icones/produtos/tech/criacao_site.svg';
import LandingPages from '../../../img/icones/produtos/tech/landing_page.svg';
import DevSistemas from '../../../img/icones/produtos/tech/desenvolvimento_sistemas.svg';
import Ecommerce from '../../../img/icones/produtos/tech/ecommerce.svg';
import SeoIcon from '../../../img/icones/seo.png';
import VendasIntegradas from '../../../img/icones/produtos/tech/vendas_integradas.svg';
import SuporteContinuo from '../../../img/icones/produtos/tech/suporte_continuo.svg';
import IntegracaoFerramenta from '../../../img/icones/produtos/tech/integracao_ferramentas.svg';
import GerenciamentoFacilitado from '../../../img/icones/produtos/tech/gerenciamento.svg';

import AmazoniaViva from '../../../img/projetos/tech/amazonia_viva.avif';
import Galfort from '../../../img/projetos/tech/galfort.avif';
import kardbank from '../../../img/projetos/tech/kardbank.avif';
import BarbeariaGringa from '../../../img/projetos/tech/barbearia_gringa.avif';
import SavegnagoBarber from '../../../img/projetos/tech/savegnago_barber.avif';
import Eldorado from '../../../img/projetos/tech/eldorado.avif';

export default function Tech(){

  const caracProjetos = [
    {
    titulo: 'Sites Profissionais',
    texto: 'Criamos sites modernos, rápidos e fáceis de usar. Seu negócio terá uma presença online forte, com um design que atrai clientes e gera resultados.',
    icone: SitePersonalizados
    },

    {
    titulo: 'Landing Pages',
    texto: 'Criamos landing pages rápidas e estratégicas para atrair clientes e aumentar suas vendas. Com design atrativo e otimizado, garantimos mais resultados para seu negócio.',
    icone: LandingPages
    },

    {
    titulo: 'Desenvolvimento de Sistemas',
    texto: 'Desenvolvemos sistemas personalizados para facilitar sua rotina e melhorar seus processos. Soluções rápidas, seguras e feitas para você.',
    icone: DevSistemas
    },

    {
    titulo: ' E-commerce',
    texto: 'Desenvolvemos lojas virtuais otimizadas para conversões. Seu e-commerce será rápido, seguro e fácil de gerenciar, garantindo mais vendas online.',
    icone: Ecommerce
    },

    {
    titulo: 'Otimização para o Google (SEO)',
    texto: 'Apareça no Google e atraia mais visitantes! Otimizamos seu site para os mecanismos de busca, melhorando seu posicionamento e aumentando seus acessos.',
    icone: SeoIcon
    },

    {
    titulo: 'Suporte e Atualizações',
    texto: 'Garantimos que seu site ou sistema esteja sempre atualizado e funcionando sem problemas. Conte com nosso suporte para segurança e melhorias constantes.',
    icone: SuporteContinuo
    },

  ]

  const etapasDesenvolvimento = [

    {
      numEtapa: 1,
      titulo: 'Planejamento',
      texto: 'Vamos pensar juntos na melhor ideia para o seu projeto crescer.'
    },
    {
      numEtapa: 2,
      titulo: 'Análise de Requisitos',
      texto: 'Descobrimos tudo o que você precisa para o projeto funcionar.'
    },
    {
      numEtapa: 3,
      titulo: 'UX/UI',
      texto: 'Fazemos um visual bonito e fácil de usar para deixar tudo incrível.'
    },
    {
      numEtapa: 4,
      titulo: 'Desenvolvimento',
      texto: 'Colocamos a mão na massa para transformar o plano em realidade.'
    },
    {
      numEtapa: 5,
      titulo: 'Aprovação e Publicação',
      texto: 'Conferimos tudo e colocamos seu projeto no ar com sucesso.'
    }

  ]

  const perguntarFrequentes = [

    {
      numPergunta: 1,
      pergunta: 'Preciso de um site ou de um sistema para minha empresa?',
      resposta: 'Se você quer um lugar para mostrar sua empresa, contar sua história e atrair clientes, o site é a escolha certa. Agora, se precisa de algo mais, como organizar tarefas, gerenciar vendas ou automatizar processos, o sistema é ideal. Não se preocupe, vamos entender juntos o que você precisa e criar a solução perfeita para o seu negócio!'
    },
    {
      numPergunta: 2,
      pergunta: 'O que é uma landing page e para que serve?',
      resposta: 'Uma landing page é uma página feita para um único objetivo, como vender um produto ou atrair pessoas interessadas no seu serviço. É como um convite especial, bem simples e direto, para que o visitante tome uma ação, como preencher um formulário ou fazer uma compra. Ela é ótima para resultados rápidos e eficientes.'
    },
    {
      numPergunta: 3,
      pergunta: 'Meu site vai aparecer no Google?',
      resposta: 'Sim, trabalhamos para que seu site esteja preparado para aparecer no Google! Fazemos com que ele seja rápido, bonito e fácil de encontrar, ajudando as pessoas a acharem você com mais facilidade. Além disso, usamos técnicas de SEO que aumentam suas chances de ficar nos primeiros lugares, mas vale lembrar que bons resultados também dependem de tempo e dedicação.'
    },
    {
      numPergunta: 4,
      pergunta: 'Como funciona o suporte técnico após o projeto ser entregue?',
      resposta: 'Depois que entregamos seu site ou sistema, não te deixamos sozinho! Oferecemos suporte contínuo para ajudar em qualquer dúvida, corrigir problemas e até fazer atualizações. Estamos aqui para garantir que tudo continue funcionando direitinho, e você pode contar conosco sempre que precisar de uma mãozinha.'
    },
    {
      numPergunta: 5,
      pergunta: 'É possível integrar meu site com redes sociais ou ferramentas de marketing?',
      resposta: 'Sim, e isso faz uma grande diferença! Podemos conectar seu site às redes sociais, sistemas de e-mail e até plataformas de vendas. Isso ajuda a automatizar tarefas e deixar sua comunicação com os clientes ainda mais prática. É como ter tudo funcionando junto para facilitar sua vida e deixar seu negócio mais profissional!'
    },

  ]

  const imagensProjetos = [

    {
      imagem: AmazoniaViva,
      altImagem: 'Projeto Amazonia Viva Games'
    },
    {
      imagem: Galfort,
      altImagem: 'Projeto Galfort - Estruturas Metálicas'
    },
    {
      imagem: BarbeariaGringa,
      altImagem: 'Projeto Barbearia'
    },
    {
      imagem: SavegnagoBarber,
      altImagem: 'Projeto Savegnago Barber'
    },
    {
      imagem: Eldorado,
      altImagem: 'Projeto Eldorado - Pintura Predial'
    },
    {
      imagem: kardbank,
      altImagem: 'Projeto Kard Bank + AMP Barros'
    }

  ]

  return(

    <Suspense fallback={<PreLoader />}>

      <Navbar />

      <InicioServicos banner={Banner} subTitulo="Criação de Sites, Sistemas Web e Aplicativos - Agência Web" titulo="Tecnologia que Conecta Sua Empresa ao Sucesso" texto="Oferecemos desenvolvimento de sites responsivos, sistemas web personalizados e aplicativos para Android e iOS. Nossas soluções são focadas em design intuitivo, alta performance e integração eficiente, ajudando sua empresa a se destacar no mercado digital. Conte com nossa expertise para criar ferramentas que impulsionam resultados." />

      <TextoSessao titulo="Tech" texto="Criamos sites com design moderno, intuitivo e alinhado às necessidades do seu negócio. Nosso objetivo é desenvolver plataformas que conectem empresas a seus clientes de forma eficiente e funcional." />

      <Caracteristicas projetos={caracProjetos} subTitulo='Agência de Criação de Sites' produto='Tech' />

      <CtaOrcamento titulo="Crie um Site Profissional" msgWhatsapp="Gostaria de um orçamento de criação de site ou sistema" />

      <EtapasDesenvolvimento etapas={etapasDesenvolvimento} />

      <PerguntasFrequentes perguntas={perguntarFrequentes} />

      <Projetos imagens={imagensProjetos} />

      <Footer />

    </Suspense>

  )

}
