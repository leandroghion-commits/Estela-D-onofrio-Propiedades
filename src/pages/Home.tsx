import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, MapPin, Building, ShieldCheck, TrendingUp, BarChart3, ChevronRight, ChevronDown, Phone, MessageCircle, Users } from 'lucide-react';
import { PROPERTIES, NEIGHBORHOODS, Property } from '../constants';
import { Link } from 'react-router-dom';
import { PropertyModal } from '../components/Shared';

const PropertyCard = ({ property, index, onOpen }: { property: Property, index: number, onOpen: (p: Property) => void, key?: any }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    onDoubleClick={() => onOpen(property)}
    className="group relative flex flex-col bg-white border border-slate-100 rounded-[28px] overflow-hidden hover:border-blue-400 transition-all duration-500 card-shadow cursor-pointer"
  >
    <div className="aspect-square overflow-hidden relative">
      <img 
        src={property.image} 
        alt={property.title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-blue-900/10 transition-colors duration-500 flex items-center justify-center">
         <motion.button 
           whileHover={{ scale: 1.1 }}
           onClick={(e) => { e.stopPropagation(); onOpen(property); }}
           className="hidden group-hover:flex glass-vivid text-slate-900 px-6 py-3 rounded-full font-black text-xs uppercase tracking-widest shadow-2xl items-center gap-2 border-white"
         >
           Ver Detalle
         </motion.button>
      </div>
      <div className="absolute top-4 left-4 flex gap-2">
        <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider text-blue-600 shadow-sm border border-white/50">
          {property.type}
        </span>
      </div>
      <div className="absolute bottom-4 left-4">
         <span className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-sm font-black shadow-lg">
           {property.price}
         </span>
      </div>
    </div>
    
    <div className="p-5 flex flex-col flex-grow">
      <div className="flex items-center gap-1.5 text-slate-400 text-[10px] uppercase font-bold tracking-widest mb-3">
        <MapPin className="w-3.5 h-3.5 text-blue-500" />
        {property.neighborhood}
      </div>
      <h3 className="text-lg font-bold mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight h-10">
        {property.title}
      </h3>
      
      <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-50 text-slate-500">
        <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest">
           <Building className="w-3.5 h-3.5" /> {property.rooms} Amb.
        </div>
        <div className="flex items-center gap-4 ml-auto">
           <a href={`tel:+541145534483`} onClick={(e) => e.stopPropagation()} className="p-2 rounded-full hover:bg-blue-50 text-slate-300 hover:text-blue-600 transition-all">
             <Phone className="w-4 h-4" />
           </a>
           <a href={`https://wa.me/541145534483`} onClick={(e) => e.stopPropagation()} className="p-2 rounded-full hover:bg-green-50 text-slate-300 hover:text-green-500 transition-all">
             <MessageCircle className="w-4 h-4" />
           </a>
        </div>
      </div>
    </div>
  </motion.div>
);

export function Home() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const featured = PROPERTIES.filter(p => p.featured);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-32 bg-slate-50/50">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 opacity-60" />
        
        <div className="container relative z-10 px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-12 xl:col-span-7 space-y-8 text-center xl:text-left">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mx-auto xl:mx-0"
              >
                <span className="text-blue-600 text-sm">✦</span>
                <span className="text-xs font-bold uppercase tracking-[0.1em] text-blue-600">Desde 1984 en Capital Federal</span>
              </motion.div>

              <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tight text-slate-900">
                <motion.span initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="block font-light">Encontrá tu</motion.span>
                <motion.span initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="block text-gradient">próximo hogar</motion.span>
              </h1>

              <p className="text-slate-500 text-lg md:text-xl max-w-xl font-medium leading-relaxed mx-auto xl:mx-0">
                Operaciones inmobiliarias efectivas, rápidas y seguras en los barrios más exclusivos de la Ciudad.
              </p>

              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-[32px] p-3 shadow-2xl border border-slate-100 max-w-3xl mx-auto xl:mx-0"
              >
                <div className="flex flex-col md:flex-row gap-2">
                  <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 px-4 py-2">
                    <div className="flex flex-col items-start p-2 border-b md:border-b-0 md:border-r border-slate-100">
                      <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider mb-1">Tipo</span>
                      <select className="bg-transparent text-slate-900 font-bold outline-none w-full cursor-pointer text-sm">
                        <option>Departamentos</option>
                        <option>Casas</option>
                        <option>PH</option>
                      </select>
                    </div>
                    <div className="flex flex-col items-start p-2 border-b md:border-b-0 md:border-r border-slate-100">
                      <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider mb-1">Barrio</span>
                      <select className="bg-transparent text-slate-900 font-bold outline-none w-full cursor-pointer text-sm">
                        <option>Colegiales</option>
                        <option>Belgrano</option>
                        <option>Palermo</option>
                      </select>
                    </div>
                    <div className="flex flex-col items-start p-2">
                      <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider mb-1">Precio Max</span>
                      <select className="bg-transparent text-slate-900 font-bold outline-none w-full cursor-pointer text-sm">
                        <option>U$S 100k</option>
                        <option>U$S 250k</option>
                        <option>U$S 500k+</option>
                      </select>
                    </div>
                  </div>
                  <button className="bg-blue-600 text-white rounded-[24px] px-10 py-4 font-black flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
                    <Search className="w-5 h-5" /> Buscar
                  </button>
                </div>
              </motion.div>

              <div className="flex flex-wrap items-center justify-center xl:justify-start gap-8 pt-4">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-full h-full object-cover" alt="User" />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-blue-50 flex items-center justify-center text-blue-600 text-[10px] font-bold">+500</div>
                </div>
                <div className="text-sm font-medium text-slate-400">
                  <span className="text-slate-900 font-black tracking-tight">Expertos certificados</span> acompañándote en cada paso.
                </div>
              </div>
            </div>

            <div className="hidden xl:block lg:col-span-5 relative">
              <div className="relative z-10 w-full aspect-[4/5] rounded-[48px] overflow-hidden border-8 border-white shadow-2xl">
                 <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200" className="w-full h-full object-cover" alt="Modern House" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                 <div className="absolute bottom-10 left-10 right-10 flex gap-6">
                   <div className="flex-1 glass-vivid p-6 rounded-[32px] border-white/40">
                     <p className="text-white text-3xl font-black mb-1">120+</p>
                     <p className="text-white/70 text-xs font-bold uppercase tracking-widest">Unidades Activas</p>
                   </div>
                   <div className="flex-1 glass-vivid p-6 rounded-[32px] border-white/40">
                     <p className="text-white text-3xl font-black mb-1">40</p>
                     <p className="text-white/70 text-xs font-bold uppercase tracking-widest">Años de Confianza</p>
                   </div>
                 </div>
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600 rounded-full flex items-center justify-center border-8 border-white shadow-xl rotate-12 z-20">
                 <div className="text-center text-white">
                    <p className="text-3xl font-black">Full</p>
                    <p className="text-[10px] font-black uppercase tracking-widest leading-none">Service</p>
                 </div>
              </div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-cyan-100 blur-[80px] -z-10 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-24 container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-slate-900">
              Propiedades <span className="text-gradient">Destacadas</span>
            </h2>
            <p className="text-slate-500 font-medium">Nuestras mejores oportunidades en los barrios más demandados pronto podrían ser tu hogar.</p>
          </div>
          <Link to="/propiedades" className="flex items-center gap-2 group px-8 py-4 rounded-full border border-slate-200 hover:bg-slate-50 transition-all font-black text-xs uppercase tracking-widest">
            Ver catálogo completo <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featured.map((property, idx) => (
            <PropertyCard key={property.id} property={property} index={idx} onOpen={setSelectedProperty} />
          ))}
        </div>
        <PropertyModal property={selectedProperty} onClose={() => setSelectedProperty(null)} />
      </section>

      {/* Neighborhood Exploration */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-slate-900 tracking-tight">Explorá por <span className="text-gradient">Barrio</span></h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-medium">Conocé nuestra fuerte presencia en las zonas residenciales más importantes de Buenos Aires.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {NEIGHBORHOODS.map((barrio, i) => (
              <motion.div
                key={barrio.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`
                  bg-white border border-slate-100 rounded-full px-8 py-4 flex items-center gap-3 cursor-pointer 
                  hover:border-blue-400 shadow-sm hover:shadow-xl transition-all group
                  ${barrio.size === 'xl' ? 'scale-110' : ''}
                `}
              >
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                  <Building className="w-4 h-4 text-blue-500" />
                </div>
                <span className="font-black text-slate-800 group-hover:text-blue-600 transition-colors uppercase text-xs tracking-widest">{barrio.name}</span>
                <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  {barrio.count}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest mb-6">Expertos Inmobiliarios</span>
            <h2 className="text-4xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tight text-slate-900">Servicios de <br/><span className="text-gradient">Alto Nivel</span></h2>
            <p className="text-slate-500 text-lg mb-12 leading-relaxed font-medium">
              No solo vendemos propiedades. Construimos relaciones basadas en la confianza y el profesionalismo desde hace 40 años, brindando asesoramiento integral.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
               {[
                { icon: TrendingUp, title: "Venta Eficaz", desc: "Maximizamos el valor de su patrimonio." },
                { icon: ShieldCheck, title: "Tasaciones Reales", desc: "Criterio profesional en el día." },
                { icon: BarChart3, title: "Gestión Integral", desc: "Tranquilidad total legal y notarial." },
                { icon: Users, title: "Trato Humano", desc: "Atención personalizada 1 a 1." }
               ].map((item, i) => (
                <div key={i} className="flex gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center shrink-0 shadow-lg">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-black mb-1 text-slate-900 tracking-tight uppercase text-xs">{item.title}</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
               ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600/10 blur-[120px] -z-10 rounded-full" />
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                 <div className="h-64 rounded-[40px] border-4 border-white shadow-2xl overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Architecture" />
                 </div>
                 <div className="h-48 rounded-[40px] border-4 border-white shadow-2xl overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Architecture" />
                 </div>
              </div>
              <div className="space-y-4">
                 <div className="h-48 rounded-[40px] border-4 border-white shadow-2xl overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Architecture" />
                 </div>
                 <div className="h-64 rounded-[40px] border-4 border-white shadow-2xl overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Architecture" />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-24 container mx-auto px-6">
        <div className="rounded-[48px] bg-slate-900 p-12 md:p-24 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/20 blur-[140px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-blue-600/30 transition-colors" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
             <div className="max-w-xl text-center md:text-left">
               <h2 className="text-4xl md:text-6xl font-black mb-6 text-white tracking-tight">¿Querés tasar tu propiedad?</h2>
               <p className="text-white/60 text-xl font-medium">Obtené un valor real de mercado con rigor técnico en menos de 24 horas.</p>
             </div>
             <Link to="/contacto" className="px-12 py-6 bg-blue-600 text-white rounded-full font-black text-sm uppercase tracking-widest hover:scale-105 hover:bg-blue-500 transition-all shadow-2xl shadow-blue-500/20">
               Solicitar Tasación
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
