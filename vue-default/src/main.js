import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import mixins from './mixins'

const app = createApp(App)
app.use(router)
app.use(VueSweetalert2)
app.mount('#app')
app.mixin(mixins)
//createApp(App).use(router).mount('#app')
