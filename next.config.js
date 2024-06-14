const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  // Use the prefix in production and not in development.
  basePath: isProd ? '/nahue-template-landing' : '',
  assetPrefix: isProd ? '/nahue-template-landing/' : '',
  images: {
    unoptimized: true,
  },
  // ... other configurations
};
