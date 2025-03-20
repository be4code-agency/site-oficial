import { Routes, Route } from 'react-router-dom'

import Main from './pages/Main';
import Links from './pages/Links';
import Briefing from './pages/Briefing';
import Confirmacao from './pages/Briefing/confirmacao';
import Proposta from './pages/Proposta';
import PolicyPrivacy from './pages/privacyPolicy';
import NotFound from './pages/NotFound';
import Portfolio from './pages/Portfolio';
import SobreNos from './pages/SobreNos';
import Produtos from './pages/Produtos';
import Faq from './pages/Faq';

import Tech from './pages/Produtos/Tech';
import Design from './pages/Produtos/Design';
import Marketing from './pages/Produtos/Marketing';
import Engajamento from './pages/Produtos/Engajamento';
import Capture from './pages/Produtos/Capture';

export function AppRoutes() {

  return (
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/links' element={<Links />} />
        <Route path='/briefing' element={<Briefing />} />
        <Route path='/confirmacao' element={<Confirmacao />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/sobre-nos' element={<SobreNos />} />
        <Route path='/produtos' element={<Produtos />} />
        <Route path='/produtos/tech' element={<Tech />} />
        <Route path='/produtos/design' element={<Design />} />
        <Route path='/produtos/marketing' element={<Marketing />} />
        <Route path='/produtos/engajamento' element={<Engajamento />} />
        <Route path='/produtos/capture' element={<Capture />} />
        <Route path='/faq' element={<Faq />} />
        {/* <Route path='/commercial_proposal/:idProposta' element={<Proposta />} /> */}
        <Route path='/politicas-de-privacidade' element={<PolicyPrivacy />} />
        <Route path='/not-found' element={<NotFound />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
  )
}
