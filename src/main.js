import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/utils/btnPermissions'

import '@/utils/rem.js'
import '@/styles/index.scss' // 全局样式

import App from './App'
import store from './store'
import router from './router'
import '@/icons' // 图标
// import '@/icons/iconfont' //引入阿里字体图标库
import '@/permission' // 权限控制

//vue-echarts 引入
import "echarts";
import ECharts from 'vue-echarts'
Vue.component('v-chart', ECharts)
import 'echarts-liquidfill'
//引入拖拽排序插件
import VueDND from 'awe-dnd'
Vue.use(VueDND)
//引入vue打印js
import Print from './utils/printForVue'
Vue.use(Print)
//引用富文本编辑器
import VueQuillEditor from 'vue-quill-editor'
//引入富文本css
// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
//富文本编辑器添加实例
Vue.use(VueQuillEditor, /* { default global options } */)


// echarts 按需引入
let echarts = require("echarts/lib/echarts");

// 引入折线图等组件
require("echarts/lib/chart/line");
require("echarts/lib/chart/bar");
require("echarts/lib/chart/radar");

// 引入提示框和title组件，图例
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
require("echarts/lib/component/legend");
Vue.prototype.$echarts = echarts
//引入jsplumb
import jsPlumb from 'jsplumb'
Vue.prototype.$jsPlumb = jsPlumb.jsPlumb

// set ElementUI lang to EN
// Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
