import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Aliada Estratega</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Tu solución integral para emprendedores y PYMES. Simplificamos tu vida 
              y hacemos crecer tu negocio con servicios profesionales en Cali y toda Colombia.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/aliadaestrateqa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://instagram.com/aliadaestrateqa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-pink-600 p-3 rounded-full hover:bg-pink-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://linkedin.com/company/aliadaestrateqa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-700 p-3 rounded-full hover:bg-blue-800 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <button 
                  onClick={() => scrollToSection('servicios')}
                  className="hover:text-amber-500 transition-colors"
                >
                  Branding y Diseño Visual
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servicios')}
                  className="hover:text-amber-500 transition-colors"
                >
                  Marketing Digital
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servicios')}
                  className="hover:text-amber-500 transition-colors"
                >
                  Finanzas para Emprendedores
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servicios')}
                  className="hover:text-amber-500 transition-colors"
                >
                  Asistente Personal
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-3">
                <Phone size={16} />
                <span>+57 321 310 1999</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} />
                <span>stephaniarodriguezvilla@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} />
                <span>Cali, Valle del Cauca</span>
              </div>
            </div>
            
            <h4 className="text-lg font-semibold mb-4 mt-8">Enlaces</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className="hover:text-amber-500 transition-colors"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('testimonios')}
                  className="hover:text-amber-500 transition-colors"
                >
                  Testimonios
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contacto')}
                  className="hover:text-amber-500 transition-colors"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Aliada Estratega. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm text-gray-400 mt-4 md:mt-0">
              <a href="#" className="hover:text-amber-500 transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-amber-500 transition-colors">
                Términos y Condiciones
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
