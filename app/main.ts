import Vue from 'nativescript-vue'
import App from './components/App.vue'
import Test from './components/Test'
import Sensors from './pages/Sensors.vue'
import Login from './pages/Login.vue';

import VueDevtools from 'nativescript-vue-devtools'
import { authService } from './core/services/auth.service';
import './core/services/auth.service';

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}
import store from './store'

Vue.component('Test', Test);

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')

const loggedIn = authService.isLoggedIn();
const ShowComponent = loggedIn ? App : Sensors;

new Vue({
  store,
  render: h => h('frame', [h(ShowComponent)])
}).$start()
