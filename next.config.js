/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  webpack: (config, { isServer }) => {
    // Ignore specific warnings
    config.infrastructureLogging = {
      level: 'error',
    }
    config.ignoreWarnings = [
      { module: /node_modules\/node-fetch\/lib\/index\.js/ },
      { message: /Critical dependency: the request of a dependency is an expression/ },
    ]
    return config
  },
}

module.exports = nextConfig