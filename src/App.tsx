import { FC, memo } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Main from './components/Main/Main';
import Branding from './components/Branding/MyWebsite'
import Contacts from './components/Contacts/MyWebsite'
import Logo from './components/Logo/MyWebsite'
import Marketing from './components/Marketing/MyWebsite'
import Web from './components/Web/MyWebsite'
import ScrollToTop from './components/ScrollToTop';

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <Router>
        <ScrollToTop />
        <Routes>
          <Route path='/SAMKOV_DESIGN' element={<Main />}/>
          <Route path="/SAMKOV_DESIGN/branding" element={<Branding />} />
          <Route path="/SAMKOV_DESIGN/contacts" element={<Contacts />} />
          <Route path="/SAMKOV_DESIGN/logo" element={<Logo />} />
          <Route path="/SAMKOV_DESIGN/marketing" element={<Marketing />} />
          <Route path="/SAMKOV_DESIGN/web" element={<Web />} />
        </Routes>
    </Router>
  );
});
