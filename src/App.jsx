import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from "./style";

// Importando todos os componentes e páginas de uma vez só da pasta components
import { 
  Navbar, 
  Footer, 
  WhatsappButton, 
  ScrollToTop, 
  Home, 
  Diagnostico, 
  TrocaToner, 
  Marcas, 
  Contato 
} from "./components";

const App = () => (
  <BrowserRouter>
    <ScrollToTop /> {/* Garante que ao trocar de página, o scroll vai para o topo */}
    <div className="bg-primary w-full overflow-hidden">
      
      {/* NAVBAR FIXA NO TOPO */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* ROTAS: AQUI O CONTEÚDO MUDA CONFORME O LINK */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diagnosticogratuito" element={<Diagnostico />} />
        <Route path="/trocadetoner" element={<TrocaToner />} />
        <Route path="/todasmarcas" element={<Marcas />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>

      {/* FOOTER E WHATSAPP FIXOS NO RODAPÉ */}
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