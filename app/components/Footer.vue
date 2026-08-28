<!-- components/Footer.vue -->
<template>
  <footer class="py-12 bg-neutral-950 text-neutral-400 border-t border-neutral-900">
    <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
      
      <!-- Logo & Location -->
      <div class="flex flex-col items-center md:items-start space-y-2">
        <img 
          src="/images/logo-tn.webp" 
          alt="True North Logo" 
          class="h-8 w-auto object-contain opacity-90"
        />
        <p class="text-xs text-neutral-500">
          {{ siteData.location }} • Est. {{ siteData.yearStarted }}
        </p>
      </div>

      <!-- Socials -->
      <div class="flex items-center gap-6 text-xs uppercase tracking-wider font-semibold">
        <a :href="siteData.socials.instagram" target="_blank" rel="noopener noreferrer" class="hover:text-rose-400 transition-colors">Instagram</a>
        <a :href="siteData.socials.tiktok" target="_blank" rel="noopener noreferrer" class="hover:text-rose-400 transition-colors">TikTok</a>
        <a :href="siteData.socials.youtube" target="_blank" rel="noopener noreferrer" class="hover:text-rose-400 transition-colors">YouTube</a>
        <a :href="siteData.socials.facebook" target="_blank" rel="noopener noreferrer" class="hover:text-rose-400 transition-colors">Facebook</a>
      </div>

      <!-- Rights -->
      <div class="text-xs text-neutral-500 text-center md:text-right">
        © {{ new Date().getFullYear() }} {{ siteData.artistName }}. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
  const siteData = await useSiteData()
</script>