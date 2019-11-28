<template>
  <div class=main-tab-list>
    <tab-list>
      <tab-list-item path="/home/prevalent"><template><span>流行</span></template></tab-list-item>
      <tab-list-item path="/home/newstyle"><template><span>新款</span></template></tab-list-item>
      <tab-list-item path="/home/choice"><template><span>精选</span></template></tab-list-item>
    </tab-list>
  </div>
</template>

<script>
  import TabList from 'components/common/tabList/TabList'
  import TabListItem from 'components/common/tabList/TabListItem'

  export default {
    name: 'MainTabList',
    components: {
      TabList,
      TabListItem
    }
  }
</script>

<style scoped>

</style>
