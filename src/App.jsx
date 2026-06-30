import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import WhatsappButton from "./components/WhatsappButton";

// ==========================================================
// COMPONENTES TEMPORÁRIOS PARA AS NOVAS ROTAS
// (Depois você pode criar os arquivos .jsx na pasta ./components,
// desenhar as páginas, remover essas linhas e importar igual fez acima)
// ==========================================================
const Diagnostico = () => <div className="text-white text-center py-20 min-h-[50vh]">Página de Diagnóstico Gratuito</div>;
const TrocaToner = () => <div className="text-white text-center py-20 min-h-[50vh]">Página de Troca de Toner</div>;
const Marcas = () => <div className="text-white text-center py-20 min-h-[50vh]">Página de Todas as Marcas</div>;
const Contato = () => <div className="text-white text-center py-20 min-h-[50vh]">Página de Contato</div>;

// ==========================================================
// COMPONENTE HOME
// (Reúne o conteúdo atual da sua página principal)
// ==========================================================
const Home = () => (
  <>
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
      </div>
    </div>
  </>
);

// ==========================================================
// APP PRINCIPAL
// ==========================================================
const App = () => (
  <BrowserRouter>
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