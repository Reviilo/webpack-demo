const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();
const config = require('./webpack.config.js');
const webpackCompiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(webpackCompiler, {
  publicPath: config.output.publicPath,
  hot: true
}));

app.use(webpackHotMiddleware(webpackCompiler));

// Serve the files on port 3000.
const port = 3000;
app.listen(port, function () {
  console.log(`Listening on Port: ${port}! \n`);
})