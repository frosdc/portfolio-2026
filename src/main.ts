import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { magnetic } from './directives/magnetic'
import { initSmoothScroll } from './composables/smoothScroll'

document.documentElement.classList.add('js')

createApp(App).directive('magnetic', magnetic).mount('#app')

initSmoothScroll()
