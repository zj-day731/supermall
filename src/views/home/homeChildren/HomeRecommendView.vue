<template>
  <div class="recommend">
    <div v-for="item in recommends">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div >{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeRecommendView',
    props: {
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .recommend {
    display: flex;
    text-align: center;
    font-size: var(--font-size);
    padding: 15px 0 10px;
    border-bottom: 6px solid #e4e4e4;
  }
  .recommend > div {
    flex: 1;
  }
  .recommend img {
    width: 80%;
    margin-bottom: 5px;
  }
</style>
