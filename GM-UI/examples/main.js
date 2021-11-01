/* eslint-disable */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import demoBlock from './components/demo-block.vue'
import GMUI from '../packages/index'

// import '../packages/theme/lib/index.css'
import '../packages/theme/src/index.css'

Vue.component('demo-block', demoBlock)
Vue.use(GMUI)

Vue.config.productionTip = false


new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})