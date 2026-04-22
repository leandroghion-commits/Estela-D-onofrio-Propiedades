import { motion } from 'motion/react';
import { History, Target, Users2, Award, Zap, Heart, Building, TrendingUp, MapPin, Phone, MessageCircle, ShieldCheck, ChevronRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export function Company() {
  return (
    <div className="pt-32 pb-24 bg-slate-50/50 min-h-screen">
      <div className="container mx-auto px-6">
        <section className="text-center mb-24 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8"
          >
            <History className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-bold uppercase tracking-[0.1em] text-blue-600">Trayectoria desde 1984</span>
          </motion.div>
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.9] text-slate-900 tracking-tight">La Empresa <br/><span className="text-gradient">Estela D'Onofrio</span></h1>
          <p className="text-xl text-slate-500 leading-relaxed font-medium">
            Somos una empresa familiar con más de 40 años de experiencia transformando el mercado inmobiliario a través de la honestidad, el profesionalismo y un profundo conocimiento de Capital Federal.
          </p>
        </section>

        {/* Timeline */}
        <section className="mb-32 relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/0 via-slate-200 to-blue-500/0 hidden md:block" />
          
          <div className="space-y-20 md:space-y-24">
            {[
              { year: '1984', title: 'Fundación', desc: 'Iniciamos operaciones con una visión clara: brindar confianza en Colegiales.', icon: History },
              { year: '1995', title: 'Consolidación', desc: 'Expandimos nuestra influencia a los barrios de Belgrano y Palermo.', icon: Target },
              { year: '2010', title: 'Nueva Era', desc: 'Digitalización y modernización de todos nuestros procesos de tasación.', icon: Zap },
              { year: 'Hoy', title: 'Liderazgo', desc: 'Referentes indiscutidos en CABA con una cartera de +120 propiedades exclusivas.', icon: Award }
            ].map((milestone, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-12 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                   <div className={`p-10 bg-white border border-slate-100 rounded-[40px] shadow-xl max-w-sm relative ${idx % 2 !== 0 ? 'md:text-left text-center' : 'md:text-right text-center'}`}>
                      <span className="text-6xl font-black text-blue-600/5 absolute -top-10 left-0 select-none md:block hidden">{milestone.year}</span>
                      <div className="md:hidden text-4xl font-black text-blue-600/20 mb-4">{milestone.year}</div>
                      <h3 className="text-2xl font-black mb-4 text-slate-900 tracking-tight">{milestone.title}</h3>
                      <p className="text-slate-500 leading-relaxed font-medium">{milestone.desc}</p>
                   </div>
                </div>
                <div className="hidden md:flex w-12 h-12 rounded-full bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.3)] relative z-10 shrink-0 border-4 border-white items-center justify-center">
                   <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                </div>
                <div className="w-full md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-slate-900 tracking-tight">Nuestros <span className="text-gradient">Valores</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Profesionalismo", desc: "Cada operación es tratada con el máximo rigor técnico y jurídico." },
              { icon: Users2, title: "Trato Humano", desc: "Escuchamos a las personas detrás de cada propiedad y cada sueño." },
              { icon: Heart, title: "Honestidad", desc: "Transparencia absoluta es la base de nuestra trayectoria de 40 años." }
            ].map((value, i) => (
              <div key={i} className="bg-white border border-slate-100 rounded-[40px] p-12 hover:border-blue-400 transition-all group shadow-sm hover:shadow-2xl">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-2xl font-black mb-4 text-slate-900 tracking-tight">{value.title}</h4>
                <p className="text-slate-500 leading-relaxed font-medium">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export function Services() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-6">
        <section className="text-center mb-24 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.9] text-slate-900 tracking-tight">Servicios <span className="text-gradient">Integrales</span></h1>
          <p className="text-xl text-slate-500 font-medium leading-relaxed">Brindamos una solución 360° para todas tus necesidades inmobiliarias.</p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {[
            { 
              title: "Compraventa de Propiedades", 
              desc: "Contamos con una amplia cartera de viviendas, locales y terrenos en las zonas más exclusivas. Asesoramiento permanente en la búsqueda de su próxima unidad.",
              icon: Building 
            },
            { 
              title: "Administración de Alquileres", 
              desc: "Sistemas centralizados para gestionar cobros y mantenimiento. Buscamos al inquilino ideal con riguroso estudio de garantías propietarias y laborales.",
              icon: Users2 
            },
            { 
              title: "Tasaciones Profesionales", 
              desc: "Obtenga el valor real de mercado de su propiedad en el día. Estudios comparativos de mercado realizados por martilleros matriculados.",
              icon: TrendingUp 
            },
            { 
              title: "Asesoramiento Legal", 
              desc: "Acompañamiento en todo el proceso de escrituración, trámites ante el RPI, informes de dominio e inhibición para su total tranquilidad operativa.",
              icon: ShieldCheck 
            }
          ].map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 bg-slate-50 rounded-[40px] border border-slate-100 hover:bg-white hover:border-blue-400 hover:shadow-2xl transition-all group"
            >
              <div className="flex flex-col sm:flex-row items-start gap-8">
                <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-blue-200">
                   <service.icon className="w-8 h-8" />
                </div>
                <div>
                   <h3 className="text-2xl font-black mb-4 text-slate-900 tracking-tight">{service.title}</h3>
                   <p className="text-slate-500 leading-relaxed font-medium">{service.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Contact() {
  return (
    <div className="pt-32 pb-24 bg-slate-50/50 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <section>
            <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.9] text-slate-900 tracking-tight">Estemos en <br/><span className="text-gradient">Contacto</span></h1>
            <p className="text-xl text-slate-500 mb-12 font-medium leading-relaxed">
              Vení a visitarnos a nuestras oficinas en Colegiales o completá el formulario para que un especialista se comunique con vos.
            </p>

            <div className="space-y-8">
              {[
                { icon: MapPin, title: "Oficina Central", detail: "Av. Fco. Lacroze 2909, CABA" },
                { icon: Phone, title: "Teléfonos", detail: "+54 11 4553 4483 / 4552 1211" },
                { icon: MessageCircle, title: "WhatsApp Directo", detail: "+54 9 11 5000 8888" },
                { icon: Building, title: "Horarios", detail: "Lunes a Viernes de 10:00 a 19:30" }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-center">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-blue-600 shadow-sm">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="text-[10px] uppercase font-black tracking-widest text-slate-400 mb-1">{item.title}</h5>
                    <p className="text-lg font-black text-slate-900">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white p-8 md:p-12 rounded-[48px] border border-slate-100 shadow-2xl relative">
             <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white rotate-12 shadow-xl md:flex hidden">
                <MessageCircle className="w-10 h-10" />
             </div>
             <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400">Nombre Completo</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 focus:border-blue-500 focus:bg-white outline-none transition-all font-medium" placeholder="Tu nombre..." />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">Email</label>
                    <input type="email" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 focus:border-blue-500 focus:bg-white outline-none transition-all font-medium" placeholder="tu@email.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">WhatsApp</label>
                    <input type="tel" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 focus:border-blue-500 focus:bg-white outline-none transition-all font-medium" placeholder="+54..." />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400">Consulta</label>
                  <textarea rows={4} className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 focus:border-blue-500 focus:bg-white outline-none transition-all font-medium" placeholder="Cuéntanos en qué podemos ayudarte..."></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-700 transition-colors shadow-xl shadow-blue-100">
                  Enviar Mensaje
                </button>
             </form>
          </section>
        </div>
      </div>
    </div>
  );
}
