<template>
  <div>
    <TabBar>
      <TabBarItem path="/home" col="">
        <template #icon><img src="~assets/img/tabbar/home.svg" alt=""></template>
        <template #activeIcon><img src="~assets/img/tabbar/home_active.svg" alt=""></template>
        <template #text><div>首页</div></template>
      </TabBarItem>
      <TabBarItem path="/category">
        <template #icon><img src="~assets/img/tabbar/category.svg" alt=""></template>
        <template #activeIcon><img src="~assets/img/tabbar/category_active.svg" alt=""></template>
        <template #text><div>分类</div></template>
      </TabBarItem>
      <TabBarItem path="/cart">
        <template #icon><img src="~assets/img/tabbar/shopcart.svg" alt=""></template>
        <template #activeIcon><img src="~assets/img/tabbar/shopcart_active.svg" alt=""></template>
        <template #text><div>购物车</div></template>
      </TabBarItem>
      <TabBarItem path="/profile">
        <template #icon><img src="~assets/img/tabbar/profile.svg" alt=""></template>
        <template #activeIcon><img src="~assets/img/tabbar/profile_active.svg" alt=""></template>
        <template #text><div>我的</div></template>
      </TabBarItem>
    </TabBar>
  </div>
</template>

<script>
  import TabBar from 'components/common/tabBar/TabBar'
  import TabBarItem from 'components/common/tabBar/TabBarItem'

  export default {
    name: 'MainTabBar',
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
