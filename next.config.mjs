/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "/api/proxy",
      },
    ];
  },
};

export default nextConfig;
