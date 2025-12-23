const isProd = process.env.NODE_ENV === 'production'
module.exports = {
  output: 'export',
  basePath: isProd ? '/Portfolio_website' : '',
  assetPrefix: isProd ? '/Portfolio_website' : '',
  images: {
    unoptimized: true
  }
}

