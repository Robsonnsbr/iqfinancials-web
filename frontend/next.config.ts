const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/robots.txt",
        destination: "/api/robots.txt",
      },
    ];
  },
};

export default nextConfig;
