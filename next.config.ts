// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
      typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
  images: {
    domains: ['images.unsplash.com'],
  },
}

module.exports = nextConfig