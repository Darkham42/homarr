const { env } = require('process');
const { withSentryConfig } = require('@sentry/nextjs');

const moduleExports = {
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    outputStandalone: true,
  },
  basePath: env.BASE_URL,
};

module.exports = withSentryConfig(moduleExports, {});
