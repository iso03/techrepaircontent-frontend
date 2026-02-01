// app/blog/[slug]/page.js
export const dynamic = 'force-dynamic';
import Link from 'next/link';
import Image from 'next/image';
import ShareButtons from '@/components/ShareButtons';
import { API_URL, API_STORAGE_URL } from '@/lib/config';

//const API_URL = 'http://localhost:8000/api'; // <-- CORRECTION
//const API_STORAGE_URL = 'http://localhost:8000/storage'; // <-- CORRECTION

/**
 * Fonction pour récupérer UN article par son SLUG
 * La fonction reçoit maintenant 'slug' en argument
 */
async function getArticle(slug) {
  try {
    const res = await fetch(`${API_URL}/articles/${slug}`, { cache: 'no-store' });
    if (!res.ok) {
        // On propage l'erreur 404
        //console.log(res);
        throw new Error('Article non trouvé');
    }
    return await res.json();
  } catch (error) {
    console.error("Erreur API (Article):", error.message);
    return null; // Retourne null en cas d'erreur
  }
}

/**
 * Composant pour la carte "Articles similaires"
 * (Inchangé)
 */
function RelatedArticleCard({ article }) {
  // ... (votre code pour RelatedArticleCard est ici - pas besoin de le changer)
  return (
    <Link 
      href={`/blog/${article.slug}`} 
      className="block group bg-white rounded-lg shadow border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md"
    >
      <div className="overflow-hidden">
        <Image
          src={`${API_STORAGE_URL}/${article.cover_image}`}
          alt={article.title}
          width={400}
          height={225}
          className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
          style={{ height: 'auto' }}
          unoptimized={true}
          priority={true}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
          {article.title}
        </h3>
      </div>
    </Link>
  );
}


/**
 * La Page Article (Dynamique)
 * 'params' est fourni par Next.js
 */
export default async function ArticlePage(props) {
  
  // --- CORRECTION DE L'ERREUR PROMISE ---
  // On "attend" que la prop 'params' (qui est une Promise) se résolve
  const params = await props.params;
  
  // Maintenant, on peut accéder à 'slug'
  const { slug } = params; 
  
  // On appelle getArticle AVEC le slug
  const article = await getArticle(slug);
  // --- FIN DE LA CORRECTION ---

  // Si l'article n'est pas trouvé
  if (!article) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold">Article non trouvé</h1>
        <Link href="/blog" className="text-blue-600 hover:underline mt-4 inline-block">
          Retour au blog
        </Link>
      </div>
    );
  }

  const relatedArticles = article.related_articles || [];

  return (
    <div className="bg-white">
      {/* 1. Image de couverture et Métadonnées */}
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        {/* ... (Le reste de votre JSX pour afficher l'article est ici) ... */}
        {/* Fil d'Ariane (Breadcrumb) */}
        <div className="text-sm text-gray-500 mb-4">
          <Link href="/blog" className="hover:underline">Blog</Link>
          <span className="mx-2">&gt;</span>
          <span className="text-gray-700">{article.title}</span>
        </div>
        
        {/* Titre */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          {article.title}
        </h1>
        
        {/* Métadonnées (Auteur/Date/Temps de lecture) */}
        <div className="flex items-center text-gray-500 text-sm mb-8">
          <span>Par TechRepair</span>
          <span className="mx-2">•</span>
          <span>Publié le {new Date(article.published_at || article.created_at).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
          <span className="mx-2">•</span>
          <span>{article.reading_time || 5} min de lecture</span>
        </div>

        {/* Image de couverture */}
        <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg mb-12">
          <Image
            src={`${API_STORAGE_URL}/${article.cover_image}`}
            alt={article.title}
            fill
            className="object-cover"
            unoptimized={true}
          />
        </div>

        {/* 2. Contenu de l'article */}
        <div 
          className="prose prose-lg lg:prose-xl max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
        
        {/* 3. Partage social (CdC 2.3) - Fonctionnel */}
        <ShareButtons title={article.title} slug={article.slug} />
      </div>

      {/* 4. Section Articles Similaires (CdC 2.3) */}
      {relatedArticles.length > 0 && (
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
              Tendances et Perspectives du Secteur
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((related) => (
                <RelatedArticleCard key={related.id} article={related} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}