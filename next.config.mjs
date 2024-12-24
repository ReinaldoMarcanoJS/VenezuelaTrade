/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images : {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol:  'https',
        hostname: 'placeimg.com',
      },
       {
        protocol:  'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'media.istockphoto.com',
      },
      {
        protocol: "https",
        hostname: "sdcdn.io"
      },
      {
        protocol: "https",
        hostname: "pravatar.cc"
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc"
      },
      {
        protocol: "https",
        hostname: "sdcdn.io"
      }
      
      
    
    ]}
};

export default nextConfig;
