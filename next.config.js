/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    domains: ['ik.imagekit.io'],
    unoptimized: true
  },
  transpilePackages: ['@mui/x-charts'],
  // output: 'export',
  // trailingSlash: true
}

module.exports = nextConfig
