import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Home, Menu, X, Phone, MapPin, TrendingUp, MessageCircle, ChevronRight } from 'lucide-react';

import { Property } from '../constants';

export function PropertyModal({ property, onClose }: { property: Property | null, onClose: () => void }) {
  if (!property) return null;

  return (
    <AnimatePresence>
      {property && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            className="relative w-full max-w-5xl bg-white rounded-[40px] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-md flex items-center justify-center text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="md:w-1/2 h-64 md:h-auto overflow-hidden relative">
              <img 
                src={property.image} 
                alt={property.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden" />
              <div className="absolute bottom-6 left-6 md:hidden">
                <span className="px-4 py-1 bg-blue-600 rounded-full text-xs font-black text-white uppercase tracking-widest">{property.price}</span>
              </div>
            </div>

            <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto bg-slate-50/50">
              <div className="mb-8">
                <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-widest mb-3">
                  <MapPin className="w-4 h-4" />
                  {property.neighborhood}
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-4">
                  {property.title}
                </h2>
                <p className="text-slate-500 font-medium leading-relaxed mb-6">
                  {property.location}
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="px-5 py-3 rounded-2xl bg-white border border-slate-100 flex flex-col gap-1 shadow-sm flex-1 min-w-[120px]">
                    <span className="text-[10px] uppercase font-bold text-slate-400">Ambientes</span>
                    <span className="text-lg font-black text-slate-900">{property.rooms}</span>
                  </div>
                  <div className="px-5 py-3 rounded-2xl bg-white border border-slate-100 flex flex-col gap-1 shadow-sm flex-1 min-w-[120px]">
                    <span className="text-[10px] uppercase font-bold text-slate-400">Superficie</span>
                    <span className="text-lg font-black text-slate-900">{property.area || 'Consultar'}</span>
                  </div>
                  <div className="px-5 py-3 rounded-2xl bg-white border border-slate-100 flex flex-col gap-1 shadow-sm flex-1 min-w-[120px]">
                    <span className="text-[10px] uppercase font-bold text-slate-400">Tipo</span>
                    <span className="text-lg font-black text-slate-900">{property.type}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-6 rounded-[24px] bg-blue-600 text-white flex items-center justify-between shadow-xl shadow-blue-200">
                  <div className="flex flex-col">
                    <span className="text-xs uppercase font-bold opacity-70 tracking-widest">Valor de Propiedad</span>
                    <span className="text-3xl font-black">{property.price}</span>
                  </div>
                  <TrendingUp className="w-8 h-8 opacity-40 shrink-0" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button className="flex items-center justify-center gap-3 bg-white border-2 border-slate-900 px-6 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all">
                    <Phone className="w-4 h-4" /> Llamar Ahora
                  </button>
                  <button className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-6 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-[1.02] transition-transform shadow-lg shadow-green-100">
                    <MessageCircle className="w-5 h-5" /> Enviar WhatsApp
                  </button>
                </div>
                
                <button className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 transition-colors">
                  Solicitar Tasación <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Propiedades', path: '/propiedades' },
    { name: 'La Empresa', path: '/empresa' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <nav 
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-48px)] max-w-7xl z-[100] transition-all duration-500 rounded-full ${
        isScrolled ? 'glass-dark py-2 px-4 shadow-2xl' : 'py-3 px-6 bg-white/5 border border-white/10'
      }`}
    >
      <div className="flex justify-between items-center">
        <NavLink to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-blue flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/30">
            <Home className="text-white w-4 h-4" />
          </div>
          <span className="text-base font-extrabold tracking-tight">
            ESTELA D'ONOFRIO <span className="text-blue-500">●</span>
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => `
                relative text-sm font-bold tracking-wide transition-colors
                ${isActive ? 'text-blue-600' : 'text-slate-500 hover:text-blue-600'}
                group
              `}
            >
              {link.name}
              <span className={`
                absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300
                ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}
              `} />
            </NavLink>
          ))}
          
          <button className="px-6 py-2.5 rounded-full bg-blue-600 text-white text-xs font-black uppercase tracking-widest hover:bg-blue-700 transition-colors shadow-lg shadow-blue-100">
            Tasá tu propiedad
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[200] glass-dark flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-xl font-bold tracking-tight">Menú</span>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 bg-white/10 rounded-lg"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-bold hover:text-blue-500 transition-colors"
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            <div className="mt-auto flex flex-col gap-4">
              <button className="w-full py-4 rounded-2xl bg-gradient-blue font-bold text-lg">
                Tasá tu propiedad
              </button>
              <div className="flex justify-center gap-6 mt-4">
                <a href="#" className="p-3 bg-white/5 rounded-full"><Phone className="w-5 h-5 text-blue-400" /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="relative pt-24 pb-12 overflow-hidden bg-slate-50 border-t border-slate-100 mt-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <NavLink to="/" className="flex items-center gap-2 mb-6 text-slate-900">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <Home className="text-white w-4 h-4" />
              </div>
              <span className="text-xl font-black tracking-tight">Estela D'Onofrio</span>
            </NavLink>
            <p className="text-slate-500 max-w-sm mb-8 leading-relaxed font-medium">
              Desde 1984 brindando excelencia y confianza en el mercado inmobiliario de Capital Federal. Tu próximo hogar empieza aquí.
            </p>
          </div>

          <div>
            <h4 className="font-black text-slate-900 mb-6 uppercase text-xs tracking-widest">Explorar</h4>
            <ul className="flex flex-col gap-4 text-slate-500 text-sm font-bold">
              <li><NavLink to="/propiedades" className="hover:text-blue-600 transition-colors">Propiedades</NavLink></li>
              <li><NavLink to="/empresa" className="hover:text-blue-600 transition-colors">Empresa</NavLink></li>
              <li><NavLink to="/servicios" className="hover:text-blue-600 transition-colors">Servicios</NavLink></li>
              <li><NavLink to="/contacto" className="hover:text-blue-600 transition-colors">Tasaciones</NavLink></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-slate-900 mb-6 uppercase text-xs tracking-widest">Contacto</h4>
            <ul className="flex flex-col gap-4 text-slate-500 text-sm font-medium">
              <li>Av. Fco. Lacroze 2909, CABA</li>
              <li>+54 11 4553 4483</li>
              <li>info@donofrioprop.com.ar</li>
              <li className="text-blue-600 font-black">Lun - Vie: 10:00 - 19:30</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:row items-center justify-between gap-4">
          <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">
            © 2026 Estela D'Onofrio Propiedades.
          </p>
          <div className="flex gap-8 items-center opacity-30 grayscale saturate-0 hover:opacity-100 hover:grayscale-0 hover:saturate-100 transition-all cursor-default">
             <span className="text-[10px] font-bold uppercase tracking-widest text-slate-900">Publicamos en:</span>
             <span className="text-xs font-black">Zonaprop</span>
             <span className="text-xs font-black">Argenprop</span>
             <span className="text-xs font-black">MercadoLibre</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppFAB() {
  return (
    <motion.a
      href="https://wa.me/5491171107777"
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-8 right-8 z-[100] w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_8px_25px_rgba(37,211,102,0.5)] group"
    >
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      <svg 
        viewBox="0 0 24 24" 
        className="w-8 h-8 text-white fill-current"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.171.823-.299.045-.691.077-1.103-.077a5.52 5.52 0 0 1-2.311-1.393c-.991-.989-1.637-2.147-1.833-2.673-.197-.525-.015-.811.246-1.071.21-.21.464-.545.62-.736.156-.192.208-.328.311-.545.105-.218.053-.408-.026-.573-.078-.165-.678-1.636-.93-2.245-.244-.593-.491-.513-.678-.522-.172-.01-.368-.012-.565-.012-.197 0-.517.074-.787.368-.27.294-1.031 1.009-1.031 2.459 0 1.45.62 2.85 1.543 4.103.924 1.253 2.126 2.167 3.447 2.766.42.19.824.312 1.157.422.56.175 1.07.15 1.472.091.448-.066 1.38-.564 1.574-1.11.194-.526.194-.977.137-1.11-.057-.133-.21-.213-.443-.328z" />
      </svg>
      <div className="absolute right-[calc(100%+12px)] top-1/2 -translate-y-1/2 px-4 py-2 bg-white text-black text-sm font-bold rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
        ¿Consultas? Hablá con nosotros
      </div>
    </motion.a>
  );
}
