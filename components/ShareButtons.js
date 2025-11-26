/**
 * Composant pour les boutons de partage social
 */
export default function ShareButtons({ title, slug }) {
  // L'URL publique de votre site (à changer lors du déploiement)
  const baseUrl = 'https://techrepair-content.com'; // Mettez votre vrai domaine ici plus tard
  const articleUrl = `${baseUrl}/blog/${slug}`;
  const encodedUrl = encodeURIComponent(articleUrl);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="my-12 py-6 border-t border-b border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 text-center mb-4">Partager cet article</h3>
      <div className="flex justify-center space-x-6">
        
        {/* LinkedIn */}
        <a 
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-500 hover:text-[#0077b5] transition-colors font-medium"
        >
          <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          LinkedIn
        </a>

        {/* X (Twitter) */}
        <a 
          href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-500 hover:text-black transition-colors font-medium"
        >
          <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          X / Twitter
        </a>

        {/* Facebook */}
        <a 
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-500 hover:text-[#1877f2] transition-colors font-medium"
        >
          <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
          Facebook
        </a>

      </div>
    </div>
  );
}