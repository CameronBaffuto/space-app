import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import { definePreset } from '@primeuix/themes';
import Nora from '@primeuix/themes/nora';
import ToastService from 'primevue/toastservice';

const OnePreset = definePreset(Nora, {
    semantic: {
        primary: {
            50: '{red.50}',
            100: '{red.100}',
            200: '{red.200}',
            300: '{red.300}',
            400: '{red.400}',
            500: '{red.500}',
            600: '{red.600}',
            700: '{red.700}',
            800: '{red.800}',
            900: '{red.900}',
            950: '{red.950}'
        }
    }
});

const pinia = createPinia()
const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: OnePreset,
        options: {
            darkModeSelector: '.darkmode',
        }
    }
});
app.use(pinia)
app.use(ToastService);
app.mount('#app');  
