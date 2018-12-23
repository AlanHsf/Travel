<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl"/>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-buttom">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/p/p48/201302/28/bc44faa497db0dcf93835fbb.jpg_256x160_0ba13461.jpg',
        title: '南昌到泰国五天自由行',
        desc: '含往返飞机票(含税)+4晚住宿'
      }, {
        id: '0002',
        imgUrl: 'https://imgs.qunarzz.com/p/p48/201302/28/bc44faa497db0dcf93835fbb.jpg_256x160_0ba13461.jpg',
        title: '南昌到泰国五天自由行',
        desc: '含往返飞机票(含税)+4晚住宿'
      }, {
        id: '0003',
        imgUrl: 'https://imgs.qunarzz.com/p/p48/201302/28/bc44faa497db0dcf93835fbb.jpg_256x160_0ba13461.jpg',
        title: '南昌到泰国五天自由行',
        desc: '含往返飞机票(含税)+4晚住宿'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.style'
  .recommend-title
    text-align: center
    margin-top: .2rem 0 auto
    line-height: .8rem
    backgroun-color: pink
    text-indent: .2rem
    color: red
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-buttom
        line-height: .44rem
        margin-top: .16rem
        background: #ff9400
        padding: 0.2rem
        border-radius .06rem
        color: #fff
</style>
