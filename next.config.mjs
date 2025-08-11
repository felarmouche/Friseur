/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.squarespace-cdn.com', pathname: '/content/**' },
      { protocol: 'https', hostname: 'www.kaylashaarkunst.de', pathname: '/**' }
    ]
  },
  experimental: { serverActions: { bodySizeLimit: '2mb' } },
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' }
      ]
    }
  ]
};
export default nextConfig;
