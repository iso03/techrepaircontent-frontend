/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'api.techrepaircontent.com', // <--- CORRECTION : Juste le domaine, sans 'https://'
        port: '',
        pathname: '/storage/**',
      },
    ],
  },
  // On s'assure que l'export statique est bien désactivé pour Vercel
  // output: 'export', 
};

export default nextConfig;