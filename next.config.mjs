/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure static assets are properly served
  assetPrefix: '',
  
  // Configure image optimization
  images: {
    unoptimized: true,
  },
  
  // Ensure proper headers for static assets
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
