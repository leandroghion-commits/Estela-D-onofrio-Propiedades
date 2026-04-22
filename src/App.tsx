import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar, Footer, WhatsAppFAB } from './components/Shared';
import { Home } from './pages/Home';
import { PropertiesCatalog } from './pages/PropertiesCatalog';
import { Company, Services, Contact } from './pages/ContentPages';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="noise" />
      <div className="min-h-screen flex flex-col relative z-10">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/propiedades" element={<PropertiesCatalog />} />
            <Route path="/empresa" element={<Company />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFAB />
      </div>
    </Router>
  );
}
