<template>
  <div>
    <nav-bar>
      <template #center><div>购物街</div></template>
    </nav-bar>
    <home-swiper :banners="banner"/>
    <home-recommend-view :recommends="recommend"/>
    <home-feature/>
    <tab-control :tabItem="['流行', '新款', '精选']" class="tab-control"></tab-control>
    <goods :goods="goods['pop'].list"></goods>
  </div>
</template>

<script>
  import {homeMult, homeGoods} from "network/home";

  import HomeSwiper from './homeChildren/HomeSwiper'
  import HomeRecommendView from './homeChildren/HomeRecommendView'
  import HomeFeature from './homeChildren/HomeFeatureView'

  import NavBar from 'components/common/navBar/NavBar'
  import TabControl from 'components/content/tabControl/TabControl'
  import Goods from 'components/content/goods/Goods'

  export default {
    name: 'Home',
    data() {
      return {
        banner: [],
        recommend: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},
        }
      }
    },
    components: {
      Goods,
      HomeSwiper,
      HomeRecommendView,
      HomeFeature,
      NavBar,
      TabControl,
    },
    created() {
      //轮播数据与推荐数据
      this.getHomeMult()

      //流行 新款 精选 数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    methods: {
      getHomeMult() {
        homeMult()
          .then(results => {
            this.banner = results.data.banner.list
            this.recommend = results.data.recommend.list
          }).catch(err => {
          console.log(err)
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        homeGoods(type, page)
          .then(res => {
            console.log(res);
            this.goods[type].list.push(...res.data.list)
            this.goods[type].page += 1
          })
      }
    }
  }
</script>
<style scoped>
  .tab-control {
    position: sticky;
    top: 44px;
    background-color: #fff;
    z-index: 9;
  }
</style>
