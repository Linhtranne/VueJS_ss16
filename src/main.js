import router from './router'
import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createVuetify } from 'vuetify/lib/framework.mjs'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from "vuetify/directives"

const vuetify = createVuetify({
    components,
    directives,
  
})
createApp(App).use(router).use(vuetify).mount('#app')