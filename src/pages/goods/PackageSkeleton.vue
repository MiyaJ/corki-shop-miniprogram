<template name="skeleton">
  <view class="sk-container">
    <scroll-view :scroll-y="true" class="viewport viewport" :enable-back-to-top="true">
      <view class="goods goods">
        <view class="preview preview">
          <swiper :circular="true" :current="0" :autoplay="false">
            <swiper-item
              style="
                position: absolute;
                width: 100%;
                height: 100%;
                transform: translate(0%, 0px) translateZ(0px);
              "
            >
              <image mode="aspectFill" class="sk-image"></image>
            </swiper-item>
          </swiper>
          <view class="indicator indicator">
            <text class="current sk-transparent sk-opacity">1</text>
            <text class="split sk-transparent sk-opacity">/</text>
            <text class="total sk-transparent sk-opacity">5</text>
          </view>
        </view>
        <view class="meta meta">
          <view class="price price">
            <text class="symbol sk-transparent sk-opacity">¥</text>
            <text class="number sk-transparent sk-text-14-2857-817 sk-text">19.00</text>
          </view>
          <view class="name ellipsis sk-transparent sk-text-14-2857-767 sk-text"
            >红小豆450克*3袋</view
          >
          <view class="desc sk-transparent sk-text-0-0000-311 sk-text">皮薄易煮，粒粒香甜app</view>
        </view>
        <view class="action action">
          <view class="item arrow sk-pseudo sk-pseudo-circle">
            <text class="label sk-transparent sk-text-14-2857-103 sk-text">选择</text>
            <text class="text ellipsis sk-transparent sk-text-14-2857-220 sk-text">
              请选择商品规格
            </text>
          </view>
          <view class="item arrow sk-pseudo sk-pseudo-circle">
            <text class="label sk-transparent sk-text-14-2857-66 sk-text">送至</text>
            <text class="text ellipsis sk-transparent sk-text-14-2857-854 sk-text">
              请选择收获地址
            </text>
          </view>
          <view class="item arrow sk-pseudo sk-pseudo-circle">
            <text class="label sk-transparent sk-text-14-2857-869 sk-text">服务</text>
            <text class="text ellipsis sk-transparent sk-text-14-2857-612 sk-text">
              无忧退 快速退款 免费包邮
            </text>
          </view>
        </view>
      </view>
      <view>
        <view is="node-modules/@dcloudio/uni-ui/lib/uni-popup/uni-popup" class="r r"></view>
      </view>
      <view class="detail detail panel panel">
        <view class="title title">
          <text class="sk-transparent sk-text-0-0000-370 sk-text">详情</text>
        </view>
        <view class="content content">
          <view class="properties properties">
            <view class="item item">
              <text class="label sk-transparent sk-text-25-0000-613 sk-text">产地</text>
              <text class="value sk-transparent sk-text-25-0000-321 sk-text">中国大陆</text>
            </view>
          </view>
        </view>
      </view>
    </scroll-view>
    <view class="toolbar toolbar" style="padding-bottom: 34px">
      <view class="icons icons">
        <button class="icons-button sk-transparent sk-button sk-pseudo sk-pseudo-circle">
          <text class="icon-heart sk-pseudo sk-pseudo-circle"></text>收藏
        </button>
        <button
          class="icons-button sk-transparent sk-button sk-pseudo sk-pseudo-circle"
          open-type="contact"
        >
          <text class="icon-handset sk-pseudo sk-pseudo-circle"></text>客服
        </button>
        <navigator class="icons-button sk-transparent" open-type="switchTab">
          <text class="icon-cart sk-pseudo sk-pseudo-circle"></text>购物车
        </navigator>
      </view>
      <view class="buttons buttons">
        <view
          class="addcart sk-transparent sk-text-32-4324-39 sk-text"
          style="background-position-x: 50%"
        >
          加入购物车
        </view>
        <view
          class="buynow sk-transparent sk-text-32-4324-186 sk-text"
          style="background-position-x: 50%"
        >
          立即购买
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="scss">
.sk-transparent {
  color: transparent !important;
}

.sk-opacity {
  opacity: 0 !important;
}

.sk-text-14-2857-817 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 78.0769rpx;
  position: relative !important;
}

.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}

.sk-text-14-2857-767 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.0769rpx;
  position: relative !important;
}

.sk-text-0-0000-311 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 23.0769rpx;
  position: relative !important;
}

.sk-text-14-2857-103 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}

.sk-text-14-2857-220 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}

.sk-text-14-2857-66 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}

.sk-text-14-2857-854 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}

.sk-text-14-2857-869 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}

.sk-text-14-2857-612 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}

.sk-text-0-0000-370 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 26.9231rpx;
  position: relative !important;
}

.sk-text-25-0000-613 {
  background-image: linear-gradient(
    transparent 25%,
    #eeeeee 0%,
    #eeeeee 75%,
    transparent 0%
  ) !important;
  background-size: 100% 50rpx;
  position: relative !important;
}

.sk-text-25-0000-321 {
  background-image: linear-gradient(
    transparent 25%,
    #eeeeee 0%,
    #eeeeee 75%,
    transparent 0%
  ) !important;
  background-size: 100% 50rpx;
  position: relative !important;
}

.sk-text-32-4324-39 {
  background-image: linear-gradient(
    transparent 32.4324%,
    #eeeeee 0%,
    #eeeeee 67.5676%,
    transparent 0%
  ) !important;
  background-size: 100% 71.1538rpx;
  position: relative !important;
}

.sk-text-32-4324-186 {
  background-image: linear-gradient(
    transparent 32.4324%,
    #eeeeee 0%,
    #eeeeee 67.5676%,
    transparent 0%
  ) !important;
  background-size: 100% 71.1538rpx;
  position: relative !important;
}

.sk-button {
  color: #efefef !important;
  background: #efefef !important;
  border: none !important;
  box-shadow: none !important;
}

.sk-image {
  background: #efefef !important;
}

.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}

.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}

.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}

.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
