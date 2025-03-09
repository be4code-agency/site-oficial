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

import Banner from '../../../img/banners/servicos/programacao/banner_engajamento.avif';

import CalendarioPostagem from '../../../img/icones/produtos/engajamento/calendario_postagem.svg';
import ArtesExclusivas from '../../../img/icones/produtos/engajamento/criacao_artes_exclusivas.svg';
import CaptacaoEdicao from '../../../img/icones/produtos/engajamento/captacao_edicao.svg';
import Metricas from '../../../img/icones/produtos/marketing/relatorios_detalhados.svg';
import GestaoRedesSociais from '../../../img/icones/produtos/engajamento/gestao_rede_sociais.svg';
import PublicoAlvo from '../../../img/icones/produtos/marketing/segmentacao_precisa.svg';

export default function Engajamento(){

  const caracProjetos = [
    {
    titulo: 'Calendário Estratégico de Postagens',
    texto: 'Planejamos conteúdos com base em datas importantes e tendências do mercado.',
    icone: CalendarioPostagem
    },

    {
    titulo: 'Criação de Artes Exclusivas',
    texto: 'Produzimos designs únicos e atraentes para chamar atenção do público.',
    icone: ArtesExclusivas
    },

    {
    titulo: 'Captação e Edição de Conteúdos',
    texto: 'Realizamos fotos e vídeos profissionais, com edição que destaca sua marca.',
    icone: CaptacaoEdicao
    },

    {
    titulo: 'Acompanhamento de Métricas',
    texto: 'Monitoramos o desempenho para ajustar estratégias e maximizar resultados.',
    icone: Metricas
    },

    {
    titulo: 'Gestão Completa de Redes Sociais',
    texto: 'Cuidamos de toda a interação, agendamento e crescimento dos seus perfis.',
    icone: GestaoRedesSociais
    },

    {
    titulo: 'Engajamento Focado no Público-Alvo',
    texto: 'Criamos estratégias para atrair e manter a atenção do público certo para sua marca.',
    icone: PublicoAlvo
    },

  ]

  const etapasDesenvolvimento = [

    {
      numEtapa: 1,
      titulo: 'Planejamento',
      texto: 'Entendemos os objetivos da sua marca e definimos uma estratégia para alcançar o público certo com as postagens.'
    },
    {
      numEtapa: 2,
      titulo: 'Análise de Público',
      texto: 'Pesquisamos o comportamento e preferências do seu público, ajustando o conteúdo para gerar mais engajamento.'
    },
    {
      numEtapa: 3,
      titulo: 'Criação de Conteúdo',
      texto: 'Desenvolvemos postagens criativas e visuais atraentes para representar sua marca de forma única.'
    },
    {
      numEtapa: 4,
      titulo: 'Calendário de Postagens',
      texto: 'Organizamos um cronograma para garantir uma presença consistente e otimizada nas redes sociais.'
    },
    {
      numEtapa: 5,
      titulo: 'Captação e Edição de Conteúdo',
      texto: 'Captamos e editamos fotos e vídeos profissionais para garantir qualidade e relevância em cada postagem.'
    },
    {
      numEtapa: 6,
      titulo: 'Gestão de Métricas e Ajustes',
      texto: 'Monitoramos as métricas, ajustamos as postagens e garantimos que a estratégia esteja sempre no caminho certo para alcançar os melhores resultados.'
    }

  ]

  const perguntarFrequentes = [

    {
      numPergunta: 1,
      pergunta: 'O que é o serviço de Social Media?',
      resposta: 'O serviço de Social Media ajuda a sua empresa a aparecer nas redes sociais, com postagens, imagens e vídeos que atraem a atenção do seu público. Nós cuidamos de tudo para sua marca se destacar e ter mais seguidores e clientes.'
    },
    {
      numPergunta: 2,
      pergunta: 'Como funciona o calendário de postagens?',
      resposta: 'Criamos um cronograma de quando e o que publicar nas redes sociais, para garantir que sua marca tenha uma presença constante e que seus seguidores sempre vejam novidades. Isso ajuda a manter o interesse e aumentar o engajamento.'
    },
    {
      numPergunta: 3,
      pergunta: 'O que é a captação de conteúdo?',
      resposta: 'A captação de conteúdo é quando tiramos fotos e gravamos vídeos para as postagens da sua empresa. Nós garantimos que o conteúdo seja de boa qualidade e mostre sua marca de uma forma atraente e interessante para seu público.'
    },
    {
      numPergunta: 4,
      pergunta: 'Como vocês medem o sucesso das postagens?',
      resposta: 'Acompanhamos as métricas das postagens, como curtidas, comentários e compartilhamentos, para saber o que está funcionando. Se algo não estiver indo bem, ajustamos as postagens para alcançar melhores resultados e mais engajamento.'
    },
    {
      numPergunta: 5,
      pergunta: 'O que é a gestão de redes sociais?',
      resposta: 'Gestão de redes sociais significa que cuidamos de todas as suas redes, fazendo postagens, respondendo comentários e interagindo com o público. Nosso objetivo é aumentar a visibilidade e engajamento da sua marca, criando uma comunidade de seguidores fiéis.'
    },

  ]

  return(

    <Suspense fallback={<PreLoader />}>

      <Navbar />

      <InicioServicos banner={Banner} subTitulo="Gestão de Redes Sociais - Agência de Social Media" titulo="Construa Relacionamentos Valiosos com Seu Público!" texto="Oferecemos gestão completa de redes sociais, com calendário de postagens, design criativo, captação e edição de conteúdos. Acompanhamos métricas para otimizar sua presença online e criar conexões reais com seu público. Conte com nossa expertise para destacar sua marca nas redes!" />

      <TextoSessao titulo="Engajamento" texto="Criamos estratégias de Social Media para conectar sua marca ao público certo. Com conteúdos criativos, gestão eficiente e foco em engajamento, transformamos suas redes sociais em ferramentas poderosas para fortalecer sua marca, aumentar a interação e alcançar resultados reais." />

      <Caracteristicas projetos={caracProjetos} subTitulo='Agência de Social Media' produto='Engajamento' />

      <CtaOrcamento titulo="Domine as Redes Sociais" msgWhatsapp="Gostaria de um orçamento para o Gerenciamento das minhas redes sociais" />

      <EtapasDesenvolvimento etapas={etapasDesenvolvimento} />

      <PerguntasFrequentes perguntas={perguntarFrequentes} />

      <Footer />

    </Suspense>

  )

}
