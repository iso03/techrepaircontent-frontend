// components/BlogSidebar.js
'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function BlogSidebar({ categories }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Récupère la catégorie active depuis l'URL (ex: ?category=marketing)
  const activeCategory = searchParams.get('category');
  
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');

  const handleSearch = (e) => {
    e.preventDefault();
    // On garde la catégorie si elle existe déjà lors d'une recherche
    const params = new URLSearchParams();
    if (searchTerm.trim()) params.set('search', searchTerm);
    if (activeCategory) params.set('category', activeCategory);
    
    router.push(`/blog?${params.toString()}`);
  };

  const activeClass = "px-4 py-2 rounded-full text-sm font-medium bg-blue-600 text-white inline-block transition-colors";
  const inactiveClass = "px-4 py-2 rounded-full text-sm font-medium bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 inline-block transition-colors";

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 sticky top-28">
      
      {/* Formulaire de recherche */}
      <form onSubmit={handleSearch} className="relative mb-6">
        <input
          type="text"
          placeholder="Rechercher un article..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </form>
      
      <h3 className="text-xl font-bold text-gray-900 mb-4">Catégories</h3>
      
      {/* Liste des catégories */}
      <div className="flex flex-wrap gap-2">
        {/* Lien "Tous" : On retire le paramètre category */}
        <Link
          href={searchTerm ? `/blog?search=${searchTerm}` : '/blog'}
          className={!activeCategory ? activeClass : inactiveClass}
        >
          Tous
        </Link>

        {categories.map((category) => (
          <Link
            key={category.id}
            // On utilise le SLUG ici pour le SEO
            href={`/blog?category=${category.slug}${searchTerm ? `&search=${searchTerm}` : ''}`}
            // On vérifie si c'est la catégorie active
            className={activeCategory === category.slug ? activeClass : inactiveClass}
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
}