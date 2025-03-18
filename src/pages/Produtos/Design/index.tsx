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
import MateriaisGraficos from '../../../img/icones/produtos/design/materiais_graficos.svg';
import ComunicacaoVisual from '../../../img/icones/produtos/design/comunicacao_visual.svg';

import Adatha from '../../../img/projetos/design/adtha.avif';
import BerryCloset from '../../../img/projetos/design/berry_closet.avif';
import CheetahBar from '../../../img/projetos/design/CheetahBar.avif';
import Club from '../../../img/projetos/design/club.avif';
import LowFlight from '../../../img/projetos/design/low_flight.avif';
import NahoraApp from '../../../img/projetos/design/nahora_app.avif';
import { Helmet } from 'react-helmet';

export default function Design(){

  const caracProjetos = [
    {
    titulo: 'Criação de logotipo',
    texto: 'Criamos logotipos exclusivos que representam sua empresa com estilo e profissionalismo. Sua marca ganha identidade forte e memorável.',
    icone: CriacaoLogo
    },

    {
    titulo: 'Identidade visual',
    texto: 'Construímos uma identidade visual completa, com cores, fontes e elementos que transmitem a essência da sua marca e conquistam seu público.',
    icone: IdentidadeVisual
    },

    {
    titulo: 'Estratégia de marca',
    texto: 'Definimos a melhor estratégia visual para sua empresa se posicionar no mercado, garantindo reconhecimento e conexão com seus clientes.',
    icone: EstrategiaMarca
    },

    {
    titulo: 'Artes para Rede Social',
    texto: 'Criamos artes para posts e stories, tornando sua marca mais atrativa e engajadora no Instagram, Facebook e outras redes sociais.',
    icone: SocialMedia
    },

    {
    titulo: 'Materiais Gráficos',
    texto: 'Desenvolvemos materiais gráficos como cartões, banners e apresentações para reforçar sua marca e causar uma ótima impressão.',
    icone: MateriaisGraficos
    },

    {
    titulo: 'Comunicação Visual',
    texto: 'Um bom design faz toda a diferença. Criamos um visual exclusivo para sua empresa ser reconhecida e lembrada pelo público.',
    icone: ComunicacaoVisual
    },

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

      <Helmet>
        <title>Be4Code | Design</title>
        <meta name="description" content="Transforme a imagem da sua marca com designs exclusivos, criação de logotipos e identidade visual personalizada. Ajudamos sua empresa a se destacar e conquistar o público certo." />

        <meta property="og:title" content="Be4Code | Design" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://be4code.com.br/produtos/design" />
        <meta property="og:image" content="https://be4code.com.br/static/media/gabriel.f7a5d0bf107b18a83380.webp" />
        <meta property="og:image:url" content="https://be4code.com.br/static/media/gabriel.f7a5d0bf107b18a83380.webp" />
        <meta property="og:description" content="Transforme a imagem da sua marca com designs exclusivos, criação de logotipos e identidade visual personalizada. Ajudamos sua empresa a se destacar e conquistar o público certo." />
        <meta property="og:site_name" content="Be4Code | Design" />

        <meta name="twitter:title" content="Be4Code | Design" />
        <meta name="twitter:description" content="Transforme a imagem da sua marca com designs exclusivos, criação de logotipos e identidade visual personalizada. Ajudamos sua empresa a se destacar e conquistar o público certo." />
        <meta name="twitter:card" content="website" />
        <meta name="twitter:image" content="https://be4code.com.br/static/media/gabriel.f7a5d0bf107b18a83380.webp" />
        <meta name="twitter:site" content="https://be4code.com.br/produtos/design" />

        <link rel="alternate" href="https://be4code.com.br/produtos/design" hrefLang="pt-br" />
        <link rel="canonical" href="https://be4code.com.br/produtos/design" />

        <meta name="keywords" content="Desenvolvimento Web, Desenvolvimento de Sites, Criação de Sites, Criação de Sites Profissionais, Criação de Landing Pages, Criação de Sites E-Commerce, Criação de Sites Institucionais, Criação de Sites de Venda, Criação de Sites de Venda Online, Criação de Sites de Venda Presencial, Criação de Sites de Venda Digital, Criação de Sites de Venda Online, Criação de Sites de Venda Presencial, Criação de Sites de Venda Digital" />

        <meta name="author" content="Be4Code" />

        <meta name="robots" content="noindex, nofollow" />

        <meta name="language" content="Portuguese" />

        <meta name="revisit-after" content="7 days" />

      </Helmet>

      <Navbar />

      <InicioServicos banner={Banner} subTitulo="Identidade Visual, Logotipos e Estratégia de Marca - Agência de Design" titulo="Marcas estratégicas que conectam histórias e geram resultados!" texto="Desenvolvemos logotipos e identidades visuais que comunicam a essência do seu negócio. Com um design estratégico e marcante, ajudamos sua marca a se destacar e atrair o público certo. Sua imagem, repensada para conquistar." />

      <TextoSessao titulo="Design" texto="Criamos logotipos e materiais visuais que comunicam sua mensagem de forma clara e atrativa. Nossa missão é transformar sua marca em um diferencial competitivo no mercado." />

      <Caracteristicas projetos={caracProjetos} subTitulo='Agência de Design e Criativos' produto='Design' />

      <CtaOrcamento titulo="Crie Sua Identidade Visual" msgWhatsapp="Gostaria de um orçamento para uma Logo ou Identidade visual" />

      <EtapasDesenvolvimento etapas={etapasDesenvolvimento} />

      <PerguntasFrequentes perguntas={perguntarFrequentes} />

      <Projetos imagens={imagensProjetos} />

      <Footer />

    </Suspense>

  )

}
