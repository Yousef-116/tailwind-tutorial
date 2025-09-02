/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // 👈 disables the Image Optimization API
  },
};

export default nextConfig;
