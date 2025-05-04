<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useApodStore } from '../stores/apodStore';
import Button from 'primevue/button';
import Image from 'primevue/image';
import ToggleSwitch from 'primevue/toggleswitch';

export default defineComponent({
    name: 'Apod',
    components: {
        Button,
        Image,
        ToggleSwitch,
    },
    setup() {
        const apodStore = useApodStore();

        onMounted(() => {
            apodStore.fetchTodayApod();
        });

        return {
            apodStore,
        };
    },
});
</script>
<template>
    <div v-if="apodStore.apod" class="flex flex-col items-center space-y-4 p-4 ">
        <Image :src="apodStore.hd ? apodStore.apod.hdurl : apodStore.apod.url" alt="Image" class="rounded-lg" width="300" preview />
        <div class="flex items-center space-x-2">
            <p class="text-sm">HD</p>
            <ToggleSwitch v-model="apodStore.hd" />
        </div>
        <div class="flex items-center space-x-2">
            <h2 class="text-2xl font-bold text-center">{{ apodStore.apod.title }}</h2>
            <p class="text-sm text-center text-gray-500 pt-1">{{ apodStore.apod.date }}</p>
        </div>
        <p class="text-justify">{{ apodStore.apod.explanation }}</p>
    </div>
    <div v-if="apodStore.loading">
        <p class="text-center">Fetching Apod...</p>
    </div>
    <div v-if="apodStore.error" class="text-red-500 text-center">
        {{ apodStore.error }}
    </div>
</template>