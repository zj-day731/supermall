<template>
    <div class="nav-bar" :style="navColor">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
  export default {
    name: 'NavBar',
    props: {
      color: {
        type: String,
        default: '#ff8198'
      }
    },
    computed: {
      navColor() {
        return {backgroundColor: this.color}
      }
    }
  }
</script>

<style scoped>
  .nav-bar {
    display: flex;
    height: 44px;
    line-height: 44px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
  }
  .left {
    width: 60px;
  }
  .right {
    width: 60px;
  }
  .center {
    flex: 1;
    background-color: var(--color-tint);
    text-align: center;
    color: white;
  }

</style>
