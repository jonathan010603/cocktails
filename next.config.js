/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const withCSS = require('@zeit/next-css');

module.exports = nextConfig, withCSS({})
