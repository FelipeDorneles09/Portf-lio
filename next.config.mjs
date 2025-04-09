import path from 'path';
import { fileURLToPath } from 'url';
import { withSentryConfig } from '@sentry/nextjs';
import webpack from 'webpack';  // Adicione esta importação

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  // Adicione a configuração do webpack aqui
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(new webpack.DefinePlugin({
        'process.browser': JSON.stringify(false)
      }))
    }
    return config;
  }
};

export default withSentryConfig(nextConfig, {
  org: "felipe-dorneles",
  project: "javascript-nextjs",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
});