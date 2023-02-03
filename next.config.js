/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/predict',
        destination: 'http://localhost:5000/predict',
      },
    ]
  },  
}

module.exports = nextConfig
