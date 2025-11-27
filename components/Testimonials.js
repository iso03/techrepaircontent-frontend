// components/Testimonials.js
'use client';
import Image from 'next/image';
import { API_STORAGE_URL } from '@/lib/config';// api storage

//const API_STORAGE_URL = 'http://localhost:8000/storage';

// Sous-composant Stars (inchangé)
const Stars = ({ rating }) => (
  <div className="flex text-orange-400">
    {[...Array(rating)].map((_, i) => (
      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
    ))}
  </div>
);

// Accepte 'testimonials' comme prop
export default function Testimonials({ testimonials = [] }) {
  
  // Si pas de témoignages, on n'affiche pas la section (ou on affiche un message vide)
  if (!testimonials.length) return null;

  return (
    <section className="bg-white py-20 md:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block bg-blue-100 text-blue-600 text-sm font-semibold px-4 py-1 rounded-full">Ils nous font confiance</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900">Preuve sociale de notre excellence</h2>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex justify-between items-start">
                <Stars rating={testimonial.rating} />
                {/* Icône citation... */}
              </div>
              
              <p className="mt-4 text-lg text-gray-700 italic">"{testimonial.content}"</p>
              
              <div className="mt-6 flex items-center">
                {/* Gestion de l'image : API ou Placeholder */}
                <Image
                  src={testimonial.image 
                    ? `${API_STORAGE_URL}/${testimonial.image}` 
                    : `https://placehold.co/56x56/E2E8F0/64748B?text=${testimonial.name.charAt(0)}&font=roboto`
                  }
                  alt={testimonial.name}
                  width={56}
                  height={56}
                  className="rounded-full object-cover h-14 w-14"
                  unoptimized={true}
                />
                <div className="ml-4">
                  <p className="text-lg font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">
                    {testimonial.position} {testimonial.company ? `• ${testimonial.company}` : ''}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}