/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'scontent.cdninstagram.com',
      },
      {
        protocol: 'https',
        hostname: 'sa-east-1.graphassets.com'
      }
    ]
  },
  compiler: {
    styledComponents: true
  },
};

export default nextConfig;
