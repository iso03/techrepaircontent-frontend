// components/ArticleCard.js
'use client';

import Link from 'next/link';
import Image from 'next/image';

const API_STORAGE_URL = 'http://localhost:8000/storage';

export default function ArticleCard({ article }) {
  return (
    <Link 
      href={`/blog/${article.slug}`} 
      className="block group overflow-hidden bg-white rounded-2xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      <div className="overflow-hidden relative h-56">
        <Image
          src={`${API_STORAGE_URL}/${article.cover_image}`}
          alt={article.title}
          width={400}
          height={225}
          className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
          style={{ height: 'auto' }}
          unoptimized={true}
        />
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <span className="font-medium">{article.categories[0]?.name || 'Non classé'}</span>
          <span className="mx-2">•</span>
          <span>{article.reading_time || 5} min</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
          {article.title}
        </h3>
      </div>
    </Link>
  );
}