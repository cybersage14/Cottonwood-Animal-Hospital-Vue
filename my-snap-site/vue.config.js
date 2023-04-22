const path = require('path');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/my-snap-site/' : '/',
  transpileDependencies: true,
  pages: {
    index: {
      entry: 'src/main.js', // Update this line to 'src/main.js'
      title: 'Home',
    },
  },
  chainWebpack: (config) => {
    config.entry('app').clear().add('./src/main.js').end(); // Update this line to './src/main.js'
  },
};
