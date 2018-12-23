<template>
  <div>
    <div class="recommend-title">周末去哪</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl"/>
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/p/tts2/201309/22/6be826ad47d241e093835fbb.jpg_r_390x260x90_875ce1ad.jpg',
        title: '九江到云雾庐山纯玩两日游 庐山经典线路 庐山纯玩无购物游 庐山别墅瀑布',
        desc: '包含往返车票，酒店住宿，早餐，导游'
      }, {
        id: '0002',
        imgUrl: 'https://imgs.qunarzz.com/p/tts3/1802/4a/4d9ec7af40dce802.jpg_r_390x260x90_2f172934.jpg',
        title: '庐山、三清山、婺源、景德镇5日游>纯玩无购物+观山、赏云、古村游',
        desc: '包含往返车票，酒店住宿，早餐，导游'
      }, {
        id: '0003',
        imgUrl: 'https://imgs.qunarzz.com/p/p69/201302/28/ff01f038b129cfa993835fbb.jpg_480x320_d698e084.jpg',
        title: '南昌出发, 三亚4天3晚　三亚4日自由行(5钻)·【双湾连游】三亚湾1晚+海棠湾2晚',
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
    backgroun: #eee
    text-indent: .2rem
    color: red
  .item-img-wrapper
    overflow hidden
    height: 0
    padding-bottom: 33.9%
    .item-img
      width: 100%
  .item-info
    padding: .1rem
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
</style>
