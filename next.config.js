/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    async rewrites() {
      return [
        // Rewrite /blog/{id} to /blog/[id]
        {
          source: '/blog/:id',
          destination: '/blog/[id]',
        },
      ];
    },
  };
