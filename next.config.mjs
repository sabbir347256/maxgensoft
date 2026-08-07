/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "thenthbit.com",
      },
      {
        protocol: "https",
        hostname: "niftysol.com",
      },
      {
        protocol: "https",
        hostname: "gegok12.com",
      },
    ],
  },
  /* config options here */
  reactCompiler: true,
};

export default nextConfig;
