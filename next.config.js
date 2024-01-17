// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig
// Next.js API route support: https://nextjs.org/docs/api-

/** @type {import('next').NextConfig} */

module.exports = {
  eslint: {
    ignoreDuringBuilds: false,
    dirs: ["src"] // Only run ESLint on the 'src' directory during production builds (next build)
  }
};
