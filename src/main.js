import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'a17t'
import './assets/tailwind.css'
import { uniSun, uniMoon, uniGithub, uniBars, uniFavoriteMonochrome, uniCheckCircleMonochrome, uniArrowLeft, uniArrowRight } from 'vue-unicons/src/icons'
import Unicon from 'vue-unicons'
import store from './store'
import 'roboto-mono-webfont'
import './assets/theming.css'
import Heading from './components/Heading'
import Subheading from './components/Subheading'
import Butter from 'buttercms'
import VueAnalytics from 'vue-analytics';


Vue.use(VueAnalytics, {
  id: 'G-Q6423EHZHZ',
  router
});

Unicon.add([uniSun, uniMoon, uniGithub, uniBars, uniFavoriteMonochrome, uniCheckCircleMonochrome, uniArrowLeft, uniArrowRight])
Vue.use(Unicon)

Vue.config.productionTip = false
Vue.prototype.$bodyElement = null // It's not really a body element it's a div but idc
Vue.prototype.$cms = Butter('81218e35deb9ccf0d22dbf9995b2c1d019fbd582')

Vue.component('heading', Heading)
Vue.component('subheading', Subheading)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
