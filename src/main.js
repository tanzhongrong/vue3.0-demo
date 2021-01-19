import {
  createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// vant UI
import Vant from 'vant';
import 'vant/lib/index.css';
import 'common/css/index.scss'

const app = createApp(App)
app.use(store)
app.use(Vant)
app.use(router)
app.mount('#app')
