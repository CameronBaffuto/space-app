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
            50: '{blue.50}',
            100: '{blue.100}',
            200: '{blue.200}',
            300: '{blue.300}',
            400: '{blue.400}',
            500: '{blue.500}',
            600: '{blue.600}',
            700: '{blue.700}',
            800: '{blue.800}',
            900: '{blue.900}',
            950: '{blue.950}'
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
