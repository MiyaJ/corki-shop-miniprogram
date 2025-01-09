import type { HotResult, HotParams } from '@/types/hot'
import { http } from '@/utils/http'

/**
 * 获取热门推荐API
 * @param url 请求地址
 * @param data 请求参数
 * @returns
 */
export const getHotRecommendAPI = (url: string, data?: HotParams) => {
  return http<HotResult>({
    method: 'GET',
    url,
    data,
  })
}
