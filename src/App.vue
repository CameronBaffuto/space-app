<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import Table from './components/Table.vue';
import { useToast } from 'primevue/usetoast';
</script>

<template>
  <div>
    <Navbar />
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-bold text-center">Welcome to the F1 App</h1>
      <Table />
    </div>
  </div>
</template>
