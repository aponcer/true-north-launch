<!-- app/app.vue -->
<template>
  <div class="min-h-screen bg-neutral-50 font-sans antialiased text-neutral-900 selection:bg-rose-500 selection:text-white">
    <Navbar />
    <Hero />
    <Releases />
    <Shows />
    <AboutUs />
    <Footer />
  </div>
</template>

<script setup lang="ts">
const siteData = await useSiteData()

const requestUrl = useRequestURL()
const canonicalUrl = `${requestUrl.origin}/`
const ogImageUrl = `${requestUrl.origin}/images/true-north-og.webp`

// Configuración global de SEO / Open Graph (OG)
useSeoMeta({
  title: `${siteData.artistName} | ${siteData.tagline}`,
  ogTitle: `${siteData.artistName} | ${siteData.tagline}`,
  ogSiteName: siteData.artistName,
  description: `${siteData.artistName} is a faith-driven duo blending soulful melodies, lush harmonies, and honest storytelling. Stream their latest ${siteData.latestRelease.type.toLowerCase()} "${siteData.latestRelease.title}" now.`,
  ogDescription: 'We create soulful, faith-inspired music that connects, uplifts, and reminds you that you\'re never too far gone to find your way home.',
  ogImage: ogImageUrl,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: `${siteData.artistName} Duo Cover`,
  ogUrl: canonicalUrl,
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: `${siteData.artistName} | ${siteData.tagline}`,
  twitterDescription: `Faith-driven music from ${siteData.location}. Stream "${siteData.latestRelease.title}" on Spotify, Apple Music, and YouTube.`,
  twitterImage: ogImageUrl,
})

// Datos estructurados (schema.org/MusicGroup) para que Google reconozca
// a la banda como entidad propia y la distinga de otros "True North".
const musicGroupSchema = {
  '@context': 'https://schema.org',
  '@type': 'MusicGroup',
  name: siteData.artistName,
  url: canonicalUrl,
  image: ogImageUrl,
  genre: ['Christian Music', 'Gospel', 'Pop'],
  foundingDate: String(siteData.yearStarted),
  foundingLocation: {
    '@type': 'Place',
    name: siteData.location,
  },
  member: [
    { '@type': 'Person', name: 'Nina Catari', roleName: 'Vocals & Composition' },
    { '@type': 'Person', name: 'Frank Morgan', roleName: 'Songwriter & Educator' },
  ],
  award: [
    'German Adventjugend Song Contest — 1st Place',
    "EUD Vision Song Contest — Germany's entry",
  ],
  sameAs: [
    siteData.socials.instagram,
    siteData.socials.tiktok,
    siteData.socials.youtube,
    siteData.socials.facebook,
  ],
}

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'canonical', href: canonicalUrl }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(musicGroupSchema),
    },
  ],
})
</script>