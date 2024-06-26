/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        hostname: 'skillicons.dev',
      },
      {
        hostname: 'cdn.simpleicons.org',
      },
    ],
  },
}

export default nextConfig
