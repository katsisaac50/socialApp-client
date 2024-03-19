// module.exports = {
//     images: {
//       domains: ['res.cloudinary.com', 'zos.alipayobjects.com'],
//       deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
//     },
//   };

module.exports = {
  exportPathMap: async function (defaultPathMap) {
    // Exclude pages with getServerSideProps from export
    delete defaultPathMap['/post/view/[_id]'];
    return defaultPathMap;
  },
};


//   /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ['res.cloudinary.com', 'zos.alipayobjects.com'],
//     deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
//   },
// basePath: "/socialApp",
//   output: "export",  // <=== enables static exports
//   reactStrictMode: true,
// };

// module.exports = nextConfig;