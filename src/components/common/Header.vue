<template>
    <header class="bg-blue-600 p-4 text-white flex justify-between items-center">
      <h1 class="text-xl font-bold">{{ siteName }}</h1>
      <nav>
        <ul class="flex space-x-4">
          <li v-for="nav in navigation" :key="nav.name">
            <router-link :to="nav.url" class="hover:underline">
              {{ nav.name }}
            </router-link>
          </li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const siteName = ref("My Vue App");
  const navigation = ref([
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Contact", url: "/contact" },
  ]);
  </script>
  