<script lang="ts">
import { defineComponent, ref } from 'vue';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';

export default defineComponent({
  name: 'Navbar',
  components: {
    Button,
    Toast,
  },
  setup() {
    const isDarkMode = ref(false);
    const toast = useToast();

    function toggleDarkMode() {
      isDarkMode.value = !isDarkMode.value;
      document.documentElement.classList.toggle('darkmode');
    }

    return {
      isDarkMode,
      toggleDarkMode,
    };
  },
});
</script>

<template>
  <Toast />
  <div class="flex justify-between items-center p-4">
    <div class="text-white">
      <img src="../assets/nasa.png" alt="Nasa Logo" class="h-10 w-10" />
    </div>
    <Button
      :icon="isDarkMode ? 'pi pi-moon' : 'pi pi-sun'"
      rounded
      variant="text"
      @click="toggleDarkMode"
    />
  </div>
</template>