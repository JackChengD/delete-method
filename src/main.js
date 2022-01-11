import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import LeftDelete from '../packages/index';
import LongDelete from '../packages/index';
Vue.use(LeftDelete);
Vue.use(LongDelete);

new Vue({
  render: h => h(App),
}).$mount('#app')
