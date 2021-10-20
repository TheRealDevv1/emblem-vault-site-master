const debug = process.env.NODE_ENV !== 'production'
const withTM = require('next-transpile-modules')(['doka', 'react-doka']);
module.exports = withTM({
  reactStrictMode: false,
  assetPrefix: '/',
  env: {
    IPFS: process.env.IPFS === 'true' ? 'true' : 'false',
    COMMIT_SHA: process.env.VERCEL_GITHUB_COMMIT_SHA || process.env.GITHUB_SHA || 'master',
    INFURA_PROJECT_ID: 'a4e978103d87452881d1ea298948aa42',
    MAINTENANCE: false
  },
  devIndicators: {
    autoPrerender: false,
  }
});
// module.exports = {
//   reactStrictMode: false,
//   assetPrefix: !debug ? '.' : '.',
//   env: {
//     IPFS: process.env.IPFS === 'true' ? 'true' : 'false',
//     COMMIT_SHA: process.env.VERCEL_GITHUB_COMMIT_SHA || process.env.GITHUB_SHA || 'master',
//     INFURA_PROJECT_ID: 'a4e978103d87452881d1ea298948aa42',
//     MAINTENANCE: false
//   },
//   devIndicators: {
//     autoPrerender: false,
//   },
// }
