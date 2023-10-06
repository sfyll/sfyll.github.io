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
import VueGtag from "vue-gtag";
import { createMetaManager } from 'vue-meta'

const app = createApp(App);

app.use(VueGtag, {
  config: { id: 'G-Q6423EHZHZ' }
}, router);


Unicon.add([uniSun, uniMoon, uniGithub, uniBars, uniFavoriteMonochrome, uniCheckCircleMonochrome, uniArrowLeft, uniArrowRight])

app.config.productionTip = false;
app.config.globalProperties.$bodyElement = null;

app.component('heading', Heading)
app.component('subheading', Subheading)

app.use(router).use(store).use(Unicon).use(createMetaManager())

await router.isReady()

app.mount('#app')
