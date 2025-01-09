import type { CategoryTopItem } from '@/types/category'
import type { BannerItem } from '@/types/home'
import { http } from '@/utils/http'

export const getCategoryBannerAPI = (distributionSite = 2) => {
  return http<BannerItem[]>({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite,
    },
  })
}

export const getCategoryTopAPI = () => {
  return http<CategoryTopItem[]>({
    method: 'GET',
    url: '/category/top',
  })
}
