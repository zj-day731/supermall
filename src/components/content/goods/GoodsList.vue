<template>
  <div class="goods-info">
    <img :src="item.show.img" alt="">
    <div class="item-des">
      <p class="title">{{item.title}}</p>
      <div>
        <span class="price">{{item.price}}</span>
        <span class="collect">{{item.cfav}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GoodsList',
    props: {
      item: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .goods-info {
    position: relative;
    text-align: center;
    padding-bottom: 40px;
    margin-bottom: 5px;
  }
  .goods-info img {
    width: 100%;
    border-radius: 5px;
  }
  .goods-info .item-des {
    width: 100%;
    position: absolute;
    bottom: 0;
  }
  .goods-info .title {
    padding: 0 3px;
    height: 20px;
    line-height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .goods-info .price {
    height: 20px;
    line-height: 20px;
    color: var(--color-tint);
    margin-right: 30px;
  }
  .goods-info .collect {
    position: relative;
  }
  .goods-info .collect::before {
    content: '';
    position: absolute;
    top: 1px;
    left: -15px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }

</style>
