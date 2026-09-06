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
const siteData = await useSiteData()

const requestUrl = useRequestURL()
const canonicalUrl = `${requestUrl.origin}/`
const ogImageUrl = `${requestUrl.origin}/images/true-north-cover.webp`

// Configuración global de SEO / Open Graph (OG)
useSeoMeta({
  title: `${siteData.artistName} | ${siteData.tagline}`,
  ogTitle: `${siteData.artistName} | Official Website`,
  ogSiteName: siteData.artistName,
  description: 'True North is a faith-driven duo blending soulful melodies, lush harmonies, and honest storytelling. Stream their latest single "True North" now.',
  ogDescription: 'We create soulful, faith-inspired music that connects, uplifts, and reminds you that you\'re never too far gone to find your way home.',
  ogImage: ogImageUrl,
  ogImageAlt: `${siteData.artistName} Duo Cover`,
  ogUrl: canonicalUrl,
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: `${siteData.artistName} | Official Website`,
  twitterDescription: `Faith-driven music from ${siteData.location}. Stream "True North" on Spotify, Apple Music, and YouTube.`,
  twitterImage: ogImageUrl,
})

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'canonical', href: canonicalUrl }
  ]
})
</script>