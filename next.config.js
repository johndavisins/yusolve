/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  compiler: {
    removeConsole: {
      exclude: ["error"],
    },
  },
  images: {
    domains: [],
    // Rasm optimizatsiyasi
    formats: ["image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 kun
  },
  // Static assetlar uchun uzoq muddatli cache
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/videos/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
  env: {
    API: "",
  },
  async rewrites() {
    return [
      {
        source: "/build/:path*",
        destination: "/public/build/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
