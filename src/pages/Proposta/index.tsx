import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';

import { consultCommercialProposal } from "../../services/api";

const Inicio = React.lazy(() => import('./Inicio'));
const SobreMim = React.lazy(() => import('./SobreMim'));
const Servicos = React.lazy(() => import('./Servicos'));
const Portfolio = React.lazy(() => import('./Portfolio'));
const ProcessoDesenvolvimento = React.lazy(() => import('./Processo'));
const Preco = React.lazy(() => import('./Preco'));

import { Helmet } from "react-helmet";

import {PreLoader} from "../../components/PreLoader";


interface Proposta {
  id_proposta: number;
  nome_cliente: string;
  data_envio: string;
  validade: number;
  servico: string;
  valor: number;
  preco_a_vista: number;
  cod_proposta: string;
}

export default function Proposta(){

  const [proposta, setProposta] = useState<Proposta >();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { idProposta } = useParams();

  useEffect(()=>{

    (async ()=>{

      if (idProposta) {

        const propostaRequest = await consultCommercialProposal(idProposta);

        if(propostaRequest.data.mensagem === 'Proposta encontrada com sucesso'){

          setProposta(propostaRequest.data.proposta[0]);

        }else{

          navigate('/');

        }

        setLoading(false);

      }else{

        navigate('/');

      }

    })()

  }, []);

  if(loading) return <PreLoader />

  return(

    <>

      <Helmet>
        <title>Be4Code - Proposta Comercial</title>
        <meta name="description" content={`Proposta comercial criada para o cliente ${proposta?.nome_cliente} detalhando tudo sobre o serviço de ${proposta?.servico} solicitado. Espero que goste da apresentação e nos retorne com uma positiva!`} />

        <meta property="og:title" content="Be4Code - Política de Privacidade" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={"https://be4code.com.br/comercial_proposal/"+idProposta} />
        <meta property="og:image" content="https://be4code.com.br/static/media/gabriel.f7a5d0bf107b18a83380.webp" />
        <meta property="og:image:url" content="https://be4code.com.br/static/media/gabriel.f7a5d0bf107b18a83380.webp" />
        <meta property="og:description" content={`Proposta comercial criada para o cliente ${proposta?.nome_cliente} detalhando tudo sobre o serviço de ${proposta?.servico} solicitado. Espero que goste da apresentação e nos retorne com uma positiva!`} />
        <meta property="og:site_name" content="Be4Code - Política de Privacidade" />

        <meta name="twitter:title" content="Be4Code - Política de Privacidade" />
        <meta name="twitter:description" content={`Proposta comercial criada para o cliente ${proposta?.nome_cliente} detalhando tudo sobre o serviço de ${proposta?.servico} solicitado. Espero que goste da apresentação e nos retorne com uma positiva!`} />
        <meta name="twitter:card" content="website" />
        <meta name="twitter:image" content="https://be4code.com.br/static/media/gabriel.f7a5d0bf107b18a83380.webp" />
        <meta name="twitter:site" content={"https://be4code.com.br/comercial_proposal/"+idProposta} />

        <link rel="alternate" href={"https://be4code.com.br/comercial_proposal/"+idProposta} hrefLang="pt-br" />
        <link rel="canonical" href={"https://be4code.com.br/comercial_proposal/"+idProposta} />

        <meta name="keywords" content="Desenvolvimento Web, Desenvolvimento de Sites, Criação de Sites, Criação de Sites Profissionais, Criação de Landing Pages, Criação de Sites E-Commerce, Criação de Sites Institucionais, Criação de Sites de Venda, Criação de Sites de Venda Online, Criação de Sites de Venda Presencial, Criação de Sites de Venda Digital, Criação de Sites de Venda Online, Criação de Sites de Venda Presencial, Criação de Sites de Venda Digital" />

        <meta name="author" content="Be4Code" />

        <meta name="robots" content="noindex, nofollow" />

        <meta name="language" content="Portuguese" />

        <meta name="revisit-after" content="7 days" />

      </Helmet>

      <main className="container-fluid">

        <Inicio nome_cliente={proposta?.nome_cliente || ''} data_envio={proposta?.data_envio || ''} validade={proposta?.validade || 0} />

        <SobreMim />

        <Servicos />

        <Portfolio />

        <ProcessoDesenvolvimento />

        <Preco nome_cliente={proposta?.nome_cliente || ''} valor={proposta?.valor || 0} preco_a_vista={proposta?.preco_a_vista || 0} data_envio={proposta?.data_envio || ''} validade={proposta?.validade || 0} servico={proposta?.servico || ''} />

      </main>

    </>

  )

}
