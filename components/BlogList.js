// components/BlogList.js
'use client';

import { useState } from 'react';
import ArticleCard from '@/components/ArticleCard';

const API_URL = 'http://localhost:8000/api';

export default function BlogList({ initialArticles, search, category }) {
  
  // État pour stocker les articles (on commence avec ceux de la page 1)
  const [articles, setArticles] = useState(initialArticles);
  
  // État pour la page actuelle
  const [page, setPage] = useState(1);
  
  // État pour savoir s'il reste des pages à charger
  const [hasMore, setHasMore] = useState(initialArticles.length >= 10); // Si < 10 au début, pas de page 2
  
  // État de chargement
  const [isLoading, setIsLoading] = useState(false);

  // Fonction pour charger la page suivante
  const loadMore = async () => {
    setIsLoading(true);
    const nextPage = page + 1;
    
    try {
      // On construit l'URL avec tous les filtres
      const url = new URL(`${API_URL}/articles`);
      url.searchParams.append('page', nextPage);
      if (search) url.searchParams.append('search', search);
      if (category) url.searchParams.append('category', category);

      const res = await fetch(url.toString());
      const data = await res.json();
      
      const newArticles = data.data;

      // On ajoute les nouveaux articles à la liste existante
      setArticles([...articles, ...newArticles]);
      
      // On met à jour la page
      setPage(nextPage);

      // S'il y a moins de 10 articles reçus, c'est qu'on a atteint la fin
      if (newArticles.length < 10) {
        setHasMore(false);
      }

    } catch (error) {
      console.error("Erreur lors du chargement :", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Grille d'articles */}
      {articles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-gray-500 bg-white rounded-lg shadow">
          <p className="text-xl">Aucun article trouvé.</p>
        </div>
      )}

      {/* Bouton Voir Plus */}
      {hasMore && (
        <div className="text-center mt-12">
          <button 
            onClick={loadMore}
            disabled={isLoading}
            className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Chargement...' : 'Voir Plus'}
          </button>
        </div>
      )}
    </>
  );
}