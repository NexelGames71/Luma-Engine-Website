/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    domains: ['github.com', 'cdn.netlify.com'],
    unoptimized: false,
  },
  // Optimize for Netlify
  trailingSlash: false,
  poweredByHeader: false,
}

module.exports = nextConfig

