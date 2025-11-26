/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '/storage/**', // On n'autorise que les images du dossier 'storage'
      },
      {
        protocol: 'https',
        hostname: 'techrepair-backend-6jnk.onrender.com', // <-- VOTRE DOMAINE RENDER EXACT
        port: '',
        pathname: '/storage/**',
      },
    ],
  },
  
};

export default nextConfig;
