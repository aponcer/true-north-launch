<!-- components/AboutUs.vue -->
<template>
  <section id="about" class="py-20 bg-neutral-900 text-white">
    <div class="max-w-6xl mx-auto px-6 space-y-16">
      
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto space-y-3">
        <span class="text-xs font-bold uppercase tracking-widest text-rose-400">
          Behind The Music
        </span>
        <h2 class="text-3xl md:text-5xl font-extrabold tracking-tight">
          About {{ siteData.artistName }}
        </h2>
        <p class="text-neutral-400 text-sm md:text-base font-light leading-relaxed">
          True North is a faith-driven duo blending soulful melodies, lush harmonies, and honest storytelling to create music that uplifts and reconnects.
        </p>
      </div>

      <!-- Duo Bios Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        
        <!-- Nina's Card -->
        <div class="bg-neutral-950 rounded-2xl border border-white/10 overflow-hidden flex flex-col group hover:border-rose-500/50 transition-colors">
          <!-- Image Container -->
          <div class="h-80 w-full overflow-hidden bg-neutral-900 relative">
            <img 
              src="/images/nina_1.webp" 
              alt="Nina - Vocals & Composition" 
              class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80"></div>
            <div class="absolute bottom-4 left-6">
              <span class="text-xs font-bold uppercase tracking-widest text-rose-400">Vocals & Composition</span>
              <h3 class="text-2xl font-black text-white">Nina</h3>
            </div>
          </div>
          <!-- Bio Info -->
          <div class="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-4">
            <p class="text-neutral-300 text-sm leading-relaxed font-light">
              With a background rooted in classical and jazz, Nina brings rich vocal agility, soulful phrasing, and emotive depth to True North's soundscapes.
            </p>
            <div class="pt-2 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-neutral-400">
              <span class="w-2 h-2 rounded-full bg-rose-500"></span>
              <span>Classical & Jazz Background</span>
            </div>
          </div>
        </div>

        <!-- Frank's Card -->
        <div class="bg-neutral-950 rounded-2xl border border-white/10 overflow-hidden flex flex-col group hover:border-amber-500/50 transition-colors">
          <!-- Image Container -->
          <div class="h-80 w-full overflow-hidden bg-neutral-900 relative">
            <img 
              src="/images/frank_1.webp" 
              alt="Frank Morgan - Songwriter & Educator" 
              class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80"></div>
            <div class="absolute bottom-4 left-6">
              <span class="text-xs font-bold uppercase tracking-widest text-amber-400">Songwriter & Educator</span>
              <h3 class="text-2xl font-black text-white">Frank Morgan</h3>
            </div>
          </div>
          <!-- Bio Info -->
          <div class="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-4">
            <p class="text-neutral-300 text-sm leading-relaxed font-light">
              Chilean-born songwriter and educator crafting lyrical narratives that bridge contemporary gospel, R&B, and modern pop dynamics.
            </p>
            <div class="pt-2 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-neutral-400">
              <span class="w-2 h-2 rounded-full bg-amber-500"></span>
              <span>Lyrical Narrative & Arrangement</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const siteData = await useSiteData()
</script>