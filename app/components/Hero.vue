<!-- components/Hero.vue -->
<template>
  <section id="home" class="relative w-full min-h-screen bg-neutral-900 text-white flex flex-col justify-between overflow-hidden pt-16">
    <!-- Background Image Asset -->
    <div class="absolute inset-0 z-0">
      <img 
        src="/images/main_big.webp" 
        alt="True North Band Cover" 
        class="w-full h-full object-cover object-center"
      />
      <!-- Warm Gradient Overlay -->
      <div class="absolute inset-0 bg-gradient-to-tr from-neutral-950/90 via-rose-950/60 to-amber-950/40 backdrop-blur-[2px]"></div>
    </div>

    <!-- Hero Main Content -->
    <main class="relative z-10 max-w-4xl w-full mx-auto px-6 py-16 text-center my-auto flex flex-col items-center">
      <span class="text-xs font-extrabold uppercase tracking-widest text-amber-300 mb-3 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
        {{ siteData.location }} • Est. {{ siteData.yearStarted }}
      </span>
      
      <h1 class="text-4xl md:text-6xl font-black tracking-tight text-white drop-shadow-md mb-4">
        {{ siteData.tagline }}
      </h1>

      <p class="max-w-xl text-neutral-200 text-base md:text-lg font-light leading-relaxed drop-shadow mb-8">
        We create soulful, faith-inspired music that connects, uplifts and reminds you that you're never too far gone to find your way home.
      </p>

      <!-- Socials & Streaming Links Bar from siteData -->
      <div class="flex flex-wrap items-center justify-center gap-6 text-neutral-300 text-sm font-medium">
        <a 
          :href="siteData.latestRelease.links.spotify" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="hover:text-rose-300 transition-colors"
        >
          Spotify
        </a>
        <a 
          :href="siteData.latestRelease.links.apple" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="hover:text-rose-300 transition-colors"
        >
          Apple Music
        </a>
        <a 
          :href="siteData.socials.youtube" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="hover:text-rose-300 transition-colors"
        >
          YouTube
        </a>
        <a 
          :href="siteData.socials.instagram" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="hover:text-rose-300 transition-colors"
        >
          Instagram
        </a>
        <a 
          :href="siteData.socials.tiktok" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="hover:text-rose-300 transition-colors"
        >
          TikTok
        </a>
        <a 
          :href="siteData.socials.facebook" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="hover:text-rose-300 transition-colors"
        >
          Facebook
        </a>
      </div>
    </main>

    <div class="relative z-10 pb-6 text-center text-xs text-neutral-400">
      Scroll to explore releases
    </div>
  </section>
</template>

<script setup lang="ts">
import { siteData } from '~/data/siteData';
</script>