<template>
    <footer class="bg-gray-900 text-white py-6">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <!-- Left Section -->
          <div>
            <h2 class="text-lg font-bold">My Vue App</h2>
            <p class="text-sm mt-1">© {{ year }} All Rights Reserved.</p>
          </div>
  
          <!-- Navigation Links -->
          <nav class="mt-4 md:mt-0">
            <ul class="flex space-x-4">
              <li><router-link to="/" class="hover:text-gray-400">Home</router-link></li>
              <li><router-link to="/about" class="hover:text-gray-400">About</router-link></li>
              <li><router-link to="/contact" class="hover:text-gray-400">Contact</router-link></li>
            </ul>
          </nav>
  
          <!-- Social Links -->
          <div class="mt-4 md:mt-0 flex space-x-4">
            <a href="#" class="hover:text-gray-400"><i class="fab fa-facebook"></i></a>
            <a href="#" class="hover:text-gray-400"><i class="fab fa-twitter"></i></a>
            <a href="#" class="hover:text-gray-400"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  import { ref } from "vue";
  const year = ref(new Date().getFullYear());
  </script>
  
  <style scoped>
  i {
    font-size: 1.2rem;
  }
  </style>
  