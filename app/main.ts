import Vue from 'nativescript-vue'
import Login from './pages/Login.vue';
import Dashboard from './pages/Dashboard.vue';

import VueDevtools from 'nativescript-vue-devtools'
import { authService } from './core/services/auth.service';
import { NavigationService } from './core/services/navigation.service';
import './core/services/auth.service';

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}
import store from './store'

Vue.use(NavigationService);
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')

const loggedIn = authService.isLoggedIn();
const ShowComponent = loggedIn ? Dashboard : Login;

new Vue({
  store,
  render: h => h('frame', [h(ShowComponent)])
}).$start()
