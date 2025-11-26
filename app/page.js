// app/page.js

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import BlogPreview from "@/components/BlogPreview"; // 1. Importez le composant
import ContactForm from "@/components/ContactForm";
import { API_URL } from '@/lib/config';

// URL de notre API Laravel
//const API_URL = 'http://localhost:8000/api';

/**
 * Fonction pour récupérer les articles de l'API
 * (Cette fonction doit être EN DEHORS de la fonction 'Home')
 */
async function getLatestArticles() {
  try {
    // 2. On appelle notre API Laravel
    const res = await fetch(`${API_URL}/articles`, { cache: 'no-store' });
    
    if (!res.ok) {
      throw new Error('Impossible de charger les articles');
    }
    
    const data = await res.json();
    
    // 3. On retourne les 3 premiers articles
    return data.data.slice(0, 3); 
    
  } catch (error) {
    console.error("Erreur API:", error.message);
    return []; // Retourne un tableau vide en cas d'erreur
  }
}

async function getTestimonials() {
  try {
    const res = await fetch(`${API_URL}/testimonials`, { cache: 'no-store' });
    if (!res.ok) return [];
    return await res.json();
  } catch (e) {
    return [];
  }
}


/**
 * La page d'accueil. Notez le mot-clé 'async'
 */
export default async function Home() {
  
  // Appel parallèle des données
  const [latestArticles, testimonials] = await Promise.all([
    getLatestArticles(),
    getTestimonials()
  ]);
  
  // 5. Maintenant 'latestArticles' est définie et peut être utilisée ci-dessous
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Stats />
      {/* On passe les données dynamiques */}
      <Testimonials testimonials={testimonials} />
      <BlogPreview articles={latestArticles} />
      <ContactForm />

    </main>
  );
}