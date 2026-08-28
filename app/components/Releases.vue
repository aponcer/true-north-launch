<!-- components/Releases.vue -->
<template>
  <section id="releases" class="py-16 bg-white border-t border-neutral-100">
    <div class="max-w-4xl mx-auto px-6 space-y-8">
      <div class="text-center">
        <h2 class="text-xs font-bold uppercase tracking-widest text-rose-500 mb-2">
          Latest Release
        </h2>
        <h3 class="text-3xl font-extrabold text-neutral-900">
          Stream & Listen
        </h3>
      </div>

      <!-- Single Card Container -->
      <div class="bg-neutral-50 rounded-2xl border border-neutral-200/60 shadow-sm overflow-hidden min-h-[220px] flex flex-col md:flex-row">
        
        <!-- STATE A: Normal Card (Image + Streaming Links) -->
        <template v-if="!showPlayer">
          <!-- Cover Art with Play Overlay -->
          <div 
            @click="showPlayer = true"
            class="relative w-full md:w-56 h-56 md:h-auto shrink-0 bg-neutral-900 group cursor-pointer overflow-hidden"
            title="Click to watch Lyric Video"
          >
            <img 
              src="/images/true-north-cover.jpg" 
              alt="True North Single Cover" 
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              @error="handleImageError"
            />
            <div class="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>
            
            <!-- Play SVG Overlay -->
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="w-12 h-12 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-rose-600 shadow-lg group-hover:scale-110 group-hover:bg-white transition-all">
                <svg class="w-6 h-6 ml-0.5 fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>

          <!-- Release Info & Buttons Panel -->
          <div class="p-6 md:p-8 flex-1 flex flex-col justify-center space-y-4">
            <div>
              <span class="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                {{ siteData.latestRelease.type }} • {{ siteData.latestRelease.year }}
              </span>
              <h4 class="text-2xl font-bold text-neutral-900">
                {{ siteData.latestRelease.title }}
              </h4>
              <p class="text-sm text-neutral-500 mt-1">Available now on all major streaming platforms.</p>
            </div>

            <!-- Streaming Buttons with SVG Icons -->
            <div class="flex flex-wrap gap-3 py-2">
              <!-- Spotify -->
              <a 
                :href="siteData.latestRelease.links.spotify" 
                target="_blank" 
                rel="noopener noreferrer"
                class="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-5 py-2.5 rounded-full shadow-xs transition-transform hover:scale-105"
              >
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.498 17.302c-.22.36-.69.477-1.05.257-2.875-1.756-6.49-2.153-10.752-1.178-.413.094-.823-.162-.917-.575-.094-.413.162-.823.575-.917 4.656-1.065 8.653-.615 11.887 1.363.36.22.477.69.257 1.05zm1.465-3.26c-.277.45-.867.595-1.317.318-3.288-2.02-8.303-2.607-12.193-1.427-.507.153-1.04-.132-1.193-.639-.153-.507.132-1.04.639-1.193 4.436-1.346 9.967-.7 13.746 1.624.45.277.595.867.318 1.317zm.126-3.414c-3.945-2.342-10.45-2.558-14.215-1.415-.615.187-1.264-.162-1.45-.777-.187-.615.162-1.264.777-1.45 4.322-1.31 11.487-1.057 16.035 1.643.553.328.736 1.04.408 1.593-.328.553-1.04.736-1.555.406z"/>
                </svg>
                <span>Spotify</span>
              </a>
              
              <!-- Apple Music -->
              <a 
                :href="siteData.latestRelease.links.apple" 
                target="_blank" 
                rel="noopener noreferrer"
                class="flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold px-4 py-2.5 rounded-full shadow-xs transition-transform hover:scale-105"
              >
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.32c.67-.82 1.13-1.96.99-3.1-.97.04-2.17.65-2.86 1.46-.6.7-1.13 1.83-.98 2.94 1.09.08 2.21-.48 2.85-1.3"/>
                </svg>
                <span>Apple Music</span>
              </a>

              <!-- YouTube Music -->
              <a 
                :href="siteData.latestRelease.links.ytMusic" 
                target="_blank" 
                rel="noopener noreferrer"
                class="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-4 py-2.5 rounded-full shadow-xs transition-transform hover:scale-105"
              >
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm0 19.2c-3.978 0-7.2-3.222-7.2-7.2s3.222-7.2 7.2-7.2 7.2 3.222 7.2 7.2-3.222 7.2-7.2 7.2zm-2.4-10.8v7.2l6-3.6-6-3.6z"/>
                </svg>
                <span>YouTube Music</span>
              </a>
            </div>
          </div>
        </template>

        <!-- STATE B: Replaces the Entire Card Area with the Embed Player -->
        <div v-else class="w-full aspect-video md:aspect-auto md:h-80 relative bg-black">
          <button 
            @click="showPlayer = false"
            type="button"
            class="absolute top-3 right-3 z-10 bg-black/70 hover:bg-black text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-md transition-colors"
          >
            ✕ Close Video
          </button>
          <iframe 
            class="w-full h-full"
            :src="`https://www.youtube.com/embed/${siteData.latestRelease.lyricVideoId}?autoplay=1`" 
            title="True North - True North (Official Lyric Video)" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
          ></iframe>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { siteData } from '~/data/siteData';

const showPlayer = ref(false);

const handleImageError = (event: Event) => {
  const target = event.target as HTMLElement | null;
  if (target) {
    target.style.display = 'none';
  }
};
</script>