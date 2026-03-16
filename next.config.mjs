/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['pdfjs-dist'],
  webpack: (config) => {
    config.resolve.alias['pdfjs-dist'] = 'pdfjs-dist/webpack.mjs'
    return config
  },
  experimental: {
    turbo: {
      resolveAlias: {
        'pdfjs-dist': 'pdfjs-dist/webpack.mjs',
      },
    },
  },
}

export default nextConfig
