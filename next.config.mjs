/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
      // allowedOrigins: ['http://localhost:3000'], // optional
    },
  },
  // reactStrictMode: true,
  // images: { remotePatterns: [] },
};

export default nextConfig;
