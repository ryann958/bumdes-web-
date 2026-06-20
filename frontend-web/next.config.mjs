/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['rdevstudio.web.id', 'rdevstudio.my.id', 'localhost:3000'],
  generateBuildId: async () => {
    return 'build-' + Date.now();
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://127.0.0.1:5001/api/:path*',
      },
    ];
  },
};

export default nextConfig;
