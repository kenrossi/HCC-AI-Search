/* eslint-disable @typescript-eslint/no-var-requires */

import path from 'path';
import { merge } from 'webpack-merge';
import common from './webpack.common.js';
import { stylePaths } from './stylePaths.js';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || '9000';

export default merge(common('development'), {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    host: HOST,
    port: PORT,
    historyApiFallback: {
      rewrites: [
        { from: /^\/HCC-AI-Search\/.*/, to: '/HCC-AI-Search/index.html' }
      ],
    },
    devMiddleware: {
      publicPath: '/HCC-AI-Search/',
    },
    open: '/HCC-AI-Search/',
    static: {
      directory: path.resolve('./dist'),
    },
    client: {
      overlay: true,
      webSocketURL: 'auto://0.0.0.0:0/ws',
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: [...stylePaths],
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
});
