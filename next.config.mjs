/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Transpile recharts so Next.js server bundle can resolve all its dependencies
  transpilePackages: ["recharts"],
}

export default nextConfig
