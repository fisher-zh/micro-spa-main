// If your plugin is direct dependent to the html webpack plugin:
const HtmlWebpackPlugin = require('html-webpack-plugin');
console.log(HtmlWebpackPlugin);

class MyPlugin {
  apply (compiler) {
    compiler.hooks.compilation.tap('MyPlugin', (compilation) => {
      console.log('The compiler is starting a new compilation...')

    })
  }
}

module.exports = MyPlugin;
