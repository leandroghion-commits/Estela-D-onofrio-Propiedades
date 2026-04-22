import { useState } from 'react';
import { motion } from 'motion/react';
import { PROPERTIES, Property } from '../constants';
import { Search, MapPin, SlidersHorizontal, ChevronRight, MessageCircle, Phone } from 'lucide-react';
import { PropertyModal } from '../components/Shared';

export function PropertiesCatalog() {
  const [filterType, setFilterType] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  const filteredProperties = PROPERTIES.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         p.neighborhood.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === 'Todos' || p.type === filterType;
    return matchesSearch && matchesType;
  });

  const propertyTypes = ['Todos', 'Departamento', 'Casa', 'PH', 'Lote', 'Local'];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50/30">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h1 className="text-4xl md:text-7xl font-black mb-4 tracking-tight">Catálogo de <span className="text-gradient">Propiedades</span></h1>
          <p className="text-slate-500 font-medium">Mostrando {filteredProperties.length} de {PROPERTIES.length} unidades disponibles.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-80 shrink-0">
            <div className="sticky top-28 space-y-8">
              <div className="bg-white border border-slate-100 rounded-[32px] p-6 shadow-xl">
                 <div className="flex items-center gap-2 mb-8">
                   <SlidersHorizontal className="w-5 h-5 text-blue-600" />
                   <h3 className="font-black text-lg text-slate-900 tracking-tight">Personalizá tu búsqueda</h3>
                 </div>

                 <div className="space-y-8">
                    <div>
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-4">¿Qué buscás?</label>
                      <div className="relative">
                        <input 
                          type="text" 
                          placeholder="Propiedad, barrio o calle..."
                          className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-12 text-sm focus:border-blue-500 focus:bg-white outline-none transition-all font-medium"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-4">Tipo de unidad</label>
                      <div className="grid grid-cols-2 gap-2">
                        {propertyTypes.map(type => (
                          <button
                            key={type}
                            onClick={() => setFilterType(type)}
                            className={`px-3 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border ${
                              filterType === type 
                                ? 'bg-blue-600 border-transparent text-white shadow-lg shadow-blue-100' 
                                : 'bg-slate-50 border-slate-100 text-slate-500 hover:border-blue-200'
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    <button 
                       onClick={() => {setFilterType('Todos'); setSearchQuery('');}}
                       className="w-full py-4 rounded-2xl border border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors"
                    >
                      Limpiar filtros
                    </button>
                 </div>
              </div>

              <div className="bg-slate-900 rounded-[32px] p-8 text-center shadow-2xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-[60px] rounded-full group-hover:bg-blue-600/40 transition-colors" />
                 <h4 className="text-xl font-black mb-4 text-white relative z-10">¿No encontrás lo que buscás?</h4>
                 <p className="text-white/60 text-sm mb-6 relative z-10 font-medium">Dejanos tu búsqueda y te avisamos cuando ingrese una oportunidad.</p>
                 <button className="w-full py-4 bg-white text-slate-900 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-50 transition-colors relative z-10">Solicitar Asistencia</button>
              </div>
            </div>
          </aside>

          {/* Properties List */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {filteredProperties.length > 0 ? (
                filteredProperties.map((property, idx) => (
                  <motion.div
                    key={property.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onDoubleClick={() => setSelectedProperty(property)}
                    className="group relative flex flex-col bg-white border border-slate-100 rounded-[28px] overflow-hidden hover:border-blue-400 transition-all duration-500 card-shadow cursor-pointer"
                  >
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img 
                        src={property.image} 
                        alt={property.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-blue-900/10 transition-colors duration-500 flex items-center justify-center">
                        <motion.button 
                          whileHover={{ scale: 1.1 }}
                          onClick={(e) => { e.stopPropagation(); setSelectedProperty(property); }}
                          className="hidden group-hover:flex glass-vivid text-slate-900 px-6 py-3 rounded-full font-black text-xs uppercase tracking-widest shadow-2xl items-center gap-2"
                        >
                          Detalles
                        </motion.button>
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-blue-600 border border-slate-100 shadow-sm">
                          {property.type}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-1.5 text-slate-400 text-[10px] font-black uppercase tracking-widest mb-3">
                        <MapPin className="w-3.5 h-3.5 text-blue-500" />
                        {property.neighborhood}
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors line-clamp-2 h-14 leading-tight">
                        {property.title}
                      </h3>
                      
                      <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-50">
                        <span className="text-2xl font-black text-gradient">
                          {property.price}
                        </span>
                        <div className="flex gap-2">
                           <a href="tel:+541145534483" onClick={(e) => e.stopPropagation()} className="p-2 rounded-full border border-slate-100 hover:bg-blue-50 hover:text-blue-600 transition-all text-slate-400">
                              <Phone className="w-4 h-4" />
                           </a>
                           <a href="https://wa.me/541145534483" onClick={(e) => e.stopPropagation()} className="p-2 rounded-full border border-slate-100 hover:bg-green-50 hover:text-green-600 transition-all text-slate-400">
                              <MessageCircle className="w-4 h-4" />
                           </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full py-24 text-center bg-white border border-slate-100 rounded-[48px]">
                   <Search className="w-16 h-16 text-slate-100 mx-auto mb-6" />
                   <h3 className="text-3xl font-black mb-2 text-slate-900 tracking-tight">Sin resultados</h3>
                   <p className="text-slate-500 font-medium">No encontramos propiedades con esos criterios.<br/>Probá ajustando la búsqueda.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <PropertyModal property={selectedProperty} onClose={() => setSelectedProperty(null)} />
    </div>
  );
}
