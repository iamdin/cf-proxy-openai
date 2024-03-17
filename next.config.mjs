/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/openai/:path*",
        destination: "/api/openai/:path*",
      },
      {
        source: "/groq/:path*",
        destination: "/api/groq/:path*",
      },
      {
        source: "/:path*",
        destination: "/api/proxy",
      },
    ];
  },
};

export default nextConfig;
