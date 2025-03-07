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

import Banner from '../../../img/banners/servicos/programacao/banner_design.avif';

import SocialMedia from '../../../img/icones/produtos/design/design_social_media.svg';
import EstrategiaMarca from '../../../img/icones/produtos/design/estrategia_de_marca.svg';
import IdentidadeVisual from '../../../img/icones/produtos/design/identidade_visual.svg';
import CriacaoLogo from '../../../img/icones/produtos/design/criacao_logotipo.svg';

import Adatha from '../../../img/projetos/design/adtha.avif';
import BerryCloset from '../../../img/projetos/design/berry_closet.avif';
import CheetahBar from '../../../img/projetos/design/CheetahBar.avif';
import Club from '../../../img/projetos/design/club.avif';
import LowFlight from '../../../img/projetos/design/low_flight.avif';
import NahoraApp from '../../../img/projetos/design/nahora_app.avif';

export default function Design(){

  const caracProjetos = [
    {
    titulo: 'Criação de logotipo',
    texto: 'Desenvolvemos sites sob medida, com design moderno e totalmente responsivos, para garantir uma excelente experiência de navegação em todos os dispositivos. Cada site é criado para refletir a identidade única da sua marca e otimizar sua presença online.',
    icone: CriacaoLogo
    },

    {
    titulo: 'Criação de identidade visual',
    texto: 'Criamos landing pages otimizadas para gerar mais leads e conversões. Nossos projetos são focados em design atrativo, conteúdo persuasivo e call to actions estratégicos, tudo com o objetivo de aumentar sua taxa de conversão.',
    icone: IdentidadeVisual
    },

    {
    titulo: 'Estratégia de marca',
    texto: 'Criamos soluções personalizadas em modelo SaaS (Software as a Service), que oferecem flexibilidade, escalabilidade e alto desempenho. Nossos sistemas são projetados para atender às necessidades específicas do seu negócio, com total segurança e agilidade.',
    icone: EstrategiaMarca
    },

    {
    titulo: 'Design para social media',
    texto: 'Desenvolvemos lojas virtuais integradas, com design responsivo e funcionalidades que oferecem uma experiência de compra fluida e segura. Nossos e-commerces são otimizados para aumentar as vendas e atrair mais clientes.',
    icone: SocialMedia
    }

  ]

  const etapasDesenvolvimento = [

    {
      numEtapa: 1,
      titulo: 'Formulário',
      texto: 'Perguntas ao cliente para entender objetivos e criar a proposta ideal.'
    },
    {
      numEtapa: 2,
      titulo: 'Pesquisa',
      texto: 'Pesquiso o mercado da marca, sua história e informações relevantes.'
    },
    {
      numEtapa: 3,
      titulo: 'Composição',
      texto: 'Com o conceito definido, inicio o estudo de cores, fontes e elementos visuais.'
    },
    {
      numEtapa: 4,
      titulo: 'Aplicabilidade',
      texto: 'Realizo simulações em produtos como cartões e acessórios para mostrar a marca no mercado.'
    },
    {
      numEtapa: 5,
      titulo: 'Apresentação',
      texto: 'Elaboro uma apresentação detalhando todo o processo do projeto para o cliente.'
    },
    {
      numEtapa: 6,
      titulo: 'Entrega',
      texto: 'Após a aprovação, entrego os materiais em PDF, PNG e EPS, prontos para uso.'
    }

  ]

  const perguntarFrequentes = [

    {
      numPergunta: 1,
      pergunta: 'O que é identidade visual?',
      resposta: 'Identidade visual é como a "cara" de uma marca. É um conjunto de elementos como cores, logotipo, fontes e desenhos que ajudam as pessoas a reconhecerem e lembrarem de uma empresa. É como um uniforme: deixa tudo mais bonito, organizado e fácil de identificar em qualquer lugar.'
    },
    {
      numPergunta: 2,
      pergunta: 'Por que é importante ter um logotipo?',
      resposta: 'O logotipo é como a assinatura da sua empresa. Ele ajuda as pessoas a reconhecerem sua marca, mostrando que você é profissional e confiável. Sem ele, fica mais difícil se destacar no mercado ou ser lembrado pelos clientes. Um bom logotipo faz sua empresa parecer única e especial.'
    },
    {
      numPergunta: 3,
      pergunta: 'O que está incluso em um projeto de identidade visual?',
      resposta: 'No projeto, criamos o logotipo, definimos as cores, escolhemos as letras e outros elementos visuais. Também simulamos como sua marca pode aparecer em produtos como cartões, roupas ou embalagens. Tudo isso ajuda a sua empresa a ter um visual forte e marcante no mercado.'
    },
    {
      numPergunta: 4,
      pergunta: 'Como é feito o design para redes sociais?',
      resposta: 'O design para redes sociais envolve criar imagens bonitas, com cores e estilos que combinam com a sua marca. Essas imagens são pensadas para chamar atenção e transmitir sua mensagem de forma clara. Assim, você consegue atrair mais clientes e deixar seu perfil com uma aparência profissional.'
    },
    {
      numPergunta: 5,
      pergunta: 'Vocês entregam os arquivos para o cliente usar?',
      resposta: 'Sim, entregamos tudo organizado e em formatos fáceis, como PDF, PNG e EPS. Esses arquivos são de alta qualidade e podem ser usados em qualquer material, como banners, sites ou impressões. Assim, você terá tudo pronto sempre que precisar, sem complicação.'
    },

  ]

  const imagensProjetos = [

    {
      imagem: Adatha,
      altImagem: 'Adatha'
    },
    {
      imagem: CheetahBar,
      altImagem: 'Cheetah Bar'
    },
    {
      imagem: LowFlight,
      altImagem: 'Low - Flight'
    },
    {
      imagem: NahoraApp,
      altImagem: 'Nahora App'
    },
    {
      imagem: Club,
      altImagem: 'Club'
    },
    {
      imagem: BerryCloset,
      altImagem: 'Berry Closet'
    }

  ]

  return(

    <Suspense fallback={<PreLoader />}>

      <Navbar />

      <InicioServicos banner={Banner} subTitulo="Identidade Visual, Logotipos e Estratégia de Marca - Agência de Design em SP" titulo="Marcas estratégicas que conectam histórias e geram resultados!" texto="Desenvolvemos logotipos e identidades visuais que comunicam a essência do seu negócio. Com um design estratégico e marcante, ajudamos sua marca a se destacar e atrair o público certo. Sua imagem, repensada para conquistar." />

      <TextoSessao titulo="Design" texto="Criamos logotipos e materiais visuais que comunicam sua mensagem de forma clara e atrativa. Nossa missão é transformar sua marca em um diferencial competitivo no mercado." />

      <Caracteristicas projetos={caracProjetos} subTitulo='Agência de Design e Criativos em SP' produto='Design' />

      <CtaOrcamento titulo="Crie Sua Identidade Visual" msgWhatsapp="Gostaria de um orçamento para uma Logo ou Identidade visual" />

      <EtapasDesenvolvimento etapas={etapasDesenvolvimento} />

      <PerguntasFrequentes perguntas={perguntarFrequentes} />

      <Projetos imagens={imagensProjetos} />

      <Footer />

    </Suspense>

  )

}
