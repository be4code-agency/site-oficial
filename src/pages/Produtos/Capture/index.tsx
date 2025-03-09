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

import Banner from '../../../img/banners/servicos/programacao/banner_capture.jpg';

import FotografiaProfissional from '../../../img/icones/produtos/capture/fotografia_profissional.svg';
import GravacaoVideos from '../../../img/icones/produtos/engajamento/captacao_edicao.svg';
import FilmagemDrone from '../../../img/icones/produtos/capture/drone.svg';
import EdicaoImagemVideo from '../../../img/icones/produtos/capture/edicao_imagem_video.svg';
import ConteudoPersonalizado from '../../../img/icones/produtos/capture/conteudo_personalizado.svg';
import EntregaRapida from '../../../img/icones/produtos/capture/entrega.svg';

import AmazoniaViva from '../../../img/projetos/capture/DJI_0225.jpg';
import Galfort from '../../../img/projetos/capture/DJI_0287.jpg';
import kardbank from '../../../img/projetos/capture/DJI_0303.jpg';
import BarbeariaGringa from '../../../img/projetos/capture/DJI_0465.jpg';
import SavegnagoBarber from '../../../img/projetos/capture/DJI_0499.jpg';
import Eldorado from '../../../img/projetos/capture/DJI_0500.jpg';

export default function Capture(){

  const caracProjetos = [
    {
    titulo: 'Fotografia Profissional',
    texto: 'Capturamos imagens de alta qualidade, que destacam sua marca e seus produtos de maneira única e impactante.',
    icone: FotografiaProfissional
    },

    {
    titulo: 'Gravação de Vídeos',
    texto: 'Produzimos vídeos criativos, com imagens nítidas e um conteúdo envolvente, perfeito para qualquer plataforma de mídia.',
    icone: GravacaoVideos
    },

    {
    titulo: 'Filmagens com Drone',
    texto: 'Utilizamos drones para capturar imagens aéreas impressionantes, oferecendo uma nova perspectiva e visual diferenciado.',
    icone: FilmagemDrone
    },

    {
    titulo: 'Edição de Imagens e Vídeos',
    texto: 'Nosso time de editores transforma o material bruto em conteúdos prontos para impressionar, com qualidade profissional.',
    icone: EdicaoImagemVideo
    },

    {
    titulo: 'Conteúdo Personalizado',
    texto: 'Criamos conteúdo visual que se alinha com a identidade da sua marca, garantindo que cada imagem e vídeo conte sua história de forma única.',
    icone: ConteudoPersonalizado
    },

    {
    titulo: 'Entrega Rápida e Organizada',
    texto: 'Após a gravação e edição, entregamos o material em diferentes formatos, prontos para uso imediato em campanhas e mídias sociais.',
    icone: EntregaRapida
    }

  ]

  const etapasDesenvolvimento = [

    {
      numEtapa: 1,
      titulo: 'Briefing',
      texto: 'Entendemos suas necessidades e objetivos para definir o estilo ideal de fotos e vídeos.'
    },
    {
      numEtapa: 2,
      titulo: 'Planejamento',
      texto: 'Escolhemos os melhores locais, equipamentos e horários para capturar imagens incríveis.'
    },
    {
      numEtapa: 3,
      titulo: 'Captação',
      texto: 'Realizamos as filmagens e fotos, utilizando drones e câmeras profissionais para registrar cada detalhe.'
    },
    {
      numEtapa: 4,
      titulo: 'Edição',
      texto: 'Transformamos os materiais brutos em conteúdos visuais atraentes com ajustes de cor, cortes e efeitos.'
    },
    {
      numEtapa: 5,
      titulo: 'Revisão',
      texto: 'Apresentamos os resultados para garantir que tudo esteja alinhado às expectativas do cliente.'
    },
    {
      numEtapa: 6,
      titulo: 'Entrega',
      texto: 'Fornecemos as imagens e vídeos finalizados em alta qualidade, prontos para serem utilizados.'
    }

  ]

  const perguntarFrequentes = [

    {
      numPergunta: 1,
      pergunta: 'O que é o produto Capture?',
      resposta: 'É um serviço que faz fotos e vídeos incríveis, usando câmeras e drones, para mostrar o melhor da sua empresa ou evento. Tudo é capturado e editado com cuidado para ficar perfeito.'
    },
    {
      numPergunta: 2,
      pergunta: 'Para que tipo de negócio o Capture é indicado?',
      resposta: 'Serve para qualquer negócio que precise de imagens profissionais, como lojas, eventos, restaurantes ou empreendimentos imobiliários.'
    },
    {
      numPergunta: 3,
      pergunta: 'Vocês fazem fotos aéreas com drone?',
      resposta: 'Sim! Usamos drones para capturar imagens do alto, mostrando ângulos únicos que deixam seu projeto ainda mais especial.'
    },
    {
      numPergunta: 4,
      pergunta: 'Como funciona o processo de edição?',
      resposta: 'Após as fotos e vídeos, ajustamos cores, aplicamos efeitos e montamos o material para que fique bonito e profissional, pronto para uso.'
    },
    {
      numPergunta: 5,
      pergunta: 'Quanto tempo demora para entregar os materiais?',
      resposta: 'O prazo depende do projeto, mas geralmente entregamos tudo pronto em até 7 dias após a captação e edição.'
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

      <InicioServicos banner={Banner} subTitulo="Fotografia e Gravação Profissional - Agência de Mídia" titulo="Imagens que Contam Sua História de Forma Inesquecível" texto="Realizamos fotos e vídeos de alta qualidade, com técnicas inovadoras e filmagens aéreas com drones. Nosso foco é criar conteúdo visual impactante e envolvente, que transmite a mensagem da sua marca com clareza. Deixe-nos contar sua história com imagens incríveis que farão sua empresa se destacar." />

      <TextoSessao titulo="Capture" texto="Criamos fotos e vídeos profissionais que capturam a essência da sua marca. Com o uso de drones e técnicas avançadas de gravação, proporcionamos conteúdos visuais únicos, que conectam sua empresa ao público de forma marcante e eficaz, destacando o que há de melhor em seu negócio." />

      <Caracteristicas projetos={caracProjetos} subTitulo='Agência de Mídias' produto='Capture' />

      <CtaOrcamento titulo="Capture os Melhores Momentos" msgWhatsapp="Gostaria de um orçamento de filmagem e fotografia." />

      <EtapasDesenvolvimento etapas={etapasDesenvolvimento} />

      <PerguntasFrequentes perguntas={perguntarFrequentes} />

      <Projetos imagens={imagensProjetos} />

      <Footer />

    </Suspense>

  )

}
