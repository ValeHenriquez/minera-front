/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ["images.unsplash.com", "via.placeholder.com", "media.licdn.com"],
    },
    webpack: (config, { isServer }) => {
      // Soluciona el problema de resolución de 'fs' en pg-connection-string
      if (!isServer) {
        config.resolve.fallback = {
          fs: false,
        };
      }
      return config;
    },
  };
  
  module.exports = nextConfig;
  