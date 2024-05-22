/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'picsum.photos',
      }
    ]
  },
  compiler: {
    styledComponents: true
  },
};

export default nextConfig;
