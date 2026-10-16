<!-- components/Shows.vue -->
<template>
  <section id="shows" class="py-16 bg-neutral-50 border-t border-neutral-100">
    <div class="max-w-4xl mx-auto px-6 space-y-8">
      <div class="text-center">
        <h2 class="text-xs font-bold uppercase tracking-widest text-rose-500 mb-2">
          Live
        </h2>
        <h3 class="text-3xl font-extrabold text-neutral-900">
          Upcoming Shows
        </h3>
      </div>

      <div
        v-if="mounted"
        class="bg-white rounded-2xl border border-neutral-200/60 shadow-sm overflow-y-auto max-h-120 p-4"
      >
        <a
          class="bit-widget-initializer"
          data-artist-name="id_15644709"
          data-background-color="rgba(255,255,255,1)"
          data-separator-color="rgba(229,229,229,1)"
          data-text-color="rgba(23,23,23,1)"
          data-font="Helvetica"
          data-display-local-dates="true"
          data-display-past-dates="true"
          data-display-details="true"
          data-display-lineup="false"
          data-display-start-time="true"
          data-social-share-icon="true"
          data-display-limit="all"
          data-follow-section-position="top"
          data-follow-section-alignment="center"
          data-follow-section-cta-text="FOLLOW"
          data-follow-section-cta-icon="true"
          data-app-id="20f440f7d3e5429df3080bef3304f690"
          data-bit-logo-color="rgba(244,63,94,1)"
        ></a>
      </div>
      <div v-else class="h-40 flex items-center justify-center text-neutral-400 text-sm">
        Loading shows…
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'

// El widget de Bandsintown no es compatible con SSR (manipula el DOM
// directamente), así que renderizamos el <a> recién en el cliente y
// cargamos su script después, para garantizar que el elemento ya
// exista en el DOM cuando el script lo escanea.
const mounted = ref(false)

onMounted(async () => {
  mounted.value = true
  await nextTick()

  if (document.querySelector('script[data-bit-widget]')) return

  const script = document.createElement('script')
  script.src = 'https://widgetv3.bandsintown.com/main.min.js'
  script.charset = 'utf-8'
  script.async = true
  script.dataset.bitWidget = 'true'
  document.body.appendChild(script)
})
</script>
