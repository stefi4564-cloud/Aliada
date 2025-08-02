import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "¿Cuánto tiempo toma completar un proyecto?",
      answer: "Los tiempos varían según el servicio: Branding (3-5 días), Marketing Digital (1-2 semanas), Finanzas (1 semana), y Diligencias (según el tipo de gestión). Siempre te informamos los tiempos específicos antes de comenzar."
    },
    {
      question: "¿Ofrecen servicios para empresas fuera de Cali?",
      answer: "Sí, trabajamos con clientes de toda Colombia. Para servicios digitales como branding, marketing y finanzas trabajamos 100% virtual. Para diligencias presenciales, nos enfocamos en Cali y municipios cercanos como Palmira, Jamundí y Yumbo."
    },
    {
      question: "¿Cuáles son las formas de pago disponibles?",
      answer: "Aceptamos transferencias bancarias, pagos por PSE, Nequi, Daviplata y efectivo. Para proyectos mayores a $300.000, ofrecemos la opción de pago en 2 cuotas (50% inicial, 50% al entregar)."
    },
    {
      question: "¿Qué incluye la consulta gratuita inicial?",
      answer: "En la consulta gratuita de 30 minutos analizamos tu situación actual, identificamos oportunidades de mejora, te explicamos cómo podemos ayudarte y te damos un presupuesto personalizado sin compromiso."
    },
    {
      question: "¿Ofrecen garantía en sus servicios?",
      answer: "Sí, todos nuestros servicios tienen garantía. Si no quedas satisfecho con el resultado, trabajamos hasta lograr tu satisfacción o te devolvemos tu dinero. Tu éxito es nuestro éxito."
    },
    {
      question: "¿Puedo contratar varios servicios al mismo tiempo?",
      answer: "¡Por supuesto! Muchos clientes contratan paquetes completos. Ofrecemos descuentos especiales para combinaciones de servicios. Un paquete popular incluye branding + marketing digital con 15% de descuento."
    },
    {
      question: "¿Qué necesito para comenzar a trabajar con ustedes?",
      answer: "Solo necesitas tener claridad sobre lo que quieres lograr con tu negocio. Nosotros nos encargamos del resto. En la primera reunión definimos objetivos, plazos y comenzamos a trabajar de inmediato."
    },
    {
      question: "¿Dan seguimiento después de terminar el proyecto?",
      answer: "Sí, ofrecemos 30 días de soporte gratuito después de entregar cualquier proyecto. También tenemos planes de mantenimiento y seguimiento continuo para quienes deseen apoyo permanente."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-gray-600">
            Resolvemos las dudas más comunes sobre nuestros servicios
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openItems.includes(index) ? (
                  <ChevronUp className="text-blue-900 flex-shrink-0" size={24} />
                ) : (
                  <ChevronDown className="text-blue-900 flex-shrink-0" size={24} />
                )}
              </button>
              
              {openItems.includes(index) && (
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-900 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              ¿Tienes otra pregunta?
            </h3>
            <p className="text-blue-100 mb-6">
              Estamos aquí para resolver todas tus dudas. Contáctanos sin compromiso.
            </p>
            <a 
              href="https://wa.me/573001234567?text=Hola, tengo una pregunta sobre sus servicios"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 text-white px-8 py-4 rounded-full hover:bg-amber-600 transition-colors font-semibold inline-block"
            >
              Pregúntanos por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;