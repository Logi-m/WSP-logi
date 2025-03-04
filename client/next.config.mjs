/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin"
import path from 'path'
import { fileURLToPath } from 'url'

const withNextIntl = createNextIntlPlugin()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "orderific.com",
        port: "",
        pathname: "/admin_images/**",
      },
      {
        protocol: "https",
        hostname: "www.publiish.io",
        port: "",
        pathname: "/**",
      },
    ],
    domains: ['www.publiish.io'],
  },
  transpilePackages: ['@tanstack/react-query', '@tanstack/query-core'],
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@tanstack/react-query': path.resolve(__dirname, 'node_modules/@tanstack/react-query'),
    }
    return config
  },
}

export default withNextIntl(nextConfig)
