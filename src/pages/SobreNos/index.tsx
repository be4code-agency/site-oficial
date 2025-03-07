import React, { Suspense } from "react";

import { PreLoader } from "../../components/PreLoader";

const Navbar = React.lazy(()=> import("../../components/Navbar"));
const Footer = React.lazy(()=> import("../../components/Footer"));

const BannerSobreNos = React.lazy(()=> import("./Banner"));
const NossaHistoria = React.lazy(()=> import("./NossaHistoria"));
const Resultados = React.lazy(()=> import("./Resultados"));
const Clientes = React.lazy(()=> import("../Main/Clientes"));


export default function SobreNos(){

  return(

    <Suspense fallback={<PreLoader />}>

      <Navbar />

      <BannerSobreNos />

      <NossaHistoria />

      <Resultados />

      <Clientes />

      <Footer />

    </Suspense>

  )

}
