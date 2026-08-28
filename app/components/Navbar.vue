<!-- components/Navbar.vue -->
<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-neutral-950/70 backdrop-blur-md border-b border-white/10 transition-all duration-300">
    <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      
      <!-- Logo tipográfico con Agrandir -->
      <a href="#home" class="flex items-center gap-2 group py-1">
        <span class="font-agrandir-wide text-2xl md:text-3xl tracking-tight text-white leading-none lowercase">
          {{ siteData.artistName }}.
        </span>
      </a>

      <!-- Navigation Links -->
      <nav class="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-neutral-300">
        <a href="#home" class="hover:text-rose-300 transition-colors">Home</a>
        <a href="#releases" class="hover:text-rose-300 transition-colors">Releases</a>
        <a href="#about" class="hover:text-rose-300 transition-colors">About Us</a>
      </nav>

      <!-- Action Button -->
      <a 
        :href="siteData.socials.instagram" 
        target="_blank"
        rel="noopener noreferrer"
        class="bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full shadow-lg transition-transform hover:scale-105"
      >
        Instagram
      </a>
    </div>
  </header>
</template>

<script setup lang="ts">
  const siteData = await useSiteData()
</script>