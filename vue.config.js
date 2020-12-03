'use strict'
const path = require('path')
const settings = require('./settings.js')

function resolve(dir) {
    return path.join(__dirname, dir)
}
function addStyleResource(rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({ // 引入合并后的注入项 
            patterns: [resolve('./src/styles/index.scss')]
        })
}

module.exports = {
    configureWebpack: {
        name: settings.title
    },
    chainWebpack: config => {
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
        types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))

        config.module.rule('svg')
            .exclude.add(resolve('./src/icons'))

        config.module.rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('./src/icons')).end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({ symbolId: 'icon-[name]' })
    },
    devServer: {
        proxy: {
            '/dev-api': {
                target: 'http://127.0.0.1:9527',
                ws: true,
                changeOrigin: true,
                pathRewrite: {'^/dev-api' : '/api'}
            }
        }
    },
    lintOnSave: false
}