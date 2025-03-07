import { Suspense } from 'react';
import { Link } from 'react-router-dom';

import { Container, Image, Title } from './styles';

import { Helmet } from "react-helmet";

import notFound from '../../img/img_404.png';

import { PreLoader } from '../../components/PreLoader';

export default function NotFound() {

  return (
    <Suspense fallback={<PreLoader />}>

      <Helmet>
        <title>Be4Code - Página não encontrada</title>
        <meta name="description" content="Página de erro 404 - Página não encontrada" />

        <meta property="og:title" content="Be4Code - Página não encontrada" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://be4code.com.br/not-found" />
        <meta property="og:image" content="https://be4code.com.br/static/media/gabriel.f7a5d0bf107b18a83380.webp" />
        <meta property="og:image:url" content="https://be4code.com.br/static/media/gabriel.f7a5d0bf107b18a83380.webp" />
        <meta property="og:description" content="Página de erro 404 - Página não encontrada" />
        <meta property="og:site_name" content="Be4Code - Página não encontrada" />

        <meta name="twitter:title" content="Be4Code - Página não encontrada" />
        <meta name="twitter:description" content="Página de erro 404 - Página não encontrada" />
        <meta name="twitter:card" content="website" />
        <meta name="twitter:image" content="https://be4code.com.br/static/media/gabriel.f7a5d0bf107b18a83380.webp" />
        <meta name="twitter:site" content="https://be4code.com.br/not_found" />

        <link rel="alternate" href="https://be4code.com.br/not-found" hrefLang="pt-br" />
        <link rel="canonical" href="https://be4code.com.br/not-found" />

        <meta name="keywords" content="Desenvolvimento Web, Desenvolvimento de Sites, Criação de Sites, Criação de Sites Profissionais, Criação de Landing Pages, Criação de Sites E-Commerce, Criação de Sites Institucionais, Criação de Sites de Venda, Criação de Sites de Venda Online, Criação de Sites de Venda Presencial, Criação de Sites de Venda Digital, Criação de Sites de Venda Online, Criação de Sites de Venda Presencial, Criação de Sites de Venda Digital" />

        <meta name="author" content="Be4Code" />

        <meta name="robots" content="noindex, nofollow" />

        <meta name="language" content="Portuguese" />

        <meta name="revisit-after" content="7 days" />

      </Helmet>

      <Container>
        <Image src={notFound} alt="Página não encontrada" />
        <Title>Página não encontrada</Title>
        <p className="text-muted">A página que você tentou acessar não foi encontrada.</p>
        <Link to="/" className="purpleBtn rounded">Voltar para a página inicial</Link>
      </Container>

    </Suspense>
  );
}
