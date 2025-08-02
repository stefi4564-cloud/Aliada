import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "María González",
      business: "Boutique Luna Bella",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300",
      rating: 5,
      text: "Aliada Estratega transformó completamente mi negocio. Mi boutique ahora tiene una presencia digital profesional y mis ventas han aumentado un 40%. El equipo es increíblemente profesional y comprometido.",
      service: "Marketing Digital"
    },
    {
      name: "Carlos Rodríguez",
      business: "Restaurante El Fogón",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300",
      rating: 5,
      text: "La asesoría financiera fue exactamente lo que necesitaba. Ahora tengo control total sobre mis costos y puedo tomar decisiones informadas. Mi restaurante es más rentable que nunca.",
      service: "Finanzas para Emprendedores"
    },
    {
      name: "Ana Martínez",
      business: "Spa Relajante",
      image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=300",
      rating: 5,
      text: "El branding que crearon para mi spa es simplemente perfecto. Mis clientes siempre comentan lo profesional que se ve todo. La inversión valió cada peso.",
      service: "Branding y Diseño"
    },
    {
      name: "Luis Fernández",
      business: "Consultorio Dental",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300",
      rating: 5,
      text: "Me ayudaron con todas las gestiones para abrir mi consultorio. Desde documentos hasta permisos, se encargaron de todo mientras yo me enfocaba en mis pacientes.",
      service: "Asistente Personal"
    }
  ];

  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Más de 100 emprendedores y PYMES han confiado en nosotros para hacer crecer sus negocios
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-3xl p-8 relative hover:shadow-lg transition-shadow duration-300"
            >
              <Quote className="text-blue-900 opacity-20 absolute top-6 right-6" size={40} />
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600">{testimonial.business}</p>
                  <div className="flex items-center mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={16} />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                "{testimonial.text}"
              </p>
              
              <div className="bg-blue-900 text-white px-4 py-2 rounded-full text-sm font-medium inline-block">
                {testimonial.service}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              ¿Quieres ser nuestro próximo caso de éxito?
            </h3>
            <p className="text-blue-100 mb-6 text-lg">
              Únete a más de 100 emprendedores que han transformado sus negocios con nuestras soluciones
            </p>
            <a 
              href="https://wa.me/573001234567?text=Hola, quiero conocer más sobre sus servicios y casos de éxito"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 text-white px-8 py-4 rounded-full hover:bg-amber-600 transition-colors font-semibold text-lg inline-block"
            >
              Conversemos sobre tu proyecto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;