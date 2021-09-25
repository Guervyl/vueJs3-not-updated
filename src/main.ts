import {createApp} from 'vue'
import App from './App.vue'

declare global {
    interface Window {
        theOutsideObject: any;
        vueInstance: any;
    }
}

window.vueInstance = createApp(App).mount('#app')
