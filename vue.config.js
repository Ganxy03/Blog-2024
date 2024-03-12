const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: '0.0.0.0',
    port: 40302,
    client: {
      webSocketURL: 'ws://0.0.0.0:40302/ws',
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  }
})
