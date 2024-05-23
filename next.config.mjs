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
      }
    ]
  },
  compiler: {
    styledComponents: true
  },
};

export default nextConfig;
