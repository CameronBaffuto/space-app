import { ref } from 'vue';
import { defineStore } from 'pinia';
import { getApod } from '../apis/ApodApi';
import type { Apod } from '../types/Apod';

export const useApodStore = defineStore('apod', () => {
    const apod = ref<Apod | null>(null);
    const loading = ref(false);
    const error = ref<string | null>(null);
    const hd = ref(false);

    const fetchTodayApod = async () => {
        loading.value = true;
        error.value = null;
        try {
          const data = await getApod();
          apod.value = data;
        } catch (err) {
          error.value = 'Failed to fetch today’s APOD.';
          console.error(err);
        } finally {
          loading.value = false;
        }
    };
    

    return {
        apod,
        loading,
        error,
        hd,
        fetchTodayApod,
    }
});
