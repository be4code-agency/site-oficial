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
    titulo: 'Criação de Sites Personalizados',
    texto: 'Desenvolvemos sites sob medida, com design moderno e totalmente responsivos, para garantir uma excelente experiência de navegação em todos os dispositivos. Cada site é criado para refletir a identidade única da sua marca e otimizar sua presença online.',
    icone: SitePersonalizados
    },

    {
    titulo: 'Landing Pages de Alta Conversão',
    texto: 'Criamos landing pages otimizadas para gerar mais leads e conversões. Nossos projetos são focados em design atrativo, conteúdo persuasivo e call to actions estratégicos, tudo com o objetivo de aumentar sua taxa de conversão.',
    icone: LandingPages
    },

    {
    titulo: 'Desenvolvimento de Sistemas',
    texto: 'Criamos soluções personalizadas em modelo SaaS (Software as a Service), que oferecem flexibilidade, escalabilidade e alto desempenho. Nossos sistemas são projetados para atender às necessidades específicas do seu negócio, com total segurança e agilidade.',
    icone: DevSistemas
    },

    {
    titulo: 'Criação de E-Commerce',
    texto: 'Desenvolvemos lojas virtuais integradas, com design responsivo e funcionalidades que oferecem uma experiência de compra fluida e segura. Nossos e-commerces são otimizados para aumentar as vendas e atrair mais clientes.',
    icone: Ecommerce
    },

    {
    titulo: 'Otimização para o Google (SEO)',
    texto: 'Aplicamos técnicas avançadas de SEO para garantir que seu site tenha um bom posicionamento no Google. Com estratégias focadas em palavras-chave, conteúdos relevantes e otimização técnica, ajudamos sua empresa a ser encontrada com mais facilidade pelos clientes.',
    icone: SeoIcon
    },

    {
    titulo: 'Ferramentas de Vendas Integradas',
    texto: 'Integrando as melhores ferramentas de vendas, facilitamos o gerenciamento de processos e a automação de suas estratégias comerciais. Nossos sistemas otimizam a experiência do cliente, desde o primeiro contato até a conversão final.',
    icone: VendasIntegradas
    },

    {
    titulo: 'Suporte Contínuo da Equipe',
    texto: 'Oferecemos suporte contínuo e especializado para garantir que sua plataforma esteja sempre funcionando de forma eficiente. Nossa equipe está disponível para resolver qualquer problema, garantindo o sucesso a longo prazo do seu projeto.',
    icone: SuporteContinuo
    },

    {
    titulo: 'Integração de Ferramentas e Sistemas',
    texto: 'Facilitamos a integração entre diversas ferramentas e sistemas para otimizar processos e melhorar a comunicação entre suas plataformas. Com integração eficiente, garantimos que todos os dados fluam de maneira contínua e sem falhas.',
    icone: IntegracaoFerramenta
    },

    {
    titulo: 'Gerenciamento Facilitado',
    texto: 'Nossos sistemas e plataformas oferecem interfaces simples e intuitivas para um gerenciamento facilitado. Você pode controlar, monitorar e ajustar suas operações com facilidade, sem a necessidade de habilidades técnicas avançadas.',
    icone: GerenciamentoFacilitado
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

      <InicioServicos banner={Banner} subTitulo="Criação de Sites, Sistemas Web e Aplicativos - Agência Web em SP" titulo="Tecnologia que Conecta Sua Empresa ao Sucesso" texto="Oferecemos desenvolvimento de sites responsivos, sistemas web personalizados e aplicativos para Android e iOS. Nossas soluções são focadas em design intuitivo, alta performance e integração eficiente, ajudando sua empresa a se destacar no mercado digital. Conte com nossa expertise para criar ferramentas que impulsionam resultados." />

      <TextoSessao titulo="Tech" texto="Criamos sites com design moderno, intuitivo e alinhado às necessidades do seu negócio. Nosso objetivo é desenvolver plataformas que conectem empresas a seus clientes de forma eficiente e funcional." />

      <Caracteristicas projetos={caracProjetos} subTitulo='Agência de Criação de Sites em SP' produto='Tech' />

      <CtaOrcamento titulo="Crie um Site Profissional" msgWhatsapp="Gostaria de um orçamento de criação de site ou sistema" />

      <EtapasDesenvolvimento etapas={etapasDesenvolvimento} />

      <PerguntasFrequentes perguntas={perguntarFrequentes} />

      <Projetos imagens={imagensProjetos} />

      <Footer />

    </Suspense>

  )

}
