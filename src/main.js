import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
import 'a17t'
import './assets/tailwind.css'
import { uniSun, uniMoon, uniGithub, uniBars, uniFavoriteMonochrome, uniCheckCircleMonochrome, uniArrowLeft, uniArrowRight } from 'vue-unicons/dist/icons'
import Unicon from 'vue-unicons'
import store from './store'
import 'roboto-mono-webfont'
import './assets/theming.css'
import Heading from './components/Heading'
import Subheading from './components/Subheading'
import Butter from 'buttercms'
import VueGtag from "vue-gtag";

const app = createApp(App);

app.use(VueGtag, {
  config: { id: 'G-Q6423EHZHZ' }
}, router);


Unicon.add([uniSun, uniMoon, uniGithub, uniBars, uniFavoriteMonochrome, uniCheckCircleMonochrome, uniArrowLeft, uniArrowRight])

app.config.productionTip = false;
app.config.globalProperties.$bodyElement = null;
app.config.globalProperties.$cms = Butter('81218e35deb9ccf0d22dbf9995b2c1d019fbd582');

app.component('heading', Heading)
app.component('subheading', Subheading)

app.use(router).use(store).use(Unicon).mount('#app')
