<template>
  <div class="tab-bar-item" @click="activeClick">
    <div v-if="!isTrue"><slot name="icon"></slot></div>
    <div v-else><slot name="activeIcon"></slot></div>
    <div :class="{'active': isTrue}" :style="activeText"><slot name="text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: 'TabBarItem',
    props: {
      path: String,
      col: {
        type: String,
        default: 'red',
      }
    },
    data() {
      return {
      }
    },
    methods: {
      activeClick() {
        if(this.$route.path !== this.path) {
          this.$router.replace(this.path)
        }
      }
    },
    computed: {
      isTrue() {
        return this.$route.path.includes(this.path)
      },
      activeText() {
        return this.isTrue ? {'color': this.col} : {}
      }
    }
  }
</script>

<style>
  .tab-bar-item {
    flex: 1;
    height: 49px;
    text-align: center;
    font-size: 14px;
  }
  .tab-bar-item img {
    margin-top: 3px;
    width: 23px;
    height: 23px;
    vertical-align: middle;
    margin-bottom: 4px;
  }
  .active {
    color: #ff5011;
  }
</style>
