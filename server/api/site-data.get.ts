// server/routes/api/site-data.get.ts
import { siteData as fallbackData } from '~/data/siteData'

export default defineEventHandler(async () => {
  const config = useRuntimeConfig()

  if (!config.jsonbinBinId || !config.jsonbinMasterKey) {
    return fallbackData
  }

  try {
    const response: any = await $fetch(
      `https://api.jsonbin.io/v3/b/${config.jsonbinBinId}/latest`,
      {
        headers: {
          'X-Master-Key': config.jsonbinMasterKey
        }
      }
    )
    return response.record || fallbackData
  } catch (error) {
    return fallbackData
  }
})