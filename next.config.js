/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  images: {
    domains: ['beta.mejorconsalud.com', 'mejorconsalud.as.com'],
  },
}
