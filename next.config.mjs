/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <-- Required for static export!
  trailingSlash: true, // Ensures folder-based routing works in shared hosting
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Because static export doesn't work with next/image optimization
  },
};

export default nextConfig;