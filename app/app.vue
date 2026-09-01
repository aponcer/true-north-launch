<!-- app/app.vue -->
<template>
  <div class="min-h-screen bg-neutral-50 font-sans antialiased text-neutral-900 selection:bg-rose-500 selection:text-white">
    <Navbar />
    <Hero />
    <Releases />
    <AboutUs />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { siteData } from '~/data/siteData';

// Configuración global de SEO / Open Graph (OG)
useSeoMeta({
  title: `${siteData.artistName} | ${siteData.tagline}`,
  ogTitle: `${siteData.artistName} | Official Website`,
  description: 'True North is a faith-driven duo blending soulful melodies, lush harmonies, and honest storytelling. Stream their latest single "True North" now.',
  ogDescription: 'We create soulful, faith-inspired music that connects, uplifts, and reminds you that you\'re never too far gone to find your way home.',
  ogImage: 'https://true-north-launch.vercel.app/images/true-north-cover.webp',
  ogImageAlt: 'True North Duo Cover',
  ogUrl: 'https://true-north-official.com',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: `${siteData.artistName} | Official Website`,
  twitterDescription: 'Faith-driven music from Berlin, Germany. Stream "True North" on Spotify, Apple Music, and YouTube.',
  twitterImage: 'https://true-north-launch.vercel.app/images/true-north-cover.webp',
})

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
})
</script>