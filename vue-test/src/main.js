// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import './assets/css/bootstrap.min.css'  
import './assets/js/bootstrap.min.js'

// 引用API文件
import api from './api/index.js'
// 将API方法绑定到全局
Vue.prototype.$api = api

// 引用工具文件
import utils from './utils/index.js'
// 将工具方法绑定到全局
Vue.prototype.$utils = utils

//使用Echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

//使用bootstrapTable
import bootstrapTable from 'bootstrap-table'
Vue.prototype.$bootstrapTable = bootstrapTable

//import '../static/js/tableExport.min.js'
import './assets/js/tableExport.js'
import './assets/js/bootstrap-table-export.min.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
