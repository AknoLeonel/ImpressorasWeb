import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from "./style";
import { Navbar, Footer } from "./components";
import WhatsappButton from "./components/WhatsappButton";
import ScrollToTop from './components/ScrollToTop'; // Adicionamos este utilitário

// Importe suas páginas da pasta 'pages'
import Home from './pages/Home';
import Diagnostico from './pages/Diagnostico';
import TrocaToner from './pages/TrocaToner';
import Marcas from './pages/Marcas';
import Contato from './pages/Contato';

const App = () => (
  <BrowserRouter>
    <ScrollToTop /> {/* Garante que ao trocar de página, o scroll vai para o topo */}
    <div className="bg-primary w-full overflow-hidden">
      
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diagnosticogratuito" element={<Diagnostico />} />
        <Route path="/trocadetoner" element={<TrocaToner />} />
        <Route path="/todasmarcas" element={<Marcas />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
          <WhatsappButton />
        </div>
      </div>

    </div>
  </BrowserRouter>
);

export default App;