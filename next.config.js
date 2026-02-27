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
    // like ['domen.uz']
    domains: [],
  },
  env: {
    // like base url
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
