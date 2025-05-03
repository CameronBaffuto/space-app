import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useModalsStore = defineStore('modals', () => {

    const driverProfileOpen = ref(false);
    const setDriverProfileOpen = (isOpen: boolean) => {
        driverProfileOpen.value = isOpen;
    };

    return {
        driverProfileOpen,
        setDriverProfileOpen
    }

});