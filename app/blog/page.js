// app/blog/page.js
export const dynamic = 'force-dynamic';
import BlogSidebar from '@/components/BlogSidebar';
import BlogList from '@/components/BlogList'; // <-- Nouveau composant
import { API_URL, API_STORAGE_URL } from '@/lib/config';

//const API_URL = 'http://localhost:8000/api';

async function getAllArticles(search = '', categorySlug = '') {
  try {
    const url = new URL(`${API_URL}/articles`);
    if (search) url.searchParams.append('search', search);
    if (categorySlug) url.searchParams.append('category', categorySlug);
    // On demande toujours la page 1 au chargement initial
    const res = await fetch(url.toString(), { cache: 'no-store' });
    if (!res.ok) throw new Error('Impossible de charger les articles');
    const data = await res.json();
    return data.data; 
  } catch (error) {
    console.error("Erreur API (Articles):", error.message);
    return [];
  }
}

async function getAllCategories() {
  try {
    const res = await fetch(`${API_URL}/categories`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Impossible de charger les catégories');
    return await res.json();
  } catch (error) {
    return [];
  }
}

export default async function BlogPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const searchQuery = resolvedSearchParams?.search || '';
  const categorySlug = resolvedSearchParams?.category || '';

  // Chargement initial côté serveur (Page 1)
  const [articles, categories] = await Promise.all([
    getAllArticles(searchQuery, categorySlug),
    getAllCategories()
  ]);

  // Titre dynamique
  let title = 'Explorez nos articles';
  if (categorySlug) {
    const currentCat = categories.find(c => c.slug === categorySlug);
    title = currentCat ? `Articles : ${currentCat.name}` : 'Articles par catégorie';
  }
  if (searchQuery) title = `Résultats pour "${searchQuery}"`;

  return (
    <>
      <section className="bg-blue-600 text-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold capitalize">
            {title}
          </h1>
          {(searchQuery || categorySlug) && (
            <p className="mt-2 text-blue-200">
              <a href="/blog" className="hover:underline">← Tout afficher</a>
            </p>
          )}
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-10">
            <aside className="md:w-1/4">
              <BlogSidebar categories={categories} />
            </aside>

            <main className="md:w-3/4">
              {/* On passe les filtres comme 'key' pour forcer le re-rendu 
                du composant quand les filtres changent (remet la page à 1)
              */}
              <BlogList 
                key={`${searchQuery}-${categorySlug}`} 
                initialArticles={articles} 
                search={searchQuery} 
                category={categorySlug} 
              />
            </main>
          </div>
        </div>
      </section>
    </>
  );
}