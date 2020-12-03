import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context('./modules', true, /\.js$/)

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

const store = new Vuex.Store({
    state: {
        svgIconWidth:16,
        svgIconHeight:16
    },
    getters: { // 由state派生出的属性
        getSvgIconWidth(state){
            return state.svgIconWidth
        },
        getSvgIconHeight(state){
            return state.svgIconHeight
        },

    },
    mutations: { // 实际开发可将本部分抽取成单独的文件

    },
    actions: { // 实际开发可将本部分抽取成单独的文件

    },
    modules: modules
})

export default store