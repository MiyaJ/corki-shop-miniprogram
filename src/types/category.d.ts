import type { GoodsItem } from './global'

export type CategoryTopItem = {
  /** 分类id */
  id: string
  /** 分类名称 */
  name: string
  /** 分类图片 */
  picture: string
  /** 分类图片集[ 一级分类图片项 ] */
  imageBanners: string[]
  /** 子分类集合 */
  children: CategoryChildItem[]
}

export type CategoryChildItem = {
  /** 分类id */
  id: string
  /** 分类名称 */
  name: string
  /** 分类图片 */
  picture: string
  /** 父类id */
  parentId: string
  /** 父类名称 */
  parentName: string
  /** 商品 */
  goods: GoodsItem[]
}
