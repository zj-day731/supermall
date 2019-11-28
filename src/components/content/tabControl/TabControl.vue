<template>
  <div class="tab-control">
    <div v-for="(item, index) in tabItem" @click="activeItem(index)">
      <span :class="{activeCol: index === activeIndex}">{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TabControl',
    data() {
      return {
        activeIndex: 0
      }
    },
    props: {
      tabItem: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      activeItem(index) {
        this.activeIndex = index
      }
    }
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    height:40px;
    line-height: 40px;
    font-size: var(--font-size);
  }
  .tab-control > div {
    flex: 1;
  }
  .activeCol {
    border-bottom: 3px solid var(--color-height-text);
    padding: 0 5px 5px;
    color: var(--color-height-text);
  }
</style>
