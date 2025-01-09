import type { GoodsItem, PageResult, PageParams } from './global'

/**
 * 热门推荐
 */
export type HotResult = {
  /** id */
  id: string
  /** banner图片 */
  bannerPicture: string
  /** 标题 */
  title: string
  /** 子类 */
  subTypes: SubTypeItem[]
}

/**
 * 热门推荐-子类选项
 */
export type SubTypeItem = {
  /** 子类id */
  id: string
  /** 子类标题 */
  title: string
  /** 子类商品分页数据 */
  goodsItems: PageResult<GoodsItem>
}

export type HotParams = PageParams & {
  subType: string
}
