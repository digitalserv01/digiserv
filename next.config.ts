import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
  async redirects() {
    return [
      {
        source: '/blog/les-10-questions-dentretien-en-2025-et-comment-y-repondre',
        destination: '/blog/les-10-questions-dentretien-dembauche-en-2025-et-comment-y-repondre',
        permanent: true,
      },
      {
        source: '/blog/10-taches-automatiser-ia-booster-pme',
        destination: '/blog/10-taches-a-automatiser-avec-lia-pour-votre-pme',
        permanent: true,
      },
      {
        source: '/blog/google-ads-500-euros-pme',
        destination: '/blog/google-ads-campagnes-rentables-500-euros-pme',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
