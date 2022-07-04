/*
 * @Author: Timber.Wang
 * @Date: 2022-04-09 17:02:54
 * @LastEditors: Timber.Wang
 * @LastEditTime: 2022-06-10 08:55:13
 * @Description:
 */
import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
