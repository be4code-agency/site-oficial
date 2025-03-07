import React, { Suspense } from "react";

const Navbar = React.lazy(()=> import("../../components/Navbar"));
const Footer = React.lazy(()=> import("../../components/Footer"));
const InicioServicos = React.lazy(()=> import("../Produtos/components/inicio"));

import Banner from '../../img/banners/politica_privacidade/banner_politica_privacidade.avif';

import { PreLoader } from "../../components/PreLoader";

import { Helmet } from "react-helmet";

export default function PolicyPrivacy() {

  return(

    <Suspense fallback={<PreLoader />}>

      <Helmet>
        <title>Be4Code - Política de Privacidade</title>
        <meta name="description" content="Políticas de Privacidade da Be4Code" />

        <meta property="og:title" content="Be4Code - Política de Privacidade" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://be4code.com.br/privacy_policy" />
        <meta property="og:image" content="https://be4code.com.br/static/media/gabriel.f7a5d0bf107b18a83380.webp" />
        <meta property="og:image:url" content="https://be4code.com.br/static/media/gabriel.f7a5d0bf107b18a83380.webp" />
        <meta property="og:description" content="Política de Privacidade da Be4Code" />
        <meta property="og:site_name" content="Be4Code - Política de Privacidade" />

        <meta name="twitter:title" content="Be4Code - Política de Privacidade" />
        <meta name="twitter:description" content="Política de Privacidade da Be4Code" />
        <meta name="twitter:card" content="website" />
        <meta name="twitter:image" content="https://be4code.com.br/static/media/gabriel.f7a5d0bf107b18a83380.webp" />
        <meta name="twitter:site" content="https://be4code.com.br/privacy_policy" />

        <link rel="alternate" href="https://be4code.com.br/privacy_policy" hrefLang="pt-br" />
        <link rel="canonical" href="https://be4code.com.br/privacy_policy" />

        <meta name="keywords" content="Desenvolvimento Web, Desenvolvimento de Sites, Criação de Sites, Criação de Sites Profissionais, Criação de Landing Pages, Criação de Sites E-Commerce, Criação de Sites Institucionais, Criação de Sites de Venda, Criação de Sites de Venda Online, Criação de Sites de Venda Presencial, Criação de Sites de Venda Digital, Criação de Sites de Venda Online, Criação de Sites de Venda Presencial, Criação de Sites de Venda Digital" />

        <meta name="author" content="Be4Code" />

        <meta name="robots" content="noindex, nofollow" />

        <meta name="language" content="Portuguese" />

        <meta name="revisit-after" content="7 days" />

      </Helmet>

      <Navbar />

      <InicioServicos banner={Banner} titulo="Políticas de Privacidade" texto="Nós estamos comprometidos em proteger a privacidade e a segurança dos dados pessoais de nossos clientes e visitantes. Esta Política de Privacidade descreve como coletamos, utilizamos, armazenamos e protegemos os dados pessoais fornecidos através de nossos formulários, em conformidade com a Lei Geral de Proteção de Dados (LGPD)." />

      <div className="container py-5">
        <p className="mb-4">Nós, da <strong>Be4Code</strong>, estamos comprometidos em proteger a privacidade e a segurança dos dados pessoais de nossos clientes e visitantes. Esta Política de Privacidade descreve como coletamos, utilizamos, armazenamos e protegemos os dados pessoais fornecidos através de nossos formulários, em conformidade com a Lei Geral de Proteção de Dados (LGPD).</p>

        <h2 className="mb-3">1. Coleta de Dados Pessoais</h2>
        <p className="mb-3">Ao preencher nossos formulários, solicitamos as seguintes informações pessoais:</p>
        <ul className="list-unstyled mb-4">
          <li>Nome</li>
          <li>Telefone</li>
          <li>Email</li>
        </ul>

        <h2 className="mb-3">2. Uso dos Dados Pessoais</h2>
        <p className="mb-3">Os dados pessoais coletados são utilizados para os seguintes propósitos:</p>
        <ul className="list-unstyled mb-4">
          <li>Entrar em contato com o cliente para responder suas solicitações.</li>
          <li>Enviar informações relevantes sobre nossos serviços.</li>
          <li>Manter o cliente atualizado sobre novidades, promoções e eventos.</li>
        </ul>

        <h2 className="mb-3">3. Armazenamento e Proteção dos Dados Pessoais</h2>
        <p className="mb-4">Os dados pessoais fornecidos são armazenados em nossos servidores seguros e adotamos medidas de segurança adequadas para protegê-los contra acesso não autorizado, alteração, divulgação ou destruição. Utilizamos tecnologias e procedimentos de segurança para garantir a proteção de seus dados.</p>

        <h2 className="mb-3">4. Compartilhamento de Dados Pessoais</h2>
        <p className="mb-4">Não compartilhamos seus dados pessoais com terceiros, exceto quando necessário para cumprir obrigações legais ou regulatórias, ou com seu consentimento explícito.</p>

        <h2 className="mb-3">5. Direitos dos Titulares dos Dados</h2>
        <p className="mb-3">De acordo com a LGPD, você tem os seguintes direitos em relação aos seus dados pessoais:</p>
        <ul className="list-unstyled mb-4">
          <li><strong>Acesso:</strong> Você pode solicitar acesso aos seus dados pessoais que possuímos.</li>
          <li><strong>Correção:</strong> Você pode solicitar a correção de dados pessoais incompletos, inexatos ou desatualizados.</li>
          <li><strong>Eliminação:</strong> Você pode solicitar a exclusão de seus dados pessoais, exceto quando a retenção for permitida por lei.</li>
          <li><strong>Portabilidade:</strong> Você pode solicitar a transferência dos seus dados pessoais para outro fornecedor de serviço ou produto.</li>
          <li><strong>Revogação do Consentimento:</strong> Você pode revogar seu consentimento para o tratamento dos seus dados pessoais a qualquer momento.</li>
        </ul>

        <h2 className="mb-3">6. Exercício de Direitos</h2>
        <p className="mb-4">Para exercer seus direitos ou caso tenha qualquer dvida sobre esta Política de Privacidade, entre em contato conosco através do email <a href="mailto:contato@be4code.com.br">contato@be4code.com.br</a> ou pelo telefone <a href="tel:+5511974808118">+55 (11) 97480-8118</a>.</p>

        <h2 className="mb-3">7. Alteraçes na Política de Privacidade</h2>
        <p className="mb-4">Podemos atualizar esta Política de Privacidade periodicamente. Recomendamos que você reveja esta política regularmente para se manter informado sobre como estamos protegendo seus dados.</p>

        <h2 className="mb-3">8. Consentimento</h2>
        <p className="mb-4">Ao fornecer seus dados pessoais através de nossos formulários, você concorda com a coleta, uso e armazenamento conforme descrito nesta Política de Privacidade.</p>

        <h2 className="mb-3">9. Contato</h2>
        <p>Be4Code<br />
        Email: <a href="mailto:contato@be4code.com.br">contato@be4code.com.br</a><br />
        Telefone: <a href="tel:+5511974808118">+55 (11) 97480-8118</a><br />
        Endereço: Rua Maria Paulina da Conceição, Vila Ponte Rasa, São Paulo - SP, 03882-020</p>
      </div>

      <Footer />

    </Suspense>

  )
}
