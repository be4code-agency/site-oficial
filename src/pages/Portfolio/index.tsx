import React, { Suspense } from "react";
import { Helmet } from "react-helmet";

const Navbar = React.lazy(()=> import("../../components/Navbar"));
const Footer = React.lazy(()=> import("../../components/Footer"));
const InicioServicos = React.lazy(()=> import("../Produtos/components/inicio"));
const Projeto = React.lazy(()=> import("./Projeto"));

import { PreLoader } from "../../components/PreLoader";


import BannerPortfolio from '../../img/banners/portfolio/banner_portfolio.webp';

import McpGalfort from "../../img/projetos/galfor.webp";
import McpSemetangua from "../../img/projetos/semetangua.webp";
import McpSavegnagoBarber from "../../img/projetos/savegnago_barber.webp";
import McpPerezBarros from "../../img/projetos/perez_barros.webp";
import McpAmpBarros from "../../img/projetos/amp_barros.webp";
import McpEldorado from "../../img/projetos/eldorado.webp";
import McpAmazoniaViva from "../../img/projetos/amazonia_viva.webp";
import McpArcondicionado from "../../img/projetos/arcondicionado.webp";
import McpFroiddsgn from "../../img/projetos/froid_dsgn.webp";
import McpKardbank from "../../img/projetos/kardbank.webp";
import McpDogvibe from "../../img/projetos/dogvibe.webp";

export default function Portfolio(){

  return(

    <Suspense fallback={<PreLoader />}>

      <Helmet>
        <title>Be4Code - Portfólio</title>
        <meta name="description" content="Prepare-se para o sucesso com a Be4Code! Nossa página de briefing contém perguntas essenciais para entender suas necessidades e desenvolver projetos personalizados de desenvolvimento web, criação de sites, SEO e E-Commerce. Inicie seu projeto conosco!" />

        <meta property="og:title" content="Be4Code - Portfólio" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://be4code.com.br/portfolio" />
        <meta property="og:image" content="https://be4code.com.br/static/media/gabriel.f7a5d0bf107b18a83380.webp" />
        <meta property="og:image:url" content="https://be4code.com.br/static/media/gabriel.f7a5d0bf107b18a83380.webp" />
        <meta property="og:description" content="Prepare-se para o sucesso com a Be4Code! Nossa página de briefing contém perguntas essenciais para entender suas necessidades e desenvolver projetos personalizados de desenvolvimento web, criação de sites, SEO e E-Commerce. Inicie seu projeto conosco!" />
        <meta property="og:site_name" content="Be4Code - Portfólio" />

        <meta name="twitter:title" content="Be4Code - Portfólio" />
        <meta name="twitter:description" content="Prepare-se para o sucesso com a Be4Code! Nossa página de briefing contém perguntas essenciais para entender suas necessidades e desenvolver projetos personalizados de desenvolvimento web, criação de sites, SEO e E-Commerce. Inicie seu projeto conosco!" />
        <meta name="twitter:card" content="website" />
        <meta name="twitter:image" content="https://be4code.com.br/static/media/gabriel.f7a5d0bf107b18a83380.webp" />
        <meta name="twitter:site" content="https://be4code.com.br/portfolio" />

        <link rel="alternate" href="https://be4code.com.br/portfolio" hrefLang="pt-br" />
        <link rel="canonical" href="https://be4code.com.br/portfolio" />

        <meta name="keywords" content="Desenvolvimento Web, Desenvolvimento de Sites, Criação de Sites, Criação de Sites Profissionais, Criação de Landing Pages, Criação de Sites E-Commerce, Criação de Sites Institucionais, Criação de Sites de Venda, Criação de Sites de Venda Online, Criação de Sites de Venda Presencial, Criação de Sites de Venda Digital, Criação de Sites de Venda Online, Criação de Sites de Venda Presencial, Criação de Sites de Venda Digital" />

        <meta name="author" content="Be4Code" />

        <meta name="robots" content="noindex, nofollow" />

        <meta name="language" content="Portuguese" />

        <meta name="revisit-after" content="7 days" />

      </Helmet>

      <Navbar />

      <InicioServicos banner={BannerPortfolio} titulo="Nossos Melhores Trabalhos" texto="Aqui você vai ver os projetos que já criamos com muito cuidado e dedicação. Cada trabalho conta uma história de como ajudamos empresas a crescer, aparecer mais e conquistar novos clientes. Nosso objetivo é sempre fazer algo incrível que faça a diferença para quem confia no nosso trabalho." />

      <main className="container-fluid py-5">

        <article className="row">

          <Projeto imagem={McpGalfort} titulo="Galfort - Estruturas Metálicas" tipoProjeto="Site Institucional" texto="O site da Galfort destaca excelência em estruturas metálicas, projetos realizados, depoimentos, serviços e contato, com design moderno." tecnologias={['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'JQuery', 'PHP']} link="https://galfort.com.br" />

          <Projeto imagem={McpSemetangua} titulo="Pré-Matrícula - Tanguá" tipoProjeto="SaaS (Software como Serviço)" texto="O site da Pré-Matrícula de Tanguá facilita o acesso à educação com cadastro online, escolha de escolas e acompanhamento claro e eficiente." tecnologias={['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React', 'Sass', 'PHP', 'Laravel', 'MySQL']} link="https://semetangua.com.br" />

          <Projeto imagem={McpSavegnagoBarber} titulo="Barbearia Savegnago" tipoProjeto="Site Institucional" texto="O site da Savegnago Barber destaca serviços de barbearia, agendamento online, contato e localização, com design moderno e intuitivo." tecnologias={['HTML', 'CSS', 'JavaScript', 'PHP', 'Wordpress']} link="https://savegnagobarber.noobieldev.com.br" />

          <Projeto imagem={McpDogvibe} titulo="DogVibe - Tag identificação" tipoProjeto="SaaS (Software como Serviço)" texto="O sistema de identificação pet via QR Code conecta donos e pets com praticidade: leia o código e acesse perfil e contatos em segundos." tecnologias={['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React', 'Sass', 'PHP', 'Laravel', 'MySQL']} link="https://petscan.dogvibe.com.br/login.php" />

          <Projeto imagem={McpAmazoniaViva} titulo="Amazonia Viva - Game" tipoProjeto="Landing Page" texto="O Amazonia Viva Games é um jogo que ensina crianças de escolas públicas sobre a importância de preservar a Amazônia, em parceria estadual." tecnologias={['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'JQuery', 'PHP']} link="https://amazoniavivagames.com.br" />

          <Projeto imagem={McpPerezBarros} titulo="Perez Barros - Contabilidade" tipoProjeto="Site Institucional" texto="O site da Perez Barros apresenta serviços contábeis, equipe e contatos, com design profissional e soluções personalizadas." tecnologias={['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'JQuery', 'PHP']} link="https://www.perezbarros.com.br" />

          <Projeto imagem={McpEldorado} titulo="Eldorado - Pintura Predial" tipoProjeto="Site Institucional" texto="O site da Pintura Predial Eldorado apresenta serviços de pintura predial, residencial e industrial, com portfólio, depoimentos e fácil navegação." tecnologias={['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'JQuery', 'PHP']} link="https://eldorado.noobieldev.com.br" />
          <Projeto imagem={McpArcondicionado} titulo="DP Barros Ar-condicionados" tipoProjeto="Landing Page" texto="O site apresenta serviços de manutenção e limpeza de ar-condicionado, com navegação fácil, agendamento rápido e qualidade garantida." tecnologias={['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'JQuery', 'PHP']} link="https://dpbarrosarcondicionado.com.br" />

          <Projeto imagem={McpKardbank} titulo="Kard Bank + AMP Barros" tipoProjeto="Site Institucional" texto="A parceria AMP Barros e KardBank oferece apoio a quem precisa, facilitando acesso a benefícios do governo com soluções rápidas e confiáveis." tecnologias={['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'JQuery', 'PHP', 'MySQL']} link="https://kardbank.noobieldev.com.br" />

          <Projeto imagem={McpAmpBarros} titulo="AMP Barros - Promotora" tipoProjeto="Site Institucional" texto="O site da AMP Barros apresenta serviços contábeis e financeiros, com design claro, equipe qualificada, depoimentos e contato acessível." tecnologias={['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'JQuery', 'PHP', 'MySQL']} link="https://ampbarros.com.br" />

          <Projeto imagem={McpFroiddsgn} titulo="Froid Designer" tipoProjeto="Site Institucional" texto="O site do designer destaca projetos únicos, método de trabalho, portfólio completo e facilita contato e orçamentos com navegação prática." tecnologias={['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'JQuery', 'PHP']} link="https://froiddsgn.noobieldev.com.br" />

        </article>

      </main>

      <Footer />

    </Suspense>

  )

}
