<template>
  <div class="wrapper">
    <swiper :options="swiperOption" >
        <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img"  :src="item.imgUrl"/>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'https://img1.qunarzz.com/qs/1812/6a/127f75ee20662b02.jpg'
      }, {
        id: '0002',
        imgUrl: 'https://img1.qunarzz.com/qs/1812/5d/4b3df3d79c6e2c02.jpg'
      }, {
        id: '0003',
        imgUrl: 'https://img1.qunarzz.com/qs/1812/80/ea6d36f07a3d2202.jpg'
      }, {
        id: '0004',
        imgUrl: 'https://img1.qunarzz.com/qs/1808/f1/5237b90429129102.jpg'
      }, {
        id: '0005',
        imgUrl: 'https://img1.qunarzz.com/qs/1811/25/9639ae52091e9102.jpg'
      }, {
        id: '0006',
        imgUrl: 'https://img1.qunarzz.com/qs/1812/b3/fbe481244a258802.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background : #fff
  .wrapper
    overflow : hidden
    width : 100%
    hight : 0
    padding-bottom : 31.25%
    background : #eee
    .swiper-img
      width : 100%
</style>
