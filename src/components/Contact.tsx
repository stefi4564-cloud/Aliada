import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí se integraría con un servicio de email
    const whatsappMessage = `Hola, soy ${formData.name}. Estoy interesado en ${formData.service}. Mi mensaje: ${formData.message}. Mi email: ${formData.email}, teléfono: ${formData.phone}`;
    window.open(`https://wa.me/573213101999?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Hablemos de tu proyecto
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos aquí para ayudarte a hacer crecer tu negocio. 
            Contáctanos y recibe una consulta gratuita de 30 minutos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Información de contacto
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-900 p-3 rounded-full">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Teléfono</p>
                    <p className="text-gray-600">+57 321 310 1999</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-blue-900 p-3 rounded-full">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">contacto@aliadaestrateqa.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-blue-900 p-3 rounded-full">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Ubicación</p>
                    <p className="text-gray-600">Cali, Valle del Cauca, Colombia</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-blue-900 p-3 rounded-full">
                    <Clock className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Horario de atención</p>
                    <p className="text-gray-600">Lun - Vie: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Sáb: 9:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl p-8 text-white">
              <h4 className="text-xl font-bold mb-4">
                ¿Prefieres hablar directamente?
              </h4>
              <p className="text-blue-100 mb-6">
                Agenda una videollamada gratuita de 30 minutos y conversemos sobre tu proyecto.
              </p>
              <a 
                href="https://wa.me/573213101999?text=Hola, me gustaría agendar una videollamada gratuita para hablar sobre mi proyecto"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-500 text-white px-6 py-3 rounded-full hover:bg-amber-600 transition-colors font-semibold inline-block"
              >
                Agendar videollamada
              </a>
            </div>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  placeholder="+57 300 123 4567"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Servicio de interés *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="Branding y Diseño Visual">Branding y Diseño Visual</option>
                  <option value="Marketing Digital">Marketing Digital para PYMES</option>
                  <option value="Finanzas para Emprendedores">Finanzas para Emprendedores</option>
                  <option value="Asistente Personal">Asistente Personal y Diligencista</option>
                  <option value="Paquete Completo">Paquete Completo</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Cuéntanos sobre tu proyecto *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  placeholder="Describe tu proyecto, objetivos y cómo podemos ayudarte..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-900 text-white px-8 py-4 rounded-full hover:bg-blue-800 transition-colors flex items-center justify-center gap-2 font-semibold text-lg"
              >
                Solicitar presupuesto
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
