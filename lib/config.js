// lib/config.js

// Si la variable d'environnement existe (sur Vercel), on l'utilise.
// Sinon (en local), on utilise localhost.
export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

// Pareil pour le stockage, mais on retire '/api' et on ajoute '/storage' si nécessaire
// Note : Sur Render, l'URL de base est la même
export const API_STORAGE_URL = process.env.NEXT_PUBLIC_STORAGE_URL || 'http://localhost:8000/storage';