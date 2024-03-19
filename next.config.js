// module.exports = {
//     images: {
//       domains: ['res.cloudinary.com', 'zos.alipayobjects.com'],
//       deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
//     },
//   };


  /** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com', 'zos.alipayobjects.com'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

module.exports = nextConfig;