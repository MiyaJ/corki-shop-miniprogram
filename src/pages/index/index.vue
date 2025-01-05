<script setup lang="ts">
import { ref } from 'vue'
import type { BannerItem, CategoryItem, GuessItem, HotItem } from '@/types/home'
import CustomNavbar from './components/CustomNavbar.vue'
import { onLoad } from '@dcloudio/uni-app'
import {
  getHomeBannerAPI,
  getHomeCategoryAPI,
  getHomeHotAPI,
  getHomeGoodsGuessLikeAPI,
} from '../../services/home'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import type { PageResult } from '@/types/global'

const bannerList = ref<BannerItem[]>([])

const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}

// 获取首页-前台分类
const categoryList = ref<CategoryItem[]>([])
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
}

// 获取首页-热门推荐
const hostList = ref<HotItem[]>([])
const getHomeHotData = async () => {
  const res = await getHomeHotAPI()
  hostList.value = res.result
}

// 猜你喜欢
const guessList = ref<GuessItem[]>([])
const getHomeGoodsGuessLikeData = async () => {
  const res = await getHomeGoodsGuessLikeAPI()
  guessList.value = res.result.items
  console.log('guessList: ', guessList)
}

onLoad(() => {
  getHomeBannerData()
  getHomeCategoryData()
  getHomeHotData()
  getHomeGoodsGuessLikeData()
})
</script>

<template>
  <CustomNavbar />
  <XtxSwiper :list="bannerList" />
  <CategoryPanel :list="categoryList" />
  <HotPanel :list="hostList" />
  <XtxGuess :list="guessList" />
</template>

<style lang="scss"></style>
