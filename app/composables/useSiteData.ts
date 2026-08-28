import { siteData as fallbackData } from '~/data/siteData'

export const useSiteData = async () => {
  const { data } = await useFetch('/api/site-data')
  return data.value || fallbackData
}