/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'wo6aepnr',
    NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        // Optional: more specific if you want
        // port: '',
        // pathname: '/images/**',
      },
    ],
  },
  eslint: {
    // Skip ESLint during builds (including on Vercel)
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Skip TypeScript type checking during builds (including on Vercel)
    // !! WARNING: This can lead to runtime errors in production!
    ignoreBuildErrors: true,
  },

}

module.exports = nextConfig