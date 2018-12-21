<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div
          class="icon"
          v-for="item of page"
          :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconList: [{
        id: '0001',
        imgUrl: 'http://p1.pstatp.com/weili/sm/492553034365927452.jpg',
        desc: '新年快乐'
      }, {
        id: '0002',
        imgUrl: 'https://seopic.699pic.com/photo/50013/6757.jpg_wh1200.jpg',
        desc: '美食广场'
      }, {
        id: '0003',
        imgUrl: 'https://img1.qunarzz.com/travel/d6/1603/69/e6f9d0c7a3a55ff7.jpg_480x360x95_601946a4.jpg',
        desc: '热门景点'
      }, {
        id: '0004',
        imgUrl: 'https://img01.sogoucdn.com/app/a/100520093/ac75323d6b6de243-72c7f71f5d8818aa-2233ab7fc8ac7bc0b1c516fb97e35351.jpg',
        desc: '海滩度假'
      }, {
        id: '0005',
        imgUrl: 'https://pic.baike.soso.com/ugc/baikepic2/1672/20161012140336-419487800.jpg/0',
        desc: '甜蜜亲子'
      }, {
        id: '0006',
        imgUrl: 'https://p0.ifengimg.com/pmop/2018/0418/F5C957AD325D3D4066E26EBC2E5265734CD049CF_size137_w900_h500.jpeg',
        desc: '境外旅游'
      }, {
        id: '0007',
        imgUrl: 'https://i01picsos.sogoucdn.com/e00010009fb5aa80',
        desc: '周末放松'
      }, {
        id: '0008',
        imgUrl: 'https://p.pstatp.com/weili/bl/132619227104280630.jpg',
        desc: '雪地乐园'
      }, {
        id: '0009',
        imgUrl: 'http://img.ivsky.com/img/tupian/pre/201709/09/juda_motianlun-001.jpg',
        desc: '欢乐乐园'
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus"  scoped>
@import '~styles/varibles.style'
@import '~styles/mixins.style'
  .icons
    overflow: hidden
    height: 0
    padding-bottom: 50%
    .icon
      position: relative
      overflow hidden
      float: left
      width: 25%
      padding-bottom: 25%
      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        .icon-img-content
          display:block
          margin: 0 auto
          width: 90%
          height: 100%
          border-radius: .5rem
      .icon-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: .44rem
        line-height: .44rem
        text-align: center
        color: $TextColor
        overflow hidden
        ellipsis()

</style>
