import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

import express from 'express'
import http from 'http'
import path from 'path'

import clientConfig from './webpack.client.dev'
import serverConfig from './webpack.server.dev'

const devApp = express()

const clientCompiler = webpack(clientConfig)
const serverCompiler = webpack(serverConfig)

devApp.use(
  webpackDevMiddleware(clientCompiler, {
    contentBase: './build/public',
    noInfo: true,
    publicPath: clientConfig.output.publicPath,
    hot: true,
    inline: true,
  }),
)

devApp.use(webpackHotMiddleware(clientCompiler))

clientCompiler.hooks.done.tap(
  'BuildStatsPlugin',
  (stats) => {
    serverCompiler.watch(
      serverConfig.devServer,
      (stats) => {},
    )
  },
)

const devServer = http.createServer(devApp)

devServer.listen(process.env.PORT || 8000, (error) => {
  if (error) {
    console.log(error)
  }

  console.log('🚀 started')
})
