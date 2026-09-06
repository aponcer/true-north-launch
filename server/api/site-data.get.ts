// server/routes/api/site-data.get.ts
import { siteData as fallbackData } from '~/data/siteData'

export default defineCachedEventHandler(async () => {
  const config = useRuntimeConfig()

  if (!config.jsonbinBinId || !config.jsonbinAccessKey) {
    return fallbackData
  }

  try {
    const response: any = await $fetch(
      `https://api.jsonbin.io/v3/b/${config.jsonbinBinId}/latest`,
      {
        headers: {
          'X-Access-Key': config.jsonbinAccessKey
        }
      }
    )
    return response.record || fallbackData
  } catch (error) {
    return fallbackData
  }
}, {
  maxAge: 60 * 60,
})