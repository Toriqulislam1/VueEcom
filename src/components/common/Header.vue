<template>
  <header class="bg-gray-900 text-white py-4 px-6">
    <nav class="flex justify-between items-center">
      <h1 class="text-xl font-bold">My Vue App</h1>
      <ul class="flex space-x-4">
        <li><router-link to="/" class="hover:text-gray-400">Home</router-link></li>
        <li><router-link to="/about" class="hover:text-gray-400">About</router-link></li>
      </ul>
    </nav>
  </header>
</template>
