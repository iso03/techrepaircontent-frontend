// components/ContactForm.js
'use client';

// 1. On importe 'useState' pour gérer l'état du formulaire
import { useState } from 'react';
import { API_URL } from '@/lib/config';

// URL de notre API Laravel
//const API_URL = 'http://localhost:8000/api';

export default function ContactForm() {
  // 2. États pour chaque champ du formulaire
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: '',
    message: '',
  });

  // 3. États pour gérer le chargement et la réponse
  const [isLoading, setIsLoading] = useState(false);
  const [formResponse, setFormResponse] = useState({ type: '', message: '' });

  // 4. Fonction pour mettre à jour l'état quand l'utilisateur tape
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 5. Fonction pour envoyer le formulaire à l'API Laravel
  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    setIsLoading(true);
    setFormResponse({ type: '', message: '' });

    try {
      const res = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        // Si l'API renvoie une erreur (ex: validation 422)
        throw new Error(data.message || 'Une erreur de validation est survenue.');
      }

      // Succès !
      setFormResponse({ type: 'success', message: data.message });
      // On vide le formulaire
      setFormData({ name: '', email: '', phone: '', type: '', message: '' });

    } catch (error) {
      // Erreur
      setFormResponse({ type: 'error', message: error.message || 'Une erreur est survenue. Veuillez réessayer.' });
    } finally {
      setIsLoading(false);
    }
  };

  // 6. Le JSX (HTML) du composant, basé sur la maquette
  return (
    <section id="contact" className="bg-gray-50 py-20 md:py-32"> {/* id="contact" pour US001 */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Titre */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Démarrez votre transformation digitale
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Partagez-nous vos besoins et objectifs. Notre équipe vous recontactera sous 24h pour discuter de la meilleure stratégie pour votre projet.
          </p>
        </div>

        {/* Conteneur principal (2 colonnes) */}
        <div className="flex flex-col md:flex-row gap-12">

          {/* Colonne de Gauche (Infos) */}
          <div className="md:w-1/3 space-y-8">
            {/* Bloc "Pourquoi Nous Choisir ?" */}
            <div className="bg-blue-900 text-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold mb-6">Pourquoi Nous Choisir ?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-orange-400 mr-3 mt-1.5">•</span>
                  <span>Réponse garantie sous 24h</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-3 mt-1.5">•</span>
                  <span>Audit gratuit de votre présence actuelle</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-3 mt-1.5">•</span>
                  <span>Stratégie personnalisée sur mesure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-3 mt-1.5">•</span>
                  <span>Pas d'engagement sans résultats</span>
                </li>
              </ul>
            </div>
            {/* Bloc "Coordonnées" */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Coordonnées</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-orange-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <span>contact@techrepair-contact.fr</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-orange-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  <span>+33 1 23 45 67 89</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Colonne de Droite (Formulaire) */}
          <div className="md:w-2/3">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Nom complet */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom complet <span className="text-red-500">*</span></label>
                    <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                  </div>
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email professionnel <span className="text-red-500">*</span></label>
                    <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                  </div>
                  {/* Téléphone (optionnel) */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Téléphone (optionnel)</label>
                    <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                  </div>
                  {/* Type de demande */}
                  <div>
                    <label htmlFor="type" className="block text-sm font-medium text-gray-700">Type de demande <span className="text-red-500">*</span></label>
                    <select name="type" id="type" value={formData.type} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                      <option value="">Choisir...</option>
                      <option value="SEO">Optimisation SEO</option>
                      <option value="Redaction">Rédaction de Contenu</option>
                      <option value="Marketing">Stratégie Marketing</option>
                      <option value="Autre">Autre</option>
                    </select>
                  </div>
                  {/* Message */}
                  <div className="md:col-span-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Décrivez votre projet <span className="text-red-500">*</span></label>
                    <textarea name="message" id="message" rows="5" value={formData.message} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Parlez-nous de vos objectifs, défis actuels et attentes..."></textarea>
                  </div>
                </div>
                
                {/* Bouton d'envoi */}
                <div className="mt-6">
                  <button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full bg-orange-500 text-white hover:bg-orange-600 px-6 py-4 rounded-lg font-bold text-lg transition-colors disabled:opacity-50 disabled:cursor-wait"
                  >
                    {isLoading ? 'Envoi en cours...' : 'Envoyer ma Demande'}
                  </button>
                </div>
                
                {/* Messages de succès ou d'erreur */}
                {formResponse.message && (
                  <div className={`mt-4 text-center p-3 rounded-lg ${
                    formResponse.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {formResponse.message}
                  </div>
                )}
                
                <p className="text-xs text-gray-500 text-center mt-6">
                  En soumettant ce formulaire, vous acceptez d'être recontacté par notre équipe.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}