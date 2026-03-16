/** @type {import('next').NextConfig} */
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const nextConfig = {
  webpack: (config, { webpack }) => {
    config.plugins.push(
      new webpack.NormalModuleReplacementPlugin(/^pdfjs-dist$/, (resource) => {
        resource.request = path.join(__dirname, './node_modules/pdfjs-dist/webpack.mjs')
      })
    )
    return config
  },
}

export default nextConfig
