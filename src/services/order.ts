import type { OrderPreResult, OrderCreateParams, OrderCreateResult } from '@/types/order'
import { http } from '@/utils/http'
/**
 * 填写订单-获取预付订单
 */
export const getMemberOrderPreAPI = () => {
  return http<OrderPreResult>({
    method: 'GET',
    url: '/member/order/pre',
  })
}

/** 立即购买 */
export const getMemberOrderPreNowAPI = (data: {
  skuId: string
  count: number
  addressId?: string
}) => {
  return http<OrderPreResult>({
    method: 'GET',
    url: '/member/order/pre/now',
    data,
  })
}

/** 提交订单 */
export const postMemberOrderAPI = (data: OrderCreateParams) => {
  return http<OrderCreateResult>({
    method: 'POST',
    url: '/member/order',
    data,
  })
}
