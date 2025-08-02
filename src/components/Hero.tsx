import React from 'react';
import { ArrowRight, CheckCircle, MapPin } from 'lucide-react';

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById('servicios');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="pt-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-2 text-blue-900">
              <MapPin size={20} />
              <span className="font-medium">Cali, Colombia</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Tu <span className="text-blue-900">Aliada Estratega</span> para 
              hacer crecer tu negocio
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Solución integral para emprendedores y PYMES que necesitan apoyo práctico 
              en marketing, branding, finanzas y gestión de diligencias. 
              <strong className="text-blue-900"> Simplificamos tu vida y hacemos crecer tu negocio.</strong>
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-500" size={20} />
                <span className="text-gray-700">Branding y diseño visual express</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-500" size={20} />
                <span className="text-gray-700">Marketing digital para PYMES</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-500" size={20} />
                <span className="text-gray-700">Finanzas para emprendedores</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-500" size={20} />
                <span className="text-gray-700">Asistente personal y diligencista</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToServices}
                className="bg-blue-900 text-white px-8 py-4 rounded-full hover:bg-blue-800 transition-colors flex items-center justify-center gap-2 font-semibold text-lg"
              >
                Ver servicios
                <ArrowRight size={20} />
              </button>
              <button 
                onClick={scrollToContact}
                className="bg-amber-500 text-white px-8 py-4 rounded-full hover:bg-amber-600 transition-colors font-semibold text-lg"
              >
                Agenda tu cita
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-3xl p-8 shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Profesional trabajando" 
                className="rounded-2xl w-full h-80 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-900">100+</div>
                  <div className="text-gray-600">Empresas atendidas</div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-amber-500 p-4 rounded-2xl shadow-lg">
                <div className="text-center text-white">
                  <div className="text-2xl font-bold">5★</div>
                  <div className="text-sm">Calificación</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;