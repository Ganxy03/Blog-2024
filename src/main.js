import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import PrimeVue from 'primevue/config'

import Button from 'primevue/button';
import Sidebar from 'primevue/sidebar';


import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

// Sidebar
// eslint-disable-next-line
Vue.component('Button', Button);
// eslint-disable-next-line
Vue.component('Sidebar', Sidebar);
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

// Vue.use(Antd)
Vue.use(PrimeVue);
Vue.use(PrimeVue)

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
