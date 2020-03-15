// console.log(process.env.NODE_ENV)
const config = {
  dev: {
    host: 'localhost',
    port: 8081,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: { '^/api': '' }
      }
    },
    publicPath: '/'
  },
  build: {
    publicPath: '/'
  }
}

module.exports = config
