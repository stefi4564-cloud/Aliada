import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-blue-900">
              Aliada Estratega
            </h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-blue-900 transition-colors">
                Inicio
              </button>
              <button onClick={() => scrollToSection('servicios')} className="text-gray-700 hover:text-blue-900 transition-colors">
                Servicios
              </button>
              <button onClick={() => scrollToSection('testimonios')} className="text-gray-700 hover:text-blue-900 transition-colors">
                Testimonios
              </button>
              <button onClick={() => scrollToSection('contacto')} className="text-gray-700 hover:text-blue-900 transition-colors">
                Contacto
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="bg-amber-500 text-white px-6 py-2 rounded-full hover:bg-amber-600 transition-colors flex items-center gap-2 font-semibold"
              >
                Agenda tu cita
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-900"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button onClick={() => scrollToSection('inicio')} className="block px-3 py-2 text-gray-700 w-full text-left">
              Inicio
            </button>
            <button onClick={() => scrollToSection('servicios')} className="block px-3 py-2 text-gray-700 w-full text-left">
              Servicios
            </button>
            <button onClick={() => scrollToSection('testimonios')} className="block px-3 py-2 text-gray-700 w-full text-left">
              Testimonios
            </button>
            <button onClick={() => scrollToSection('contacto')} className="block px-3 py-2 text-gray-700 w-full text-left">
              Contacto
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="bg-amber-500 text-white px-4 py-2 rounded-full mt-4 w-full font-semibold"
            >
              Agenda tu cita
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;