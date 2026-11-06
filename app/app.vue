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
  alternateName: `${siteData.artistName} Duo`,
  description: `${siteData.artistName} is a faith-driven Christian music duo from ${siteData.location}.`,
  url: canonicalUrl,
  logo: `${requestUrl.origin}/images/logo-tn.webp`,
  image: ogImageUrl,
  genre: ['Christian Music', 'Gospel', 'Pop'],
  foundingDate: String(siteData.yearStarted),
  foundingLocation: {
    '@type': 'Place',
    name: siteData.location,
  },
  // OrganizationRole es la forma correcta en schema.org de asociar un
  // roleName a un member (Person no tiene roleName propio).
  member: [
    {
      '@type': 'OrganizationRole',
      roleName: 'Vocals & Composition',
      member: { '@type': 'Person', name: 'Nina Catari' },
    },
    {
      '@type': 'OrganizationRole',
      roleName: 'Songwriter & Educator',
      member: { '@type': 'Person', name: 'Frank Morgan' },
    },
  ],
  award: [
    'German Adventjugend Song Contest — 1st Place',
    'EUD Vision Song Contest — Winner',
  ],
  sameAs: [
    siteData.socials.instagram,
    siteData.socials.tiktok,
    siteData.socials.youtube,
    siteData.socials.facebook,
    'https://www.bandsintown.com/a/15644709-true-north',
    'https://open.spotify.com/artist/23yFNjBurTG9OdprDpqZjS',
    'https://music.apple.com/de/artist/true-north/1895142220?l=en-GB',
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