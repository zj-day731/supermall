<template>
  <div class="goods">
    <goods-list v-for="item in goods" :item="item" class="goods-list"/>
  </div>
</template>

<script>
  import GoodsList from './GoodsList'
  export default {
    name: 'Goods',
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      GoodsList
    }
  }
</script>

<style scoped>
  .goods {
    font-size: var(--font-size);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin:0 2px 64px;
  }
  .goods-list {
    width: 48%;
  }
</style>
