import React, { useState } from 'react';
import { Palette, Megaphone, Calculator, Users, ArrowRight } from 'lucide-react';

const Services = () => {
  const [selectedService, setSelectedService] = useState(0);

  const services = [
    {
      icon: <Palette className="text-purple-600" size={32} />,
      title: "Branding y Diseño Visual Express",
      description: "Creamos la identidad visual de tu marca de forma rápida y profesional",
      features: [
        "Diseño de logotipos profesionales",
        "Plantillas personalizadas para Canva",
        "Identidad visual básica completa",
        "Manual de marca digital",
        "Paleta de colores y tipografías"
      ],
      price: "Desde $150.000 COP",
      time: "3-5 días hábiles"
    },
    {
      icon: <Megaphone className="text-blue-600" size={32} />,
      title: "Marketing Digital para PYMES",
      description: "Posicionamos tu negocio en el mundo digital con estrategias efectivas",
      features: [
        "Creación de perfiles en Google Maps",
        "Configuración Facebook e Instagram Business",
        "Redacción optimizada para redes sociales",
        "Estrategia de contenido mensual",
        "Análisis de competencia local"
      ],
      price: "Desde $200.000 COP",
      time: "1-2 semanas"
    },
    {
      icon: <Calculator className="text-green-600" size={32} />,
      title: "Finanzas para Emprendedores",
      description: "Organizamos tus finanzas para que puedas tomar decisiones rentables",
      features: [
        "Organización de flujo de caja",
        "Plantillas personalizadas en Excel",
        "Asesoría para fijación de precios",
        "Indicadores financieros básicos",
        "Plan de mejora financiera"
      ],
      price: "Desde $120.000 COP",
      time: "1 semana"
    },
    {
      icon: <Users className="text-orange-600" size={32} />,
      title: "Asistente Personal y Diligencista",
      description: "Te ayudamos con todas esas gestiones que te quitan tiempo valioso",
      features: [
        "Gestión de citas para pasaporte",
        "Vueltas bancarias y financieras",
        "Representación en asambleas",
        "Gestiones ante entidades públicas",
        "Seguimiento personalizado"
      ],
      price: "Desde $80.000 COP/gestión",
      time: "Según gestión"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos soluciones completas y personalizadas para que tu emprendimiento 
            alcance el siguiente nivel de crecimiento
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setSelectedService(index)}
              className={`p-6 rounded-2xl transition-all duration-300 text-left ${
                selectedService === index
                  ? 'bg-white shadow-lg border-2 border-blue-900'
                  : 'bg-white shadow-md hover:shadow-lg border-2 border-transparent'
              }`}
            >
              <div className="flex items-center gap-4 mb-3">
                {service.icon}
                <h3 className="font-semibold text-gray-900 text-lg">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                {service.description}
              </p>
            </button>
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                {services[selectedService].icon}
                <h3 className="text-3xl font-bold text-gray-900">
                  {services[selectedService].title}
                </h3>
              </div>
              
              <p className="text-lg text-gray-600 mb-8">
                {services[selectedService].description}
              </p>
              
              <div className="space-y-4 mb-8">
                {services[selectedService].features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <div className="bg-blue-50 px-6 py-3 rounded-full">
                  <span className="text-blue-900 font-bold text-lg">
                    {services[selectedService].price}
                  </span>
                </div>
                <div className="text-gray-600">
                  <span className="font-medium">Tiempo estimado:</span> {services[selectedService].time}
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-6">
                ¿Listo para comenzar?
              </h4>
              <p className="text-blue-100 mb-8">
                Agenda una consulta gratuita de 30 minutos y descubre cómo podemos 
                ayudar a hacer crecer tu negocio.
              </p>
              <div className="space-y-4">
                <button 
                  onClick={scrollToContact}
                  className="w-full bg-amber-500 text-white px-6 py-4 rounded-full hover:bg-amber-600 transition-colors flex items-center justify-center gap-2 font-semibold"
                >
                  Solicitar presupuesto
                  <ArrowRight size={20} />
                </button>
                <a 
                  href="https://wa.me/573001234567?text=Hola, me interesa conocer más sobre sus servicios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-500 text-white px-6 py-4 rounded-full hover:bg-green-600 transition-colors flex items-center justify-center gap-2 font-semibold"
                >
                  Contáctanos por WhatsApp
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;