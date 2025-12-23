const isProd = process.env.NODE_ENV === 'production'
module.exports = {
  output: 'export',
  basePath: isProd ? '/portfolio' : '', // Make sure this matches your repo name
  assetPrefix: isProd ? '/portfolio' : '', // Make sure this matches your repo name
  images: {
    unoptimized: true
  },
  trailingSlash: true, // Add this for better GitHub Pages compatibility
}