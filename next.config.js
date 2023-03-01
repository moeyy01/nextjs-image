/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["upcdn.io", "replicate.delivery", "replicate-delivery.moeyy.xyz", "age-ai.moeyy.cn", "photo-restorer.moeyy.cn", "paint-by-text.moeyy.cn", "scribble-diffusion.moeyy.cn", "user-images.githubusercontent.com", "ageai-images.moeyy.workers.dev"],
  },
}

module.exports = nextConfig
